<template lang="pug">
  .ui.container.two.column.stackable.grid(v-if="!uid")
    .column
      .ui.segment
        .ui.header 留言板
        .ui.description 請先登入才能留言
        .ui.divider
        button.ui.large.green.basic.button(@click="toggleLogin") 登入

  .bulletin-container(v-else)
    BulletinMessageDisplay(
      :uid="uid"
      :users="users"
      :messages="messages"
      :replying-to="replyingTo"
      @toggle-reaction="toggleReaction"
      @toggle-reply-form="toggleReplyForm"
      @quote-message="quoteMessage"
      @edit-message="editMessage"
      @save-edit="saveEditMessage"
      @cancel-edit="cancelEditMessage"
      @delete-reply="deleteReply"
      @add-reply="addReply"
      @cancel-reply="cancelReply"
      @toggle-task="toggleTask"
      @handle-dropdown-click="handleDropdownClick"
      @expand-message="handleExpandMessage"
      @collapse-message="handleCollapseMessage"
      @expand-reply="handleExpandReply"
      @collapse-reply="handleCollapseReply"
      @toggle-replies="handleToggleReplies"
    )

    BulletinMessageEditor(
      :uid="uid"
      :users="users"
      @add-message="addMessage"
    )
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import { onValue, ref as dbRef, get, set } from 'firebase/database';
import { bulletinRef, database } from '@/firebase';
import BulletinMessageDisplay from '@/components/BulletinMessageDisplay.vue';
import BulletinMessageEditor from '@/components/BulletinMessageEditor.vue';

interface User {
  name: string;
  photoURL?: string;
  email?: string;
}

interface Message {
  author: string;
  uid: string;
  date: string;
  updated?: string;
  text: string;
  reactions: {
    [key: string]: {
      [uid: string]: boolean;
    };
  };
  replies?: Reply[];
  repliesExpanded?: boolean;
  textExpanded?: boolean;
  actualIndex?: number;
  attachments?: Array<{name: string, url: string, size: number, type: string}>;
  hrefs?: string[];
  mentions?: string[];
  labels?: Array<{id: string, name: string, color: string}>;
  status?: 'open' | 'closed' | 'resolved' | 'in-progress';
  references?: Array<{id: number, preview: string, type: 'message' | 'reply'}>;
  tasks?: Array<{id: string, text: string, completed: boolean}>;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  assignees?: string[];
  notifyAllUsers?: boolean;
}

interface Reply {
  author: string;
  uid: string;
  date: string;
  text: string;
  textExpanded?: boolean;
  reactions?: {
    [key: string]: {
      [uid: string]: boolean;
    };
  };
}

interface MessageData {
  text: string;
  attachments: Array<{name: string, url: string, size: number, type: string}>;
  hrefs: string[];
  mentionedUsers: string[];
  tasks: Array<{id: string, text: string, completed: boolean}>;
  referencedMessages: Array<{id: number, preview: string, type: 'message' | 'reply'}>;
  notifyAllUsers: boolean;
}

interface FirebaseMessage {
  author: string;
  uid: string;
  date: string;
  text: string;
  updated?: string;
  reactions?: {[key: string]: {[uid: string]: boolean}};
  replies?: FirebaseReply[];
  hrefs?: string[];
  attachments?: Array<{name: string, url: string, size: number, type: string}>;
  labels?: Array<{id: string, name: string, color: string}>;
  status?: string;
  references?: Array<{id: number, preview: string, type: string}>;
  tasks?: Array<{id: string, text: string, completed: boolean}>;
  priority?: string;
  assignees?: string[];
  notifyAllUsers?: boolean;
}

interface FirebaseReply {
  author: string;
  uid: string;
  date: string;
  text: string;
  reactions?: {[key: string]: {[uid: string]: boolean}};
}

