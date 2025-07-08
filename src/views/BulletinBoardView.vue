<template lang="pug">
  .ui.container.two.column.stackable.grid
    .column(v-if="!uid")
      .ui.segment
        .ui.header 留言板
        .ui.description 請先登入才能留言
        .ui.divider
        button.ui.large.green.basic.button(@click="toggleLogin") 登入

    .ui.comments.flex-column.column(v-if="uid")
      .ui.search.segment
        .ui.icon.input.fluid
          input(
            type="text"
            v-model="searchKeyword"
            placeholder="搜尋留言..."
            @input="handleSearch"
          )
          i.search.icon
        .ui.label(v-if="searchKeyword")
          | 搜尋結果: {{ filteredMessages.length }} 則留言
          i.close.icon(@click="clearSearch")

      .comment(v-for="(message, index) in filteredMessages.slice(0, maxShowMessages)" :key="index" :data-message-id="message.actualIndex")
        .content
          .message-header
            .message-status-priority
              .message-status(v-if="message.status && message.status !== 'open'")
                i.icon(:class="getStatusIcon(message.status)")
                span.status-text {{ getStatusText(message.status) }}
              .message-priority(v-if="message.priority && message.priority !== 'low'", :class="message.priority")
                i.icon(:class="getPriorityIcon(message.priority)")
                span.priority-text {{ getPriorityText(message.priority) }}
            .message-labels(v-if="message.labels && message.labels.length > 0")
              span.ui.mini.label(
                v-for="label in message.labels"
                :key="label.id"
                :class="label.color"
              ) {{ label.name }}

          img.ui.avatar.image(v-if="users && users[message.uid] && users[message.uid].photoURL" :src="users[message.uid].photoURL")
          .author {{ message.author }}
          .metadata
            .date {{ parseDate(message.date) }}
              span.updated(v-if="message.updated") ({{ parseDate(message.updated) }}已更新)

          .message-references(v-if="message.references && message.references.length > 0")
            .referenced-message(
              v-for="ref in message.references"
              :key="ref.id"
              v-if="ref && ref.id !== undefined"
              @click="scrollToMessage(ref.id)"
            )
              i.quote.left.icon
              span.reference-text(v-text="`引用 #${ref.id}: ${ref.preview}`")

          .text(v-html="parseMentionsAndHideTasks(message.text)")

          .task-list(v-if="message.tasks && message.tasks.length > 0")
            .task-summary
              i.tasks.icon
              span {{ getCompletedTaskCount(message.tasks) }}/{{ message.tasks.length }} 項任務已完成
            .task-item(
              v-for="task in message.tasks"
              :key="task.id"
              :class="{ completed: task.completed }"
            )
              input(
                type="checkbox"
                :checked="task.completed"
                @change="toggleTask(message.actualIndex, task.id)"
                :disabled="message.uid !== uid"
              )
              span.task-text {{ task.text }}

          .attachments(v-if="message.attachments && message.attachments.length > 0")
            i.paperclip.icon
            .ui.buttons
              a.ui.mini.basic.button.no-border(
                v-for="(file, index) in message.attachments"
                :key="index"
                :href="file.url"
                target="_blank"
                download
              )
                i.file.icon
                | {{ file.name }}
          .hrefs(v-if="message.hrefs && message.hrefs.length > 0")
            a.ui.mini.basic.button.no-border.text-underline(v-for="(href, index) in message.hrefs" :key="index" :href="href" target="_blank")
              img(:src="'https://www.google.com/s2/favicons?domain=' + href" title='連結網址' alt='連結網址')
              span(v-if="href.length > 50") {{ href.slice(0, 50) }}...
              span(v-else) {{ href }}

          .actions
            .reaction-buttons
              button.reaction-btn(
                v-for="emoji in ['👍', '❤️', '🙏', '🫡', '🌟', '💡', '😊', '😁', '😢']"
                :key="emoji"
                @click="toggleReaction(message, emoji)"
                :class="{ active: hasReacted(message, emoji) }"
              )
                .reaction-tooltip(v-if="getReactionCount(message, emoji) > 0")
                  | {{ getReactionUsers(message, emoji) }}
                span.emoji {{ emoji }}
                span.count {{ getReactionCount(message, emoji) }}

          div.flex.flex-row(v-if="uid")
            .action-buttons
              button.action-btn.dropdown-trigger(
                v-if="uid"
                :data-dropdown-type="'labels'"
                :data-message-index="message.actualIndex"
                @click.stop="handleDropdownClick"
              )
                i.tags.icon
                span 標籤

              button.action-btn.dropdown-trigger(
                v-if="uid"
                :data-dropdown-type="'status'"
                :data-message-index="message.actualIndex"
                @click.stop="handleDropdownClick"
              )
                i.flag.icon
                span 狀態

              button.action-btn.dropdown-trigger(
                v-if="uid"
                :data-dropdown-type="'priority'"
                :data-message-index="message.actualIndex"
                @click.stop="handleDropdownClick"
              )
                i.exclamation.icon
                span 優先級

          .action-buttons
            button.action-btn.reply-btn(@click="toggleReplyForm(message.actualIndex)")
              i.reply.icon
              span 回覆
            button.action-btn.quote-btn(@click="quoteMessage(message.actualIndex)")
              i.quote.left.icon
              span 引用
            button.action-btn.expand-btn(v-if="message.replies && message.replies.length > 0" @click="toggleReplies(message.actualIndex)")
              i.expand.icon(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded")
              i.chevron.up.icon(v-else)
              span(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded") 展開
              span(v-else) 收起
            button.action-btn.edit-btn(v-if="message.uid === uid && (!message.replies || message.replies.length === 0)" @click="editMessage(message.actualIndex)")
              i.edit.icon
              span 編輯

          .replies(v-if="message.replies && message.replies.length > 0")
            .unexpended(v-if="!message.repliesExpanded")
              | 共有{{ message.replies.length }}則回覆
            .expended(v-else)
              .reply(v-for="(reply, rIndex) in message.replies" :key="rIndex")
                .ui.divider
                .content
                  img.ui.avatar.image.small(v-if="users && users[reply.uid] && users[reply.uid].photoURL" :src="users[reply.uid].photoURL")
                  .author {{ reply.author }}
                  .metadata
                    .date {{ parseDate(reply.date) }}
                  .text {{ reply.text }}
                  .actions(v-if="reply.uid === uid")
                    .reaction-buttons
                      button.reaction-btn(
                        v-for="emoji in ['👍', '❤️', '🙏', '🫡', '🌟', '💡', '😊', '😁', '😢']"
                        :key="emoji"
                        @click="toggleReplyReaction(reply, message.actualIndex, rIndex, emoji)"
                        :class="{ active: hasReacted(reply, emoji) }"
                      )
                        .reaction-tooltip(v-if="getReactionCount(reply, emoji) > 0")
                          | {{ getReactionUsers(reply, emoji) }}
                        span.emoji {{ emoji }}
                        span.count {{ getReactionCount(reply, emoji) }}
                  .action-buttons
                    button.action-btn.reply-btn(@click="toggleReplyForm(message.actualIndex)")
                      i.reply.icon
                      span 回覆
                    button.action-btn.expand-btn(v-if="message.replies && message.replies.length > 0" @click="toggleReplies(message.actualIndex)")
                      i.expand.icon(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded")
                      i.chevron.up.icon(v-else)
                      span(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded") 展開
                      span(v-else) 收起
                    button.action-btn.delete-btn(@click="deleteReply(message.actualIndex, rIndex)")
                      i.trash.icon
                      span.fat-only 刪除

          .ui.form.reply-form(v-if="replyingTo === message.actualIndex")
            .ui.divider
            textarea(v-model="replyText" class="reply-textarea" rows="2" cols="50" placeholder="輸入回覆...")
            .actions
              button.ui.primary.button(@click="addReply(message.actualIndex)") 發送
              button.ui.button(@click="cancelReply") 取消

      .show-more-messages(v-if="filteredMessages.length > maxShowMessages")
        button.ui.basic.orange.button(@click="showMoreMessages")
          i.chevron.down.icon
          | 顯示更多留言
      .show-less-messages(v-if="filteredMessages.length <= maxShowMessages && filteredMessages.length > 5")
        button.ui.basic.orange.button(@click="showLessMessages")
          i.chevron.up.icon
          | 顯示更少留言

    .ui.form.reply.column(v-if="uid")
      .ui.divider.thin-only
      .field
        label 輸入留言
        textarea(
          v-model="newMessage"
          @input="handleMessageInput"
          @keydown="handleKeydown"
          ref="messageTextarea"
        )
        .ui.info.message
          .header 💡 進階功能提示
          .list
            .item.fat-only
              i.tags.icon
              .content
                strong 任務列表:
                | 使用
                code - [ ] 任務項目
                |  或
                code - [x] 已完成項目
                |  格式
            //- .item.fat-only
              i.quote.left.icon
              .content
                strong 引用留言:
                | 使用
                code #123
                |  或
                code 引用 #123
                |  格式引用特定留言
            .item
              i.at.icon
              .content
                strong 提及用戶:
                | 使用
                code @用戶名
                |  格式提及其他用戶
        .mention-suggestions(v-if="showMentions && mentionSuggestions.length > 0")
          .mention-item(
            v-for="(user, index) in mentionSuggestions"
            :key="user.uid"
            :class="{ active: index === mentionIndex, 'mention-all': user.uid === 'all' }"
            @click="selectMention(user)"
          )
            img.ui.avatar.image(v-if="user.photoURL" :src="user.photoURL")
            i.envelope.icon(v-if="user.uid === 'all'")
            span {{ user.name }}

      .field
        label
          i.linkify.icon
          | 附加連結(可選)

        .ui.list(v-if="newMessageHrefs && newMessageHrefs.length > 0")
          .item(v-for="(href, index) in newMessageHrefs" :key="index")
            .content
              img(:src="'https://www.google.com/s2/favicons?domain=' + href" title='連結網址' alt='連結網址')
              a(:href="href" target="_blank" rel="noopener noreferrer") {{ href.length > 40 ? href.slice(0, 20) + '...' : href }}
              .ui.mini.red.basic.button(@click="removeHrefByIndex(index)")
                i.trash.icon
                span 刪除
        input(type="text" v-model="newMessageHref" placeholder="輸入連結")
        .ui.buttons(v-if="newMessageHref && newMessageHref.length > 0")
          a.ui.mini.basic.button(:href="newMessageHref" target="_blank" rel="noopener noreferrer")
            img(:src="'https://www.google.com/s2/favicons?domain=' + newMessageHref" title='連結網址' alt='連結網址')
            | 連結預覽
          .ui.mini.basic.green.button(@click="addHref")
            i.plus.icon
            | 新增連結
            .field
        label
          i.paperclip.icon
          | 附加檔案
          br
          | (可選，建議10MB以下，最大1GB)
        .ui.upload.segment
          input(type="file" ref="fileUpload" @change="handleFileUpload" style="display: none")
          .ui.basic.button(@click="$refs.fileUpload.click()")
            i.upload.icon
            | 選擇檔案
          span(v-if="uploadingFile")
            span(v-if="!isBigFile") 上傳中...
            span(v-if="isBigFile")
              br
              | 檔案較大，分塊上傳中，請耐心等待...
              br
              | {{uploadProgress}}
          .ui.list(v-if="newMessageAttachments && newMessageAttachments.length > 0")
            .item(v-for="(file, index) in newMessageAttachments" :key="index")
              i.file.icon
              .content
                a(:href="file.url" target="_blank") {{ file.name }}
                .ui.mini.red.button(@click="removeAttachment(index)") 刪除

      .ui.primary.submit.button(@click="addMessage") 留言
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount, nextTick, computed, watch } from 'vue';
import { onValue, ref as dbRef, get, set } from 'firebase/database';
import { bulletinRef, database } from '@/firebase';
import { useRouter } from 'vue-router';


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
  reactions?: {
    [key: string]: {
      [uid: string]: boolean;
    };
  };
}

export default defineComponent({
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
    const router = useRouter();

    const maxShowMessages = ref(5);
    const messages = ref<Message[]>([
      { author: 'AliceS', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'BobS', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },
    ].map(msg => ({
      ...msg,
      reactions: {}
    })));

    const uploadProgress = ref('');
    const isBigFile = ref(false);
    const newMessage = ref('');
    const newMessageHref = ref('');
    const newMessageHrefs = ref<string[]>([]);
    const dataLoaded = ref(false);
    const replyingTo = ref(-1);
    const replyText = ref('');
    const editingMessage = ref(-1);
    const uploadingFile = ref(false);
    const newMessageAttachments = ref<Array<{name: string, url: string, size: number, type: string}>>([]);
    const messageTextarea = ref<HTMLTextAreaElement | null>(null);
    const showMentions = ref(false);
    const mentionSuggestions = ref<Array<{uid: string, name: string, photoURL?: string}>>([]);
    const mentionIndex = ref(0);
    const mentionStart = ref(-1);
    const searchKeyword = ref('');
    const filteredMessages = ref<Message[]>([]);
    const notifyAllUsers = ref(false);

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

    const sortedMessages = computed(() => {
      return [...messages.value].map((obj, index) => {
        const newObj = {
          ...obj
        }
        newObj.actualIndex = index;
        return newObj;
      }).sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    });

    const addMessage = () => {
      if (newMessageHref.value) {
        newMessageHrefs.value.push(newMessageHref.value);
        newMessageHref.value = '';
      }
      if (!dataLoaded.value) return;

      console.log(newMessage.value);
      const m_length = messages.value.length;

      const mentionedUsers = detectMentionedUsers(newMessage.value);

      // 解析任務列表
      const tasks = parseTaskList(newMessage.value);

      // 檢測是否有引用
      const referencedMessages = detectReferences(newMessage.value);

      const newMessageObj: Message = {
        author: props.users[props.uid].name || '匿名',
        uid: props.uid || '123',
        date: new Date().toISOString(),
        text: newMessage.value,
        reactions: {},
      }

      if (mentionedUsers.length > 0) {
        newMessageObj.mentions = mentionedUsers;
      }

      if (newMessageAttachments.value.length > 0) {
        newMessageObj.attachments = newMessageAttachments.value;
      }

      if (newMessageHrefs.value.length > 0) {
        newMessageObj.hrefs = newMessageHrefs.value;
      }

      if (tasks.length > 0) {
        newMessageObj.tasks = tasks;
      }

      if (referencedMessages.length > 0) {
        newMessageObj.references = referencedMessages;
      }

      if (notifyAllUsers.value) {
        newMessageObj.notifyAllUsers = true;
      }

      messages.value.push(newMessageObj);

      if (mentionedUsers.length > 0) {
        sendMentionNotifications(mentionedUsers, newMessageObj, null, m_length);
      }

      // 如果勾選了發送給所有用戶，則發送通知給所有用戶
      if (notifyAllUsers.value) {
        sendNotificationToAllUsers(newMessageObj, m_length);
      }

      newMessage.value = '';
      newMessageHrefs.value = [];
      newMessageAttachments.value = [];
      notifyAllUsers.value = false; // 重置通知狀態
      set(dbRef(database, 'bulletin/' + m_length), newMessageObj).then(() => {
        console.log('留言成功');
      });
    }

    const toggleLogin = () => {
      emit('toggleLogin');
    }

    const parseDate = (date: string) => {
      const now = new Date();
      const messageDate = new Date(date);

      if (isNaN(messageDate.getTime())) {
        return '無效日期';
      }

      const diff = now.getTime() - messageDate.getTime();
      const diffSeconds = Math.floor(diff / 1000);
      const diffMinutes = Math.floor(diff / (1000 * 60));
      const diffHours = Math.floor(diff / (1000 * 60 * 60));
      const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
      if (diffSeconds < 60) {
        if (diffSeconds === 0) {
          return '剛剛';
        }
        return `${diffSeconds} 秒前`;
      } else if (diffMinutes < 60) {
        return `${diffMinutes} 分鐘前`;
      } else if (diffHours < 24) {
        return `${diffHours} 小時前`;
      } else {
        return `${diffDays} 天前`;
      }
    }

    const toggleReplies = (index: number) => {
      if (!props.uid) return;

      if (messages.value[index].repliesExpanded) {
        messages.value[index].repliesExpanded = false;
      } else {
        messages.value[index].repliesExpanded = true;
      }

      saveRepliesExpandedState();
    }

    const toggleReplyReaction = (reply: Reply, actualIndex: number, rIndex: number, reaction: string) => {
      if (!props.uid) return;

      if (!reply.reactions) {
        reply.reactions = {};
      }

      if (!reply.reactions[reaction]) {
        reply.reactions[reaction] = {};
      }

      if (reply.reactions[reaction][props.uid]) {
        delete reply.reactions[reaction][props.uid];
      } else {
        reply.reactions[reaction][props.uid] = true;
      }

      set(dbRef(database, `bulletin/${actualIndex}/replies/${rIndex}/reactions`), reply.reactions).then(() => {
        console.log('回覆反應更新成功');
      });
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

    const hasReacted = (message: Message, reaction: string) => {
      return message.reactions?.[reaction]?.[props.uid] || false;
    };

    const getReactionCount = (message: Message, reaction: string) => {
      return Object.keys(message.reactions?.[reaction] || {}).length;
    };

    const getReactionUsers = (message: Message, reaction: string): string => {
      if (!message.reactions?.[reaction]) return '';

      return Object.keys(message.reactions[reaction])
        .map(uid => props.users[uid]?.name || '匿名用戶')
        .join('、');
    };

    const toggleReplyForm = (index: number) => {
      if (!props.uid) return;

      if (replyingTo.value === index) {
        replyingTo.value = -1;
      } else {
        replyingTo.value = index;
        replyText.value = '';
      }
    };

    const cancelReply = () => {
      replyingTo.value = -1;
      replyText.value = '';
    };

    const addReply = (index: number) => {
      if (!dataLoaded.value || !props.uid || replyText.value.trim() === '') return;

      const messageToReply = messages.value[index];

      if (!messageToReply.replies) {
        messageToReply.replies = [];
      }

      const mentionedUsers = detectMentionedUsers(replyText.value);

      const newReply: Reply = {
        author: props.users[props.uid].name || '匿名',
        uid: props.uid,
        date: new Date().toISOString(),
        text: replyText.value.trim()
      };

      messageToReply.replies.push(newReply);

      sendMentionNotifications(mentionedUsers, messageToReply, newReply, index);

      replyText.value = '';
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

    const saveRepliesExpandedState = () => {
      const expandedState: Record<number, boolean> = {};
      messages.value.forEach((message, index) => {
        if (message.repliesExpanded) {
          expandedState[index] = true;
        }
      });
      sessionStorage.setItem('repliesExpandedState', JSON.stringify(expandedState));
    };

    const restoreRepliesExpandedState = () => {
      const storedState = sessionStorage.getItem('repliesExpandedState');
      if (storedState) {
        try {
          const expandedState = JSON.parse(storedState) as Record<number, boolean>;
          messages.value.forEach((message, index) => {
            message.repliesExpanded = expandedState[index] || false;
          });
        } catch (e) {
          console.error('恢復展開狀態失敗', e);
        }
      }
    };

    const editMessage = (index: number) => {
      if (!dataLoaded.value || !props.uid) return;

      const messageToEdit = messages.value[index];

      if (messageToEdit.uid !== props.uid || (messageToEdit.replies && messageToEdit.replies.length > 0)) return;

      const editedText = prompt('編輯留言', messageToEdit.text);

      if (editedText !== null && editedText.trim() !== '') {
        messageToEdit.text = editedText.trim();
        messageToEdit.updated = new Date().toISOString();

        set(dbRef(database, `bulletin/${index}/text`), editedText.trim()).then(() => {
          console.log('留言編輯成功');
        });
        set(dbRef(database, `bulletin/${index}/updated`), messageToEdit.updated).then(() => {
          console.log('更新時間記錄成功');
        });
      }
    };

    const handleFileUpload = async (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;

      if (file.name.includes('/') || file.name.includes('\\')) {
        alert('檔名不能包含斜線「/」或反斜線「\\」');
        return;
      }

      if (file.size > 1024 * 1024 * 1024) {
        alert('檔案大小不能超過 1GB');
        return;
      }

      uploadingFile.value = true;
      try {
        if (file.size <= 10 * 1024 * 1024) {
          isBigFile.value = false;
          const fileContent = await file.arrayBuffer();
          const response = await fetch('https://members-backend.alearn13994229.workers.dev/uploadToR2/files/' + file.name, {
            method: 'POST',
            body: fileContent,
            headers: {
              'Content-Type': file.type
            }
          });

          if (response.status === 400) {
            const result = await response.json();
            alert(result.error + ' 請更改名稱後重新上傳');
            return;
          }

          if (!response.ok) {
            throw new Error('上傳失敗');
          }

          const result = await response.json();
          newMessageAttachments.value.push({
            name: file.name,
            url: result.url,
            size: file.size,
            type: file.type
          });
        } else {
          isBigFile.value = true;
          uploadProgress.value = '上傳中...';
          const CHUNK_SIZE = 5 * 1024 * 1024;
          const totalChunks = Math.ceil(file.size / CHUNK_SIZE);

          console.log('開始分塊上傳:', {
            fileName: file.name,
            fileSize: file.size,
            chunkSize: CHUNK_SIZE,
            totalChunks: totalChunks
          });

          uploadProgress.value = '開始分塊上傳：' + file.name + '，共' + totalChunks + '塊';

          for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
            const start = chunkIndex * CHUNK_SIZE;
            const end = Math.min(start + CHUNK_SIZE, file.size);
            const chunk = file.slice(start, end);

            console.log(`上傳分塊 ${chunkIndex + 1}/${totalChunks}:`, {
              start,
              end,
              chunkSize: chunk.size,
              chunkType: chunk.type
            });

            uploadProgress.value = '上傳第 ' + (chunkIndex + 1) + ' 塊...(共' + totalChunks + '塊)';

            const formData = new FormData();
            formData.append('chunk', chunk);

            const response = await fetch(
              `https://members-backend.alearn13994229.workers.dev/uploadChunkToR2/files/${encodeURIComponent(file.name)}/${chunkIndex}/${totalChunks}`,
              {
                method: 'POST',
                body: formData
              }
            );

            console.log(`分塊 ${chunkIndex + 1}/${totalChunks} 上傳回應:`, {
              status: response.status,
              ok: response.ok,
              statusText: response.statusText
            });

            if (response.ok) {
              console.log(`成功上傳第 ${chunkIndex + 1} 塊分塊`);
            } else {
              const errorText = await response.text();
              console.error(`分塊 ${chunkIndex + 1}/${totalChunks} 上傳失敗:`, errorText);
              throw new Error(`分塊 ${chunkIndex + 1}/${totalChunks} 上傳失敗: ${errorText}`);
            }
          }

          console.log('所有分塊上傳完成，開始合併');
          uploadProgress.value = '合併中...';

          const mergeResponse = await fetch(
            `https://members-backend.alearn13994229.workers.dev/mergeChunksInR2/files/${file.name}/${totalChunks}`,
            {
              method: 'POST'
            }
          );

          console.log('合併回應:', {
            status: mergeResponse.status,
            ok: mergeResponse.ok,
            statusText: mergeResponse.statusText
          });

          if (!mergeResponse.ok) {
            const errorText = await mergeResponse.text();
            uploadProgress.value = '合併失敗';
            console.error('合併失敗:', errorText);
            throw new Error(`合併分塊失敗: ${errorText}`);
          }

          const result = await mergeResponse.json();
          console.log('合併成功，檔案資訊:', result);
          uploadProgress.value = '合併成功';
          newMessageAttachments.value.push({
            name: file.name,
            url: result.url,
            size: file.size,
            type: file.type
          });
        }

        (event.target as HTMLInputElement).value = '';
        uploadProgress.value = '';
      } catch (error) {
        console.error('檔案上傳失敗:', error);
        uploadProgress.value = '檔案上傳失敗';
        alert('檔案上傳失敗，請重試');
      } finally {
        uploadingFile.value = false;
      }
    };

    const removeAttachment = (index: number) => {
      if (confirm('確定要刪除此檔案嗎？')) {
        newMessageAttachments.value.splice(index, 1);
      }
    };

    const handleMessageInput = (event: KeyboardEvent) => {
      const text = newMessage.value;
      const cursorPosition = messageTextarea.value?.selectionStart || 0;
      const lastAtSymbol = text.lastIndexOf('@', cursorPosition);

      if (lastAtSymbol !== -1 && lastAtSymbol < cursorPosition) {
        const searchText = text.slice(lastAtSymbol + 1, cursorPosition);
        mentionStart.value = lastAtSymbol;

        if (searchText.length === 0) {
          const firstFiveUsers = Object.entries(props.users)
            .map(([uid, user]) => ({
              uid,
              name: (user as User).name,
              photoURL: (user as User).photoURL
            }));
          
          // 添加 "All" 選項到列表最前面
          const allOption = {
            uid: 'all',
            name: 'All',
            photoURL: undefined
          };
          
          mentionSuggestions.value = [allOption, ...firstFiveUsers];
          showMentions.value = true;
          mentionIndex.value = 0;
          return;
        }

        if (!searchText.includes(' ')) {
          const filteredUsers = Object.entries(props.users)
            .filter(([_, user]) =>
              (user as User).name.toLowerCase().includes(searchText.toLowerCase())
            )
            .map(([uid, user]) => ({
              uid,
              name: (user as User).name,
              photoURL: (user as User).photoURL
            }));
          
          // 如果搜索文本匹配 "all"，則添加 All 選項
          const suggestions: Array<{uid: string, name: string, photoURL?: string}> = [];
          if ('all'.toLowerCase().includes(searchText.toLowerCase())) {
            suggestions.push({
              uid: 'all',
              name: 'All',
              photoURL: undefined
            });
          }
          suggestions.push(...filteredUsers);
          
          mentionSuggestions.value = suggestions;
          showMentions.value = true;
          mentionIndex.value = 0;
          return;
        }
      }
      showMentions.value = false;
    };

    const handleKeydown = (event: KeyboardEvent) => {
      console.log('handleKeydown', event.key);
      if (!showMentions.value) return;

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          mentionIndex.value = (mentionIndex.value + 1) % mentionSuggestions.value.length;
          break;
        case 'ArrowUp':
          event.preventDefault();
          mentionIndex.value = (mentionIndex.value - 1 + mentionSuggestions.value.length) % mentionSuggestions.value.length;
          break;
        case 'Enter':
          event.preventDefault();
          if (mentionSuggestions.value[mentionIndex.value]) {
            selectMention(mentionSuggestions.value[mentionIndex.value]);
          }
          break;
        case 'Escape':
          showMentions.value = false;
          break;
      }
    };

    const selectMention = (user: {uid: string, name: string}) => {
      if (mentionStart.value === -1) return;

      const text = newMessage.value;
      const beforeMention = text.slice(0, mentionStart.value);
      const afterMention = text.slice(messageTextarea.value?.selectionStart || 0);
      
      // 如果選擇的是 "All"，設置通知所有用戶的標記
      if (user.uid === 'all') {
        notifyAllUsers.value = true;
      }
      
      newMessage.value = `${beforeMention}@${user.name} ${afterMention}`;

      showMentions.value = false;
      mentionStart.value = -1;

      nextTick(() => {
        if (messageTextarea.value) {
          const newPosition = beforeMention.length + user.name.length + 2;
          messageTextarea.value.setSelectionRange(newPosition, newPosition);
          messageTextarea.value.focus();
        }
      });
    };

    const escapeHtml = (text: string): string => {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    };

    const parseMentionsAndHideTasks = (text: string) => {
      if (!text) return '';

      const escapedText = escapeHtml(text);

      const mentionRegex = /@([a-zA-Z0-9\u4e00-\u9fa5_]+)/g;

      const taskRegex = /^.*-\s?\[[\sxX]\].*$/gm;

      // 還要把空行也去掉
      const emptyLineRegex = /^\s*$/gm;

      return escapedText.replace(taskRegex, '').replace(emptyLineRegex, '').replace(mentionRegex, (match, username) => {
        const user = Object.entries(props.users).find(([_, user]) =>
          (user as User).name === username
        );

        if (user) {
          return `<span class="mention-link" data-uid="${user[0]}">${match}</span>`;
        }

        return match;
      });
    };

    const testMentions = () => {
      const testCases = [
        'Hello @Alice and @Bob',
        '@Alice 你好 @Bob',
        '這是@Alice的留言，@Bob也來看看',
        '@Alice@Bob 連續標記',
        '沒有標記的普通文字',
        '@不存在的用戶',
        '@Alice 和 @不存在的用戶'
      ];

      console.log('測試 @ 標記解析：');
      testCases.forEach(test => {
        console.log('原文:', test);
        console.log('解析後:', parseMentionsAndHideTasks(test));
      });
    };

    const handleMentionClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('mention-link')) {
        const uid = target.getAttribute('data-uid');
        if (uid) {
          router.push(`/flag/${uid}`);
        }
      }
    };

    const handleSearch = () => {
      if (!searchKeyword.value.trim()) {
        filteredMessages.value = sortedMessages.value;
        return;
      }

      const keyword = searchKeyword.value.toLowerCase().trim();
      filteredMessages.value = sortedMessages.value.filter(message => {
        if (message.text.toLowerCase().includes(keyword)) {
          return true;
        }

        if (message.author.toLowerCase().includes(keyword)) {
          return true;
        }

        if (message.replies) {
          return message.replies.some(reply =>
            reply.text.toLowerCase().includes(keyword) ||
            reply.author.toLowerCase().includes(keyword)
          );
        }

        return false;
      });
    };

    const clearSearch = () => {
      searchKeyword.value = '';
      filteredMessages.value = sortedMessages.value;
    };

    watch(sortedMessages, (newMessages) => {
      if (!searchKeyword.value.trim()) {
        filteredMessages.value = newMessages;
      } else {
        handleSearch();
      }
    }, { immediate: true });

    const handleHighlight = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const highlightMessageId = urlParams.get('highlight');
      console.log('highlightMessageId', highlightMessageId);

      if (highlightMessageId) {
        nextTick(() => {
          const targetMessage = sortedMessages.value.find(msg => msg.actualIndex === Number(highlightMessageId));
          console.log('targetMessage', targetMessage);
          if (targetMessage) {
            toggleReplies(targetMessage.actualIndex || sortedMessages.value.length - 1);

            console.log('sortedMessages.value.length', sortedMessages.value.length);
            console.log('targetMessage.actualIndex', targetMessage.actualIndex);
            console.log('maxShowMessages.value', maxShowMessages.value);
            console.log('sortedMessages.value.length - targetMessage.actualIndex', sortedMessages.value.length - (targetMessage.actualIndex || 0));

            if ((sortedMessages.value.length - (targetMessage.actualIndex || 0)) > maxShowMessages.value) {
              console.log('showMoreMessages', maxShowMessages.value);
              showMoreMessages(true);
              console.log('maxShowMessages', maxShowMessages.value);
            }

            nextTick(() => {
              console.log('nextTick', maxShowMessages.value);
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
        });
      }
    };

    watch(() => props.uid, (newUid) => {
      console.log('newUid', newUid);
      if (newUid) {
        get(bulletinRef).then((snapshot) => {
          const data = snapshot.val();
          console.log(data);
          messages.value = data.map((message: any) => ({
            author: message.author,
            uid: message.uid,
            date: message.date,
            text: message.text,
            updated: message.updated,
            reactions: message.reactions || {},
            replies: message.replies ? message.replies.map((reply: any): Reply => ({
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

    onMounted(() => {
      console.log('mounted');
      onValue(bulletinRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        messages.value = data.map((message: any) => ({
          author: message.author,
          uid: message.uid,
          date: message.date,
          text: message.text,
          updated: message.updated,
          reactions: message.reactions || {},
          replies: message.replies ? message.replies.map((reply: any): Reply => ({
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

        restoreRepliesExpandedState();

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

      document.addEventListener('click', handleMentionClick);

      if (process.env.NODE_ENV === 'development') {
        testMentions();
      }
    });

    onBeforeUnmount(() => {
      // 清理事件監聽器
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('scroll', scrollHandler, true);
      document.removeEventListener('click', handleMentionClick);

      // 清理激活的下拉菜單
      removeActiveDropdownMenu();
    });

    const addHref = () => {
      if (newMessageHref.value) {
        try {
          new URL(newMessageHref.value);
          newMessageHrefs.value.push(newMessageHref.value);
          newMessageHref.value = '';
        } catch (e) {
          alert('請輸入有效的網址');
        }
      }
    };

    const removeHref = () => {
      if (newMessageHrefs.value.length > 0) {
        newMessageHrefs.value.pop();
      }
    };

    const removeHrefByIndex = (index: number) => {
      newMessageHrefs.value.splice(index, 1);
    };

    const showMoreMessages = (force: boolean = false) => {
      if (force) {
        maxShowMessages.value = sortedMessages.value.length;
      } else {
        maxShowMessages.value += 10;
      }
    };

    const showLessMessages = () => {
      maxShowMessages.value -= 10;
    };

    const detectMentionedUsers = (text: string): string[] => {
      if (!text) return [];

      const mentionedUsers: string[] = [];
      const mentionRegex = /@([a-zA-Z0-9\u4e00-\u9fa5_]+)/g;
      let match;

      while ((match = mentionRegex.exec(text)) !== null) {
        const username = match[1];

        const userEntry = Object.entries(props.users).find(([_, user]) =>
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

    const getStatusIcon = (status: string): string => {
      const statusConfig = availableStatuses.value.find(s => s.value === status);
      return statusConfig ? statusConfig.icon : 'circle outline';
    };

    const getStatusText = (status: string): string => {
      const statusConfig = availableStatuses.value.find(s => s.value === status);
      return statusConfig ? statusConfig.text : '開啟';
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

    const getPriorityIcon = (priority: string): string => {
      const priorityConfig = availablePriorities.value.find(p => p.value === priority);
      return priorityConfig ? priorityConfig.icon : 'chevron down';
    };

    const getPriorityText = (priority: string): string => {
      const priorityConfig = availablePriorities.value.find(p => p.value === priority);
      return priorityConfig ? priorityConfig.text : '低';
    };

    // 引用功能相關函數
    const quoteMessage = (messageIndex: number) => {
      if (!dataLoaded.value || !props.uid) return;

      const message = messages.value[messageIndex];
      const quotedText = `> ${message.author}: ${message.text.substring(0, 100)}${message.text.length > 100 ? '...' : ''}\n\n`;

      // 設置引用內容到新留言框
      newMessage.value = quotedText + newMessage.value;

      // 聚焦到留言框
      nextTick(() => {
        if (messageTextarea.value) {
          messageTextarea.value.focus();
          messageTextarea.value.setSelectionRange(newMessage.value.length, newMessage.value.length);
        }
      });
    };

    const scrollToMessage = (messageId: number) => {
      const messageElement = document.querySelector(`[data-message-id="${messageId}"]`);
      if (messageElement) {
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        messageElement.classList.add('highlight-message');
        setTimeout(() => {
          messageElement.classList.remove('highlight-message');
        }, 3000);
      }
    };

    // 任務列表相關函數
    const parseTaskList = (text: string): Array<{id: string, text: string, completed: boolean}> => {
      const taskRegex = /^(\s*[-*+]\s*\[([x\s])\]\s*(.+))$/gm;
      const tasks: Array<{id: string, text: string, completed: boolean}> = [];
      let match;

      while ((match = taskRegex.exec(text)) !== null) {
        tasks.push({
          id: Math.random().toString(36).substr(2, 9),
          text: match[3].trim(),
          completed: match[2] === 'x'
        });
      }

      return tasks;
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

    const getCompletedTaskCount = (tasks: Array<{id: string, text: string, completed: boolean}>): number => {
      return tasks.filter(task => task.completed).length;
    };

    // 檢測引用的函數
    const detectReferences = (text: string): Array<{id: number, preview: string, type: 'message' | 'reply'}> => {
      const references: Array<{id: number, preview: string, type: 'message' | 'reply'}> = [];

      // 檢測引用格式 (例如 #123 或 引用 #123)
      const referenceRegex = /(?:引用\s*)?#(\d+)/g;
      let match;

      while ((match = referenceRegex.exec(text)) !== null) {
        const messageId = parseInt(match[1]);
        if (messageId < messages.value.length) {
          const referencedMessage = messages.value[messageId];
          if (referencedMessage) {
            references.push({
              id: messageId,
              preview: referencedMessage.text.substring(0, 50) + (referencedMessage.text.length > 50 ? '...' : ''),
              type: 'message'
            });
          }
        }
      }

      return references;
    };

    return {
      isBigFile,
      uploadProgress,
      maxShowMessages,
      showMoreMessages,
      showLessMessages,
      messages,
      newMessage,
      newMessageHref,
      addMessage,
      parseDate,
      toggleLogin,
      sortedMessages,
      toggleReaction,
      toggleReplyReaction,
      hasReacted,
      getReactionCount,
      getReactionUsers,
      dataLoaded,
      replyingTo,
      replyText,
      toggleReplyForm,
      addReply,
      cancelReply,
      toggleReplies,
      deleteReply,
      saveRepliesExpandedState,
      restoreRepliesExpandedState,
      editMessage,
      editingMessage,
      uploadingFile,
      newMessageAttachments,
      handleFileUpload,
      removeAttachment,
      addHref,
      removeHref,
      removeHrefByIndex,
      newMessageHrefs,
      messageTextarea,
      showMentions,
      mentionSuggestions,
      mentionIndex,
      handleMessageInput,
      handleKeydown,
      selectMention,
      parseMentionsAndHideTasks,
      searchKeyword,
      filteredMessages,
      handleSearch,
      clearSearch,
      detectMentionedUsers,
      sendMentionNotifications,
      availableLabels,
      availableStatuses,
      availablePriorities,
      toggleLabel,
      hasLabel,
      changeStatus,
      getStatusIcon,
      getStatusText,
      changePriority,
      getPriorityIcon,
      getPriorityText,
      quoteMessage,
      scrollToMessage,
      parseTaskList,
      toggleTask,
      getCompletedTaskCount,
      detectReferences,
      handleDropdownClick,
      activeDropdownMenu,
      activeDropdownType,
      activeDropdownMessageIndex,
      createDropdownMenu,
      removeActiveDropdownMenu,
      notifyAllUsers,
      sendNotificationToAllUsers,
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

.ui.comments .comment {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
}

.ui.comments .comment:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.ui.comments .comment .author {
  font-weight: 600;
  font-size: 1.1rem;
  color: #0066FF;
  margin-bottom: 0.5rem;
}

.ui.comments .comment .metadata {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.text {
  white-space: pre-wrap;
}

.ui.comments .comment .text {
  line-height: 1.6;
  color: #333;
}

@media (hover: hover) {
  .ui.comments .comment .text {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
  }
}

@media (hover: none) {
  .ui.comments .comment .text {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
}

.replies {
  margin-top: 1rem;
  margin-left: 2rem;
}

.ui.form.reply {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
}

.ui.form.reply textarea {
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.ui.form.reply textarea:focus {
  border-color: #0066FF;
  outline: none;
}

.ui.primary.submit.button {
  background-color: #0066FF;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.ui.primary.submit.button:hover {
  background-color: #0052cc;
}

img.ui.avatar.image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
  border: 2px solid #f0f0f0;
}

.ui.comments.flex-column::-webkit-scrollbar {
  width: 8px;
}

.ui.comments.flex-column::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.ui.comments.flex-column::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

.ui.comments.flex-column::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

.actions {
  margin-top: 0.75rem;
  display: flex;
  gap: 0.5rem;
}

.reaction-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.reaction-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.reaction-btn:hover {
  background-color: #f8f9fa;
  border-color: #0066FF;
  color: #0066FF;
  transform: translateY(-1px);
}

.reaction-btn.active {
  background-color: #EEF3FF;
  border-color: #0066FF;
  color: #0066FF;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.action-btn {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.4rem 0.8rem;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.action-btn:hover {
  background-color: #f8f9fa;
  border-color: #0066FF;
  color: #0066FF;
  transform: translateY(-1px);
}

.action-btn.active {
  background-color: #EEF3FF;
  border-color: #0066FF;
  color: #0066FF;
}

/* 不同按鈕的特定顏色 */
.reply-btn {
  border-color: #0066FF;
  color: #0066FF;
}

.reply-btn:hover {
  background-color: #EEF3FF;
  border-color: #0066FF;
  color: #0066FF;
}

.quote-btn {
  border-color: #28a745;
  color: #28a745;
}

.quote-btn:hover {
  background-color: #d4edda;
  border-color: #28a745;
  color: #28a745;
}

.edit-btn {
  border-color: #6f42c1;
  color: #6f42c1;
}

.edit-btn:hover {
  background-color: #e2d5f1;
  border-color: #6f42c1;
  color: #6f42c1;
}

.expand-btn {
  border-color: #fd7e14;
  color: #fd7e14;
}

.expand-btn:hover {
  background-color: #fff3cd;
  border-color: #fd7e14;
  color: #fd7e14;
}

.delete-btn {
  border-color: #dc3545;
  color: #dc3545;
}

.delete-btn:hover {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #dc3545;
}

.emoji {
  font-size: 1.1rem;
}

.count {
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 1rem;
  text-align: center;
}

.reaction-tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.8rem;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  z-index: 1000;
  margin-bottom: 5px;
}

.reaction-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

.reaction-btn:hover .reaction-tooltip {
  opacity: 1;
}

@media (max-width: 768px) {
  .ui.container {
    padding: 1rem;
  }

  .ui.comments .comment {
    padding: 1rem;
  }

  .ui.form.reply {
    padding: 1rem;
  }

  .reaction-buttons {
    gap: 0.3rem;
  }

  .reaction-btn {
    padding: 0.3rem 0.6rem;
    margin-bottom: 0.3rem;
  }

  .action-buttons {
    gap: 0.3rem;
  }

  .action-btn {
    padding: 0.3rem 0.6rem;
    margin-bottom: 0.3rem;
  }

  .emoji {
    font-size: 1rem;
  }

  .count {
    font-size: 0.8rem;
  }

  .reaction-tooltip {
    font-size: 0.7rem;
    padding: 0.3rem 0.6rem;
  }
}

.ui.upload.segment {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 0.5rem;
}

.ui.upload.segment .ui.list {
  margin-top: 1rem;
}

.ui.upload.segment .ui.list .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

.ui.upload.segment .ui.list .item .content {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.ui.upload.segment .ui.list .item .content a {
  color: #0066FF;
  text-decoration: none;
}

.ui.upload.segment .ui.list .item .content a:hover {
  text-decoration: underline;
}

.ui.upload.segment .ui.list .item .content a:hover {
  text-decoration: underline;
}

.ui.upload.segment .ui.mini.red.button {
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
}

.ui.upload.segment .ui.basic.button {
  border: 1px solid #0066FF;
  color: #0066FF;
  background: transparent;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.ui.upload.segment .ui.basic.button:hover {
  background-color: #0066FF;
  color: white;
}

.attachments {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.attachments i.paperclip.icon {
  color: #666;
  font-size: 1rem;
}

.attachments .ui.buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.attachments .ui.mini.basic.button {
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border: 1px solid #0066FF;
  color: #0066FF;
  background: transparent;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.attachments .ui.mini.basic.button:hover {
  background-color: #0066FF;
  color: white;
}

.attachments .ui.mini.basic.button i.file.icon {
  margin-right: 0.3rem;
}

.no-border {
  border: none !important;
  box-shadow: none !important;
}

.text-underline {
  text-decoration: underline !important;
}

.mention-suggestions {
  position: absolute;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
}

.mention-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  gap: 8px;

  &:hover, &.active {
    background-color: #f0f0f0;
  }

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
}

.mention-item.mention-all {
  background-color: #EEF3FF;
  border: 1px solid #0066FF;
  border-radius: 6px;
  font-weight: 600;
  color: #0066FF;
  
  &:hover, &.active {
    background-color: #d4e6ff;
    border-color: #0052cc;
  }
  
  i.envelope.icon {
    color: #0066FF;
    font-size: 16px;
  }
}

.ui.search.segment {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.ui.search.segment .ui.input {
  width: 100%;
}

.ui.search.segment .ui.label {
  margin-top: 0.5rem;
  background: #E3F2FD;
  color: #1976D2;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.ui.search.segment .ui.label i.close.icon {
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.ui.search.segment .ui.label i.close.icon:hover {
  opacity: 1;
}

:deep(.mention-link) {
  color: #0066FF;
  font-weight: 500;
  background-color: rgba(0, 102, 255, 0.1);
  padding: 2px 4px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

:deep(.mention-link:hover) {
  background-color: rgba(0, 102, 255, 0.2);
}

/* 標籤系統樣式 */
.message-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.message-status-priority {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.message-status {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.85rem;
  background-color: #f8f9fa;
  color: #666;
}

.message-status.in-progress {
  background-color: #fff3cd;
  color: #856404;
}

.message-status.resolved {
  background-color: #d4edda;
  color: #155724;
}

.message-status.closed {
  background-color: #f8d7da;
  color: #721c24;
}

.message-priority {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

.message-priority.medium {
  background-color: #499e2b;
  color: white
}

.message-priority.high {
  background-color: #ff6b6b;
  color: white;
}

.message-priority.urgent {
  background-color: #f4ff2b;
  color: rgb(0, 0, 0);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

.message-labels {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.message-labels .ui.label {
  margin: 0;
  font-size: 0.75rem;
  padding: 0.4rem 0.6rem;
  border-radius: 10px;
}

/* 引用樣式 */
.message-references {
  margin-bottom: 1rem;
}

.referenced-message {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #f8f9fa;
  border-left: 4px solid #0066FF;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-bottom: 0.5rem;
}

.referenced-message:hover {
  background-color: #e9ecef;
}

.reference-text {
  font-size: 0.9rem;
  color: #666;
}

/* 任務列表樣式 */
.task-list {
  margin: 1rem 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.task-summary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-weight: 500;
  color: #495057;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #dee2e6;
}

.task-item:last-child {
  border-bottom: none;
}

.task-item.completed .task-text {
  text-decoration: line-through;
  color: #6c757d;
}

.task-item input[type="checkbox"] {
  margin: 0;
  cursor: pointer;
}

.task-text {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.4;
}

/* 下拉菜單觸發按鈕樣式 */
.dropdown-trigger {
  position: relative;
  z-index: 1;
}

/* 高亮消息樣式 */
.highlight-message {
  background-color: #fff3cd !important;
  border-left: 4px solid #ffc107 !important;
  animation: highlight-fade 3s ease-in-out;
}

@keyframes highlight-fade {
  0% { background-color: #fff3cd; }
  100% { background-color: transparent; }
}

/* 響應式設計 */
@media (max-width: 768px) {
  .message-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .message-status-priority {
    flex-wrap: wrap;
  }

  .message-labels {
    width: 100%;
  }

  .dropdown .menu {
    position: absolute;
    left: 0;
    right: 0;
    max-width: none;
    min-width: auto;
    width: auto;
    margin-left: 0;
    margin-right: 0;
    z-index: 99999;
    transform: none;
  }

  .task-list {
    margin: 0.5rem 0;
    padding: 0.75rem;
  }

  .referenced-message {
    padding: 0.5rem;
  }

  /* 確保下拉按鈕在小螢幕上有足夠的點擊區域 */
  .dropdown.ui.button {
    min-height: 44px;
    padding: 0.5rem 1rem;
  }
}

/* 超小螢幕優化 */
@media (max-width: 480px) {
  .ui.buttons {
    flex-wrap: wrap;
    gap: 0.25rem;
  }

  .dropdown.ui.tiny.basic.button {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
    margin-bottom: 0.25rem;
  }

  .dropdown .menu {
    font-size: 0.85rem;
    max-height: 200px;
    overflow-y: auto;
  }

  .dropdown .menu .item {
    padding: 0.6rem 0.8rem;
  }
}

/* 確保下拉菜單觸發按鈕有良好的視覺回饋 */
.dropdown-trigger:hover,
.dropdown-trigger:focus {
  background-color: #f8f9fa;
  border-color: #0066FF;
}

.dropdown-trigger:active {
  background-color: #e9ecef;
}

</style>
