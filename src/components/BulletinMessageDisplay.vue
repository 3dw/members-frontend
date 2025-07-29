<template lang="pug">
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

      .text(v-if="!message.textExpanded")
        span(v-html="parseMentionsAndHideTasks(message.text.length > 50 ? message.text.slice(0, 50) + '...' : message.text)")
        a.read-more-link(@click="expandMessage(message.actualIndex)" v-if="message.text.length > 50") 閱讀全文
      .text(v-else)
        span(v-html="parseMentionsAndHideTasks(message.text)")
        a.read-more-link(@click="collapseMessage(message.actualIndex)") 收起全文

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
            v-for="emoji in ['✅', '❌', '👍', '❤️', '🙏', '🫡', '🌟', '💡', '😊', '😁', '😢']"
            :key="emoji"
            @click="$emit('toggle-reaction', message, emoji)"
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
        button.action-btn.reply-btn(@click="$emit('toggle-reply-form', message.actualIndex)")
          i.reply.icon
          span 回覆
        button.action-btn.quote-btn(@click="$emit('quote-message', message.actualIndex)")
          i.quote.left.icon
          span 引用
        button.action-btn.expand-btn(v-if="message.replies && message.replies.length > 0" @click="toggleReplies(message.actualIndex)")
          i.expand.icon(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded")
          i.chevron.up.icon(v-else)
          span(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded") 展開
          span(v-else) 收起
        button.action-btn.edit-btn(v-if="message.uid === uid && (!message.replies || message.replies.length === 0)" @click="startEditMessage(message.actualIndex, message.text)")
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
              .text(v-if="!reply.textExpanded")
                span {{ reply.text.length > 50 ? reply.text.slice(0, 50) + '...' : reply.text }}
                a.read-more-link(@click="expandReply(message.actualIndex, rIndex)" v-if="reply.text.length > 50") 閱讀全文
              .text(v-else)
                span {{ reply.text }}
                a.read-more-link(@click="collapseReply(message.actualIndex, rIndex)") 收起全文
              .action-buttons
                button.action-btn.reply-btn(@click="$emit('toggle-reply-form', message.actualIndex)")
                  i.reply.icon
                  span 回覆
                button.action-btn.expand-btn(v-if="message.replies && message.replies.length > 0" @click="toggleReplies(message.actualIndex)")
                  i.expand.icon(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded")
                  i.chevron.up.icon(v-else)
                  span(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded") 展開
                  span(v-else) 收起
                button.action-btn.delete-btn(@click="$emit('delete-reply', message.actualIndex, rIndex)")
                  i.trash.icon
                  span.fat-only 刪除

      .ui.form.reply-form(v-if="replyingTo === message.actualIndex")
        .ui.divider
        textarea(v-model="localReplyText" class="reply-textarea" rows="2" cols="50" placeholder="輸入回覆...")
        .actions
          button.ui.primary.button(@click="handleAddReply(message.actualIndex)") 發送
          button.ui.button(@click="handleCancelReply") 取消

  .show-more-messages(v-if="filteredMessages.length > maxShowMessages")
    button.ui.basic.orange.button(@click="showMoreMessages")
      i.chevron.down.icon
      | 顯示更多留言
  .show-less-messages(v-if="filteredMessages.length <= maxShowMessages && filteredMessages.length > 5")
    button.ui.basic.orange.button(@click="showLessMessages")
      i.chevron.up.icon
      | 顯示更少留言

  // 編輯模態框
  .edit-modal-overlay(v-if="editingMessageIndex !== -1" @click="cancelEdit")
    .edit-modal(@click.stop="")
      .edit-modal-header
        h3 編輯留言
        button.close-btn(@click="cancelEdit")
          i.times.icon
      .edit-modal-body
        textarea.edit-textarea(
          v-model="editText"
          rows="8"
          placeholder="編輯您的留言..."
          ref="editTextarea"
        )
      .edit-modal-footer
        button.ui.primary.button(@click="saveEdit") 儲存
        button.ui.button(@click="cancelEdit") 取消
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, onBeforeUnmount, computed, watch, nextTick } from 'vue';
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

export default defineComponent({
  name: 'BulletinMessageDisplay',
  props: {
    uid: {
      required: false,
      default: ''
    },
    users: {
      required: false,
      default: () => ({})
    },
    messages: {
      type: Array as () => Message[],
      required: true,
      default: () => []
    },
    replyingTo: {
      type: Number,
      required: false,
      default: -1
    }
  },
  emits: ['toggle-reaction', 'toggle-reply-form', 'quote-message', 'edit-message', 'save-edit', 'cancel-edit', 'delete-reply', 'add-reply', 'cancel-reply', 'toggle-task', 'handle-dropdown-click', 'expand-message', 'collapse-message', 'expand-reply', 'collapse-reply', 'toggle-replies'],
  setup(props, { emit }) {
    const router = useRouter();
    const maxShowMessages = ref(5);
    const searchKeyword = ref('');
    const filteredMessages = ref<Message[]>([]);
    const localReplyText = ref('');
    const editingMessageIndex = ref(-1);
    const editText = ref('');
    const editTextarea = ref<HTMLTextAreaElement | null>(null);

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
      return [...props.messages].map((obj, index) => {
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

    // 文字展開狀態管理
    const expandMessage = (messageIndex: number) => {
      emit('expand-message', messageIndex);
    };

    const collapseMessage = (messageIndex: number) => {
      emit('collapse-message', messageIndex);
    };

    const expandReply = (messageIndex: number, replyIndex: number) => {
      emit('expand-reply', messageIndex, replyIndex);
    };

    const collapseReply = (messageIndex: number, replyIndex: number) => {
      emit('collapse-reply', messageIndex, replyIndex);
    };

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

      emit('toggle-replies', index);
      saveRepliesExpandedState();
    }

    const saveRepliesExpandedState = () => {
      const expandedState: Record<number, boolean> = {};
      props.messages.forEach((message, index) => {
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
          props.messages.forEach((message, index) => {
            message.repliesExpanded = expandedState[index] || false;
          });
        } catch (e) {
          console.error('恢復展開狀態失敗', e);
        }
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
        const user = Object.entries(props.users).find(([, user]) =>
          (user as User).name === username
        );

        if (user) {
          return `<span class="mention-link" data-uid="${user[0]}">${match}</span>`;
        }

        return match;
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

      console.log('searchKeyword.value', searchKeyword.value);

      const keyword = searchKeyword.value.toLowerCase().trim();
      filteredMessages.value = sortedMessages.value.filter(message => {
        if (message.text && message.text.toLowerCase().includes(keyword)) {
          return true;
        }

        if (message.author && message.author.toLowerCase().includes(keyword)) {
          return true;
        }

        if (message.replies) {
          return message.replies.some(reply =>
            reply.text && reply.text.toLowerCase().includes(keyword) ||
            reply.author && reply.author.toLowerCase().includes(keyword)
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

    const showMoreMessages = () => {
      maxShowMessages.value += 10;
    };

    const showLessMessages = () => {
      maxShowMessages.value -= 10;
    };

    const getStatusIcon = (status: string): string => {
      const statusConfig = availableStatuses.value.find(s => s.value === status);
      return statusConfig ? statusConfig.icon : 'circle outline';
    };

    const getStatusText = (status: string): string => {
      const statusConfig = availableStatuses.value.find(s => s.value === status);
      return statusConfig ? statusConfig.text : '開啟';
    };

    const getPriorityIcon = (priority: string): string => {
      const priorityConfig = availablePriorities.value.find(p => p.value === priority);
      return priorityConfig ? priorityConfig.icon : 'chevron down';
    };

    const getPriorityText = (priority: string): string => {
      const priorityConfig = availablePriorities.value.find(p => p.value === priority);
      return priorityConfig ? priorityConfig.text : '低';
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

    const getCompletedTaskCount = (tasks: Array<{id: string, text: string, completed: boolean}>): number => {
      return tasks.filter(task => task.completed).length;
    };

    const toggleTask = (messageIndex: number, taskId: string) => {
      emit('toggle-task', messageIndex, taskId);
    };

    // 當前激活的下拉菜單
    const activeDropdownMenu = ref<HTMLElement | null>(null);
    const activeDropdownType = ref<string>('');
    const activeDropdownMessageIndex = ref<number>(-1);

    // 創建動態下拉菜單 - 這個功能需要在父組件中實現
    const handleDropdownClick = (event: Event) => {
      // 將事件委託給父組件處理
      emit('handle-dropdown-click', event);
    };

    // 處理回覆相關功能
    const handleAddReply = (messageIndex: number) => {
      emit('add-reply', messageIndex, localReplyText.value);
      localReplyText.value = '';
    };

    const handleCancelReply = () => {
      emit('cancel-reply');
      localReplyText.value = '';
    };

    // 編輯相關函數
    const startEditMessage = (messageIndex: number, originalText: string) => {
      editingMessageIndex.value = messageIndex;
      editText.value = originalText;
      nextTick(() => {
        if (editTextarea.value) {
          editTextarea.value.focus();
        }
      });
    };

    const saveEdit = () => {
      if (editText.value.trim() !== '') {
        emit('save-edit', editingMessageIndex.value, editText.value.trim());
        cancelEdit();
      }
    };

    const cancelEdit = () => {
      editingMessageIndex.value = -1;
      editText.value = '';
    };

    onMounted(() => {
      document.addEventListener('click', handleMentionClick);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleMentionClick);
    });

    return {
      maxShowMessages,
      searchKeyword,
      filteredMessages,
      sortedMessages,
      parseDate,
      toggleReplies,
      saveRepliesExpandedState,
      restoreRepliesExpandedState,
      hasReacted,
      getReactionCount,
      getReactionUsers,
      parseMentionsAndHideTasks,
      handleSearch,
      clearSearch,
      showMoreMessages,
      showLessMessages,
      getStatusIcon,
      getStatusText,
      getPriorityIcon,
      getPriorityText,
      scrollToMessage,
      getCompletedTaskCount,
      toggleTask,
      expandMessage,
      collapseMessage,
      expandReply,
      collapseReply,
      handleDropdownClick,
      activeDropdownMenu,
      activeDropdownType,
      activeDropdownMessageIndex,
      localReplyText,
      handleAddReply,
      handleCancelReply,
      editingMessageIndex,
      editText,
      editTextarea,
      startEditMessage,
      saveEdit,
      cancelEdit,
    }
  }
});
</script>

<style scoped>
/* 所有留言顯示相關的樣式 */
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

/* 閱讀全文連結樣式 */
.read-more-link {
  color: #0066FF;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  margin-left: 0.5rem;
  transition: color 0.2s ease;
}

.read-more-link:hover {
  color: #0052cc;
  text-decoration: underline;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .ui.comments .comment {
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

  .task-list {
    margin: 0.5rem 0;
    padding: 0.75rem;
  }

  .referenced-message {
    padding: 0.5rem;
  }
}

/* 編輯模態框樣式 */
.edit-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}

.edit-modal {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow: hidden;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.edit-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  background: #f8f9fa;
}

.edit-modal-header h3 {
  margin: 0;
  color: #333;
  font-weight: 600;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.close-btn:hover {
  background-color: #e0e0e0;
  color: #333;
}

.edit-modal-body {
  padding: 1.5rem;
}

.edit-textarea {
  width: 100%;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.6;
  resize: vertical;
  min-height: 200px;
  transition: border-color 0.2s ease;
}

.edit-textarea:focus {
  outline: none;
  border-color: #0066FF;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
}

.edit-modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid #e0e0e0;
  background: #f8f9fa;
}

.edit-modal-footer .ui.button {
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;
}

.edit-modal-footer .ui.primary.button {
  background-color: #0066FF;
  color: white;
  border: none;
}

.edit-modal-footer .ui.primary.button:hover {
  background-color: #0052cc;
  transform: translateY(-1px);
}

.edit-modal-footer .ui.button:not(.primary) {
  background-color: white;
  color: #666;
  border: 1px solid #e0e0e0;
}

.edit-modal-footer .ui.button:not(.primary):hover {
  background-color: #f8f9fa;
  border-color: #ccc;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .edit-modal {
    width: 95%;
    max-height: 90vh;
  }

  .edit-modal-header,
  .edit-modal-body,
  .edit-modal-footer {
    padding: 1rem;
  }

  .edit-textarea {
    min-height: 150px;
  }

  .edit-modal-footer {
    flex-direction: column;
    gap: 0.5rem;
  }

  .edit-modal-footer .ui.button {
    width: 100%;
  }
}
</style>