export default defineComponent({
  components: {
    BulletinMessageDisplay,
    BulletinMessageEditor
  },
  props: {
    uid: {
      required: false,
      default: ''
    },
    users: {
      required: false,
      default: () => ({})
    }
  },
  setup(props, { emit }) {

    const messages = ref<Message[]>([
      { author: 'AliceS', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'BobS', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },
    ].map(msg => ({
      ...msg,
      reactions: {}
    })));

    const dataLoaded = ref(false);
    const replyingTo = ref(-1);

    // 標籤系統相關變數 - 直接在組件中定義
    const availableLabels = ref([
      { id: 'bug', name: '錯誤', color: 'red' },
      { id: 'feature', name: '功能請求', color: 'blue' },
      { id: 'discussion', name: '討論', color: 'green' },
      { id: 'question', name: '疑問', color: 'yellow' },
      { id: 'urgent', name: '緊急', color: 'orange' },
      { id: 'documentation', name: '文檔', color: 'purple' },
      { id: 'enhancement', name: '改進', color: 'teal' },
      { id: 'announcement', name: '公告', color: 'violet' },
      { id: 'feedback', name: '回饋', color: 'pink' },
      { id: 'meeting', name: '會議', color: 'brown' },
      { id: 'event', name: '活動', color: 'olive' }
    ]);

    // 新增狀態管理相關變數
    const availableStatuses = ref([
      { value: 'open', text: '開啟', icon: 'circle outline' },
      { value: 'in-progress', text: '進行中', icon: 'hourglass half' },
      { value: 'resolved', text: '已解決', icon: 'check circle' },
      { value: 'closed', text: '已關閉', icon: 'times circle' }
    ]);

    // 新增優先級相關變數
    const availablePriorities = ref([
      { value: 'low', text: '低', icon: 'chevron down' },
      { value: 'medium', text: '中', icon: 'minus' },
      { value: 'high', text: '高', icon: 'chevron up' },
      { value: 'urgent', text: '緊急', icon: 'exclamation triangle' }
    ]);

    const addMessage = (messageData: MessageData) => {
      if (!dataLoaded.value) return;

      const m_length = messages.value.length;

      // 檢測引用時需要驗證消息是否存在
      const validatedReferences = messageData.referencedMessages.filter((ref) => {
        if (ref.id < messages.value.length) {
          const referencedMessage = messages.value[ref.id];
          if (referencedMessage) {
            ref.preview = referencedMessage.text.substring(0, 50) + (referencedMessage.text.length > 50 ? '...' : '');
            return true;
          }
        }
        return false;
      });

      const newMessageObj: Message = {
        author: props.users[props.uid].name || '匿名',
        uid: props.uid || '123',
        date: new Date().toISOString(),
        text: messageData.text,
        reactions: {},
      }

      if (messageData.mentionedUsers.length > 0) {
        newMessageObj.mentions = messageData.mentionedUsers;
      }

      if (messageData.attachments.length > 0) {
        newMessageObj.attachments = messageData.attachments;
      }

      if (messageData.hrefs.length > 0) {
        newMessageObj.hrefs = messageData.hrefs;
      }

      if (messageData.tasks.length > 0) {
        newMessageObj.tasks = messageData.tasks;
      }

      if (validatedReferences.length > 0) {
        newMessageObj.references = validatedReferences;
      }

      if (messageData.notifyAllUsers) {
        newMessageObj.notifyAllUsers = true;
      }

      messages.value.push(newMessageObj);

      // 如果勾選了發送給所有用戶，則發送通知給所有用戶
      if (messageData.notifyAllUsers) {
        sendNotificationToAllUsers(newMessageObj, m_length);
      }

      // 如果沒有勾選發送給所有用戶，則發送通知給被提及的用戶
      if (messageData.mentionedUsers.length > 0 && !messageData.notifyAllUsers) {
        sendMentionNotifications(messageData.mentionedUsers, newMessageObj, null, m_length);
      }

      set(dbRef(database, 'bulletin/' + m_length), newMessageObj).then(() => {
        console.log('留言成功');
      });
    }

    const toggleLogin = () => {
      emit('toggleLogin');
    }



    const toggleReaction = (message: Message, reaction: string) => {
      if (!props.uid) return;

      if (!message.reactions) {
        message.reactions = {};
      }

      if (!message.reactions[reaction]) {
        message.reactions[reaction] = {};
      }

      if (message.reactions[reaction][props.uid]) {
        delete message.reactions[reaction][props.uid];
      } else {
        message.reactions[reaction][props.uid] = true;
      }

      if (message.actualIndex !== undefined) {
        set(dbRef(database, `bulletin/${message.actualIndex}/reactions`), message.reactions).then(() => {
          console.log('反應更新成功');
        });
      }
    };

    const toggleReplyForm = (index: number) => {
      if (!props.uid) return;

      if (replyingTo.value === index) {
        replyingTo.value = -1;
      } else {
        replyingTo.value = index;
      }
    };

    const cancelReply = () => {
      replyingTo.value = -1;
    };

    const addReply = (index: number, text: string) => {
      if (!dataLoaded.value || !props.uid || text.trim() === '') return;

      const messageToReply = messages.value[index];

      if (!messageToReply.replies) {
        messageToReply.replies = [];
      }

      const mentionedUsers = detectMentionedUsers(text);

      const newReply: Reply = {
        author: props.users[props.uid].name || '匿名',
        uid: props.uid,
        date: new Date().toISOString(),
        text: text.trim()
      };

      messageToReply.replies.push(newReply);

      sendMentionNotifications(mentionedUsers, messageToReply, newReply, index);

      replyingTo.value = -1;

      set(dbRef(database, `bulletin/${index}/replies`), messageToReply.replies).then(() => {
        console.log('回覆新增成功');
      });
    };

    const deleteReply = (messageIndex: number, replyIndex: number) => {
      if (!dataLoaded.value || !props.uid) return;

      const messageToUpdate = messages.value[messageIndex];

      if (!messageToUpdate.replies || replyIndex >= messageToUpdate.replies.length) return;

      const replyToDelete = messageToUpdate.replies[replyIndex];
      if (replyToDelete.uid !== props.uid) return;

      if (window.confirm('確定要刪除這則回覆嗎？')) {
        messageToUpdate.replies.splice(replyIndex, 1);

        set(dbRef(database, `bulletin/${messageIndex}/replies`), messageToUpdate.replies).then(() => {
          console.log('回覆刪除成功');
        });
      }
    };

    const editMessage = (index: number) => {
      // 這個函數保留但不做任何事，因為編輯功能已移到模態框
      console.log('Legacy editMessage called for index:', index);
    };

    const saveEditMessage = (index: number, newText: string) => {
      if (!dataLoaded.value || !props.uid) return;

      const messageToEdit = messages.value[index];

      if (messageToEdit.uid !== props.uid || (messageToEdit.replies && messageToEdit.replies.length > 0)) return;

      if (newText.trim() !== '') {
        messageToEdit.text = newText.trim();
        messageToEdit.updated = new Date().toISOString();

        set(dbRef(database, `bulletin/${index}/text`), newText.trim()).then(() => {
          console.log('留言編輯成功');
        });
        set(dbRef(database, `bulletin/${index}/updated`), messageToEdit.updated).then(() => {
          console.log('更新時間記錄成功');
        });
      }
    };

    const cancelEditMessage = () => {
      // 編輯取消的處理邏輯，如果需要的話
      console.log('編輯已取消');
    };

    const handleHighlight = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const highlightMessageId = urlParams.get('highlight');
      console.log('highlightMessageId', highlightMessageId);

      if (highlightMessageId) {
        nextTick(() => {
              const messageElement = document.querySelector(`[data-message-id="${highlightMessageId}"]`);
              console.log('messageElement', messageElement);

              if (messageElement) {
                messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

                messageElement.classList.add('highlight-message');

                setTimeout(() => {
                  messageElement.classList.remove('highlight-message');
                }, 3000);
          }
        });
      }
    };

    const quoteMessage = (messageIndex: number) => {
      if (!dataLoaded.value || !props.uid) return;

      const message = messages.value[messageIndex];
      const quotedText = `> ${message.author}: ${message.text.substring(0, 100)}${message.text.length > 100 ? '...' : ''}\n\n`;

      // 將引用內容傳給編輯組件
      emit('quote-message', quotedText);
    };

    // 當前激活的下拉菜單
    const activeDropdownMenu = ref<HTMLElement | null>(null);
    const activeDropdownType = ref<string>('');
    const activeDropdownMessageIndex = ref<number>(-1);

    // 創建動態下拉菜單
    const createDropdownMenu = (type: string, messageIndex: number, targetElement: HTMLElement) => {
      // 移除現有的下拉菜單
      removeActiveDropdownMenu();

      const menu = document.createElement('div');
      menu.className = 'dynamic-dropdown-menu';
      menu.style.cssText = `
        position: fixed;
        z-index: 9999999;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        min-width: 160px;
        max-width: 250px;
        overflow: hidden;
        font-family: inherit;
        font-size: 14px;
      `;

      const message = messages.value[messageIndex];
      let menuItems = '';

      if (type === 'labels') {
        availableLabels.value.forEach(label => {
          const isActive = hasLabel(message, label.id);
          menuItems += `
            <div class="dropdown-item ${isActive ? 'active' : ''}" data-action="toggleLabel" data-label-id="${label.id}">
              <i class="tag icon ${label.color}"></i>
              ${label.name}
            </div>
          `;
        });
      } else if (type === 'status') {
        availableStatuses.value.forEach(status => {
          const isActive = message.status === status.value;
          menuItems += `
            <div class="dropdown-item ${isActive ? 'active' : ''}" data-action="changeStatus" data-status="${status.value}">
              <i class="icon ${status.icon}"></i>
              ${status.text}
            </div>
          `;
        });
      } else if (type === 'priority') {
        availablePriorities.value.forEach(priority => {
          const isActive = message.priority === priority.value;
          menuItems += `
            <div class="dropdown-item ${isActive ? 'active' : ''}" data-action="changePriority" data-priority="${priority.value}">
              <i class="icon ${priority.icon}"></i>
              ${priority.text}
            </div>
          `;
        });
      }

      menu.innerHTML = menuItems;

      // 添加樣式
      const style = document.createElement('style');
      style.textContent = `
        .dynamic-dropdown-menu .dropdown-item {
          padding: 0.75rem 1rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.2s ease;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.9rem;
        }
        .dynamic-dropdown-menu .dropdown-item:last-child {
          border-bottom: none;
        }
        .dynamic-dropdown-menu .dropdown-item:hover {
          background-color: #f8f9fa;
        }
        .dynamic-dropdown-menu .dropdown-item.active {
          background-color: #0066FF;
          color: white;
        }
        .dynamic-dropdown-menu .dropdown-item i.icon {
          opacity: 0.7;
        }
        .dynamic-dropdown-menu .dropdown-item.active i.icon {
          opacity: 1;
        }
      `;
      document.head.appendChild(style);

      // 計算位置
      const rect = targetElement.getBoundingClientRect();
      let top = rect.bottom + 4;
      let left = rect.left;

      document.body.appendChild(menu);

      // 檢查邊界並調整位置
      const menuRect = menu.getBoundingClientRect();

      // 檢查右邊界
      if (menuRect.right > window.innerWidth - 10) {
        left = window.innerWidth - menuRect.width - 10;
      }

      // 檢查底部邊界
      if (menuRect.bottom > window.innerHeight - 10) {
        top = rect.top - menuRect.height - 4;
      }

      menu.style.top = `${top}px`;
      menu.style.left = `${left}px`;

      // 添加事件監聽器
      menu.addEventListener('click', (e) => {
        const item = (e.target as HTMLElement).closest('.dropdown-item');
        if (item) {
          const action = item.getAttribute('data-action');

          if (action === 'toggleLabel') {
            const labelId = item.getAttribute('data-label-id');
            const label = availableLabels.value.find(l => l.id === labelId);
            if (label) {
              toggleLabel(messageIndex, label);
            }
          } else if (action === 'changeStatus') {
            const status = item.getAttribute('data-status');
            if (status) {
              changeStatus(messageIndex, status);
            }
          } else if (action === 'changePriority') {
            const priority = item.getAttribute('data-priority');
            if (priority) {
              changePriority(messageIndex, priority);
            }
          }

          removeActiveDropdownMenu();
        }
      });

      activeDropdownMenu.value = menu;
      activeDropdownType.value = type;
      activeDropdownMessageIndex.value = messageIndex;
    };

    // 移除激活的下拉菜單
    const removeActiveDropdownMenu = () => {
      if (activeDropdownMenu.value) {
        activeDropdownMenu.value.remove();
        activeDropdownMenu.value = null;
        activeDropdownType.value = '';
        activeDropdownMessageIndex.value = -1;
      }
    };

    // 處理下拉菜單的顯示和隱藏
    const handleDropdownClick = (event: Event) => {
      event.stopPropagation();
      const button = (event.target as HTMLElement).closest('.dropdown-trigger');
      if (button) {
        const type = button.getAttribute('data-dropdown-type');
        const messageIndex = parseInt(button.getAttribute('data-message-index') || '0');

        if (type && messageIndex >= 0) {
          createDropdownMenu(type, messageIndex, button as HTMLElement);
        }
      }
    };

    // 點擊其他地方關閉下拉菜單
    const handleDocumentClick = (event: Event) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.dropdown-trigger') && !target.closest('.dynamic-dropdown-menu')) {
        removeActiveDropdownMenu();
      }
    };

    // 保存事件監聽器引用以便清理
    const scrollHandler = () => {
      removeActiveDropdownMenu();
    };

    const detectMentionedUsers = (text: string): string[] => {
      if (!text) return [];

      const mentionedUsers: string[] = [];
      const mentionRegex = /@([a-zA-Z0-9\u4e00-\u9fa5_]+)/g;
      let match;

      while ((match = mentionRegex.exec(text)) !== null) {
        const username = match[1];

        const userEntry = Object.entries(props.users).find(([, user]) =>
          ((user as User).name || '').toLowerCase() === username.toLowerCase()
        );

        if (userEntry) {
          const userId = userEntry[0];
          if (!mentionedUsers.includes(userId)) {
            mentionedUsers.push(userId);
          }
        }
      }

      return mentionedUsers;
    };

    const sendMentionNotifications = (mentionedUserIds: string[], message: Message, reply?: Reply | null, actualIndex?: number) => {
      if (reply) {
        if (!mentionedUserIds.includes(message.uid) && message.uid !== props.uid) {
          mentionedUserIds.push(message.uid);
        }

        for (const r of message.replies || []) {
          if (!mentionedUserIds.includes(r.uid) && r.uid !== props.uid) {
            mentionedUserIds.push(r.uid);
          }
        }
      }

      if (!props.uid || mentionedUserIds.length === 0) return;

      mentionedUserIds.forEach(userId => {
        const mentionedUser = props.users[userId];
        console.log('mentionedUser', mentionedUser);
        if (!mentionedUser || !mentionedUser.email) return;

        const now = Date.now();
        const id = `${actualIndex}_${userId}_${now}`;
        const notificationData = {
          id,
          mentionedUserId: userId,
          mentionedUserEmail: mentionedUser.email,
          mentioningUserId: props.uid,
          mentioningUserName: props.users[props.uid].name || '匿名使用者',
          messageId: String(actualIndex),
          messageText: reply ? reply.text : message.text,
          messageTime: now,
          status: 'pending',
          type: reply ? 'reply' : 'mention',
          createdAt: now
        };

        set(dbRef(database, `notifications/${id}`), notificationData)
          .then(() => {
            console.log(`已發送通知給 ${mentionedUser.name}`);
          })
          .catch(error => {
            console.error('發送通知失敗:', error);
          });
      });
    };

    // 發送通知給所有用戶的函數
    const sendNotificationToAllUsers = (message: Message, actualIndex: number) => {
      if (!props.uid || !props.users) return;

      const allUserIds = Object.keys(props.users);

      allUserIds.forEach(userId => {
        // 不發送給自己
        if (userId === props.uid) return;

        const user = props.users[userId];
        if (!user || !user.email) return;

        const now = Date.now();
        const id = `all_${actualIndex}_${userId}_${now}`;
        const notificationData = {
          id,
          mentionedUserId: userId,
          mentionedUserEmail: user.email,
          mentioningUserId: props.uid,
          mentioningUserName: props.users[props.uid].name || '匿名使用者',
          messageId: String(actualIndex),
          messageText: message.text,
          messageTime: now,
          status: 'pending',
          type: 'broadcast', // 使用新的類型來標識這是廣播訊息
          createdAt: now
        };

        set(dbRef(database, `notifications/${id}`), notificationData)
          .then(() => {
            console.log(`已發送廣播通知給 ${user.name}`);
          })
          .catch(error => {
            console.error('發送廣播通知失敗:', error);
          });
      });
    };

    // 標籤系統相關函數
    const toggleLabel = (messageIndex: number, label: {id: string, name: string, color: string}) => {
      if (!dataLoaded.value || !props.uid) return;

      const message = messages.value[messageIndex];
      if (!message.labels) {
        message.labels = [];
      }

      const existingLabelIndex = message.labels.findIndex(l => l.id === label.id);
      if (existingLabelIndex > -1) {
        // 移除標籤
        message.labels.splice(existingLabelIndex, 1);
      } else {
        // 新增標籤
        message.labels.push(label);
      }

      // 更新到 Firebase
      set(dbRef(database, `bulletin/${messageIndex}/labels`), message.labels).then(() => {
        console.log('標籤更新成功');
      });
    };

    const hasLabel = (message: Message, labelId: string): boolean => {
      return message.labels?.some(label => label.id === labelId) || false;
    };

    // 狀態管理相關函數
    const changeStatus = (messageIndex: number, newStatus: string) => {
      if (!dataLoaded.value || !props.uid) return;

      const message = messages.value[messageIndex];
      message.status = newStatus as 'open' | 'closed' | 'resolved' | 'in-progress';

      // 更新到 Firebase
      set(dbRef(database, `bulletin/${messageIndex}/status`), newStatus).then(() => {
        console.log('狀態更新成功');
      });
    };

    // 優先級管理相關函數
    const changePriority = (messageIndex: number, newPriority: string) => {
      if (!dataLoaded.value || !props.uid) return;

      const message = messages.value[messageIndex];
      message.priority = newPriority as 'low' | 'medium' | 'high' | 'urgent';

      // 更新到 Firebase
      set(dbRef(database, `bulletin/${messageIndex}/priority`), newPriority).then(() => {
        console.log('優先級更新成功');
      });
    };

    const toggleTask = (messageIndex: number, taskId: string) => {
      if (!dataLoaded.value || !props.uid) return;

      const message = messages.value[messageIndex];
      if (message.tasks) {
        const task = message.tasks.find(t => t.id === taskId);
        if (task) {
          task.completed = !task.completed;

          // 更新到 Firebase
          set(dbRef(database, `bulletin/${messageIndex}/tasks`), message.tasks).then(() => {
            console.log('任務狀態更新成功');
          });
        }
      }
    };

    watch(() => props.uid, (newUid) => {
      console.log('newUid', newUid);
      if (newUid) {
        get(bulletinRef).then((snapshot) => {
          const data = snapshot.val();
          console.log(data);
          messages.value = data.map((message: FirebaseMessage) => ({
            author: message.author,
            uid: message.uid,
            date: message.date,
            text: message.text,
            updated: message.updated,
            reactions: message.reactions || {},
            replies: message.replies ? message.replies.map((reply: FirebaseReply): Reply => ({
              author: reply.author,
              uid: reply.uid,
              date: reply.date,
              text: reply.text,
              reactions: reply.reactions || {}
            })) : [],
            hrefs: message.hrefs || [],
            attachments: message.attachments || [],
            labels: message.labels || [],
            status: message.status || 'open',
            references: message.references || [],
            tasks: message.tasks || [],
            priority: message.priority || 'low',
            assignees: message.assignees || [],
            notifyAllUsers: message.notifyAllUsers || false
          }));
          dataLoaded.value = true;

          setTimeout(() => {
            handleHighlight();
          }, 500);
        });
      }
    });

    onMounted(() => {
      console.log('mounted');
      onValue(bulletinRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        messages.value = data.map((message: FirebaseMessage) => ({
          author: message.author,
          uid: message.uid,
          date: message.date,
          text: message.text,
          updated: message.updated,
          reactions: message.reactions || {},
          replies: message.replies ? message.replies.map((reply: FirebaseReply): Reply => ({
            author: reply.author,
            uid: reply.uid,
            date: reply.date,
            text: reply.text,
            reactions: reply.reactions || {}
          })) : [],
          hrefs: message.hrefs || [],
          attachments: message.attachments || [],
          labels: message.labels || [],
          status: message.status || 'open',
          references: message.references || [],
          tasks: message.tasks || [],
          priority: message.priority || 'low',
          assignees: message.assignees || [],
          notifyAllUsers: message.notifyAllUsers || false
        }));
        dataLoaded.value = true;

        handleHighlight();

        // 設置下拉菜單事件監聽器
        nextTick(() => {
          document.addEventListener('click', handleDocumentClick);
          // 添加滾動事件監聽器，滾動時關閉所有下拉菜單
          document.addEventListener('scroll', scrollHandler, true);

          document.querySelectorAll('.dropdown-trigger').forEach(trigger => {
            trigger.addEventListener('click', handleDropdownClick);
          });
        });
      });
      setInterval(async () => {
        console.log('tick');
        await nextTick();
        messages.value = [...messages.value];
      }, 60 * 1000);
    });

    // 處理子組件的 emit 事件
    const handleExpandMessage = (messageIndex: number) => {
      if (messages.value[messageIndex]) {
        messages.value[messageIndex].textExpanded = true;
      }
    };

    const handleCollapseMessage = (messageIndex: number) => {
      if (messages.value[messageIndex]) {
        messages.value[messageIndex].textExpanded = false;
      }
    };

    const handleExpandReply = (messageIndex: number, replyIndex: number) => {
      if (messages.value[messageIndex] && messages.value[messageIndex].replies) {
        messages.value[messageIndex].replies![replyIndex].textExpanded = true;
      }
    };

    const handleCollapseReply = (messageIndex: number, replyIndex: number) => {
      if (messages.value[messageIndex] && messages.value[messageIndex].replies) {
        messages.value[messageIndex].replies![replyIndex].textExpanded = false;
      }
    };

    const handleToggleReplies = (index: number) => {
      if (!props.uid) return;

      if (messages.value[index].repliesExpanded) {
        messages.value[index].repliesExpanded = false;
      } else {
        messages.value[index].repliesExpanded = true;
      }
    };

    onBeforeUnmount(() => {
      // 清理事件監聽器
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('scroll', scrollHandler, true);

      // 清理激活的下拉菜單
      removeActiveDropdownMenu();
    });

    return {
      messages,
      dataLoaded,
      replyingTo,
      toggleLogin,
      addMessage,
      toggleReaction,
      toggleReplyForm,
      addReply,
      cancelReply,
      deleteReply,
      editMessage,
      saveEditMessage,
      cancelEditMessage,
      quoteMessage,
      toggleTask,
      handleDropdownClick,
      handleExpandMessage,
      handleCollapseMessage,
      handleExpandReply,
      handleCollapseReply,
      handleToggleReplies,
    }
  }
})
</script>

<style scoped>
.ui.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1A1A1A;
}

.bulletin-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  color: #1A1A1A;
  background: #fff;
}

@media (max-width: 768px) {
  .ui.container,
  .bulletin-container {
    padding: 1rem;
  }
}
</style>
