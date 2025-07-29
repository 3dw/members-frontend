<template lang="pug">
.ui.comments.full-width(v-if="uid")
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

  .message-list
    .message-card(
      v-for="(message, index) in filteredMessages.slice(0, maxShowMessages)" 
      :key="index" 
      :data-message-id="message.actualIndex"
    )
      .message-stats
        .stat-item
          .stat-number {{ message.replies ? message.replies.length : 0 }}
          .stat-label 回應
        .stat-item
          .stat-number 0
          .stat-label 回報
      
      .message-content(@click="selectMessage(message.actualIndex)")
        .message-header
          .user-info
            img.user-avatar(
              v-if="users && users[message.uid] && users[message.uid].photoURL"
              :src="users[message.uid].photoURL"
              alt="用戶頭像"
            )
            .user-avatar-placeholder(v-else)
              i.user.icon
            .user-details
              .author {{ message.author }}
              .date {{ parseDate(message.date) }}
          
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

        .message-title(v-if="message.title")
          h3.title-text {{ message.title }}
        
        .message-preview
          .preview-text {{ message.text.length > 150 ? message.text.slice(0, 150) + '...' : message.text }}
          .read-more-link(v-if="message.text.length > 150" @click.stop="selectMessage(message.actualIndex)") 閱讀全文▼

  .show-more-messages(v-if="filteredMessages.length > maxShowMessages")
    button.ui.basic.orange.button(@click="showMoreMessages")
      i.chevron.down.icon
      | 顯示更多留言
  .show-less-messages(v-if="filteredMessages.length <= maxShowMessages && filteredMessages.length > 5")
    button.ui.basic.orange.button(@click="showLessMessages")
      i.chevron.up.icon
      | 顯示更少留言

  // 留言按鈕
  .message-action-section
    button.ui.large.orange.button.message-btn(@click="toggleMessageForm")
      i.edit.icon
      | 我想留言

  // 留言表單
  .message-form-overlay(v-if="showMessageForm" @click="closeMessageForm")
  .message-form(v-if="showMessageForm" @click.stop="")
    .form-header
      h3 新增留言
      button.close-btn(@click="closeMessageForm")
        i.times.icon
    .form-body
      .field
        label 標題 (可選)
        input(
          type="text"
          v-model="newMessageTitle"
          placeholder="輸入標題..."
          maxlength="100"
        )
      .field
        label 留言內容
        textarea(
          v-model="newMessageText"
          placeholder="輸入留言內容..."
          rows="6"
        )
      .form-actions
        button.ui.orange.button(@click="submitMessage") 發送留言
        button.ui.button(@click="closeMessageForm") 取消
</template>

<script lang="ts">
import { ref, defineComponent, computed, watch } from 'vue';

interface Message {
  author: string;
  uid: string;
  date: string;
  updated?: string;
  title?: string;
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
  name: 'BulletinMessageList',
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
    }
  },
  emits: ['select-message', 'add-message'],
  setup(props, { emit }) {
    const maxShowMessages = ref(10);
    const searchKeyword = ref('');
    const filteredMessages = ref<Message[]>([]);
    const showMessageForm = ref(false);
    const newMessageTitle = ref('');
    const newMessageText = ref('');

    const sortedMessages = computed(() => {
      return [...props.messages].map((obj, index) => {
        return {
          ...obj,
          actualIndex: index
        };
      }).sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime();
      });
    });

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
    };

    const handleSearch = () => {
      if (!searchKeyword.value.trim()) {
        filteredMessages.value = sortedMessages.value;
        return;
      }

      const keyword = searchKeyword.value.toLowerCase().trim();
      filteredMessages.value = sortedMessages.value.filter(message => {
        if (message.title && message.title.toLowerCase().includes(keyword)) {
          return true;
        }

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

    const showMoreMessages = () => {
      maxShowMessages.value += 10;
    };

    const showLessMessages = () => {
      maxShowMessages.value = Math.max(10, maxShowMessages.value - 10);
    };

    const selectMessage = (messageIndex: number) => {
      console.log('點擊留言:', messageIndex);
      console.log('發送 select-message 事件');
      emit('select-message', messageIndex);
    };

    const toggleMessageForm = () => {
      showMessageForm.value = !showMessageForm.value;
    };

    const closeMessageForm = () => {
      showMessageForm.value = false;
      newMessageTitle.value = '';
      newMessageText.value = '';
    };

    const submitMessage = () => {
      if (newMessageText.value.trim()) {
        emit('add-message', {
          title: newMessageTitle.value.trim(),
          text: newMessageText.value.trim(),
          attachments: [],
          hrefs: [],
          mentionedUsers: [],
          tasks: [],
          referencedMessages: [],
          notifyAllUsers: false
        });
        closeMessageForm();
      }
    };

    const getStatusIcon = (status: string): string => {
      const statusMap: {[key: string]: string} = {
        'open': 'circle outline',
        'in-progress': 'hourglass half',
        'resolved': 'check circle',
        'closed': 'times circle'
      };
      return statusMap[status] || 'circle outline';
    };

    const getStatusText = (status: string): string => {
      const statusMap: {[key: string]: string} = {
        'open': '開啟',
        'in-progress': '進行中',
        'resolved': '已解決',
        'closed': '已關閉'
      };
      return statusMap[status] || '開啟';
    };

    const getPriorityIcon = (priority: string): string => {
      const priorityMap: {[key: string]: string} = {
        'low': 'arrow down',
        'medium': 'minus',
        'high': 'arrow up',
        'urgent': 'exclamation triangle'
      };
      return priorityMap[priority] || 'arrow down';
    };

    const getPriorityText = (priority: string): string => {
      const priorityMap: {[key: string]: string} = {
        'low': '低',
        'medium': '中',
        'high': '高',
        'urgent': '緊急'
      };
      return priorityMap[priority] || '低';
    };

    watch(sortedMessages, (newMessages) => {
      if (!searchKeyword.value.trim()) {
        filteredMessages.value = newMessages;
      } else {
        handleSearch();
      }
    }, { immediate: true });

    return {
      maxShowMessages,
      searchKeyword,
      filteredMessages,
      sortedMessages,
      parseDate,
      handleSearch,
      clearSearch,
      showMoreMessages,
      showLessMessages,
      selectMessage,
      getStatusIcon,
      getStatusText,
      getPriorityIcon,
      getPriorityText,
      showMessageForm,
      newMessageTitle,
      newMessageText,
      toggleMessageForm,
      closeMessageForm,
      submitMessage,
    }
  }
});
</script>

<style lang="scss" scoped>
.ui.comments.full-width {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}

.message-list {
  width: 100%;
  
  .message-card {
    display: flex;
    background: #fff;
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
    border: 1px solid #e8e8e8;
    overflow: hidden;
    width: 100%;

    &:hover {
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      transform: translateY(-1px);
      border-color: #0066FF;
    }

    .message-stats {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 80px;
      background: #f8f9fa;
      border-right: 1px solid #e8e8e8;
      padding: 1rem 0.5rem;

      .stat-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 0.5rem;

        &:last-child {
          margin-bottom: 0;
        }

        .stat-number {
          font-size: 1.2rem;
          font-weight: 600;
          color: #0066FF;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #666;
          margin-top: 0.25rem;
        }
      }
    }

    .message-content {
      flex: 1;
      padding: 1rem;
      cursor: pointer;

      .message-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 0.75rem;
        flex-wrap: wrap;
      }

      .user-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        .user-avatar-placeholder {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e8e8e8;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #999;

          i.icon {
            font-size: 1rem;
          }
        }

        .user-details {
          .author {
            font-weight: 600;
            color: #0066FF;
            font-size: 0.9rem;
            line-height: 1.2;
          }

          .date {
            color: #666;
            font-size: 0.8rem;
            margin-top: 0.25rem;
          }
        }
      }

      .message-status-priority {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;

        .message-status,
        .message-priority {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;

          i.icon {
            font-size: 0.75rem;
          }
        }

        .message-status {
          background: #e3f2fd;
          color: #1976d2;

          &.in-progress {
            background: #fff3e0;
            color: #f57c00;
          }

          &.resolved {
            background: #e8f5e8;
            color: #388e3c;
          }

          &.closed {
            background: #ffebee;
            color: #d32f2f;
          }
        }

        .message-priority {
          &.medium {
            background: #fff3e0;
            color: #f57c00;
          }

          &.high {
            background: #ffebee;
            color: #d32f2f;
          }

          &.urgent {
            background: #d32f2f;
            color: #fff;
          }
        }
      }

      .message-labels {
        margin-bottom: 0.75rem;

        .ui.mini.label {
          margin-right: 0.5rem;
          margin-bottom: 0.25rem;
        }
      }

      .message-title {
        margin-bottom: 0.75rem;

        .title-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }
      }

      .message-preview {
        .preview-text {
          color: #333;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .read-more-link {
          color: #0066FF;
          font-size: 0.85rem;
          cursor: pointer;
          display: inline-block;
          margin-top: 0.5rem;
          font-weight: 500;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.message-action-section {
  margin-top: 2rem;
  text-align: center;

  .message-btn {
    padding: 1rem 2rem;
    font-size: 1.1rem;
  }
}

.message-form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.message-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  z-index: 1001;
  min-width: 400px;
  max-width: 600px;

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    h3 {
      margin: 0;
      color: #1a1a1a;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #666;
      padding: 0;

      &:hover {
        color: #d32f2f;
      }
    }
  }

  .form-body {
    .field {
      margin-bottom: 1rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 600;
        color: #1a1a1a;
      }

      input,
      textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #e8e8e8;
        border-radius: 6px;
        font-size: 0.9rem;
        transition: border-color 0.2s ease;

        &:focus {
          outline: none;
          border-color: #0066FF;
        }
      }

      textarea {
        resize: vertical;
        min-height: 120px;
      }
    }

    .form-actions {
      display: flex;
      gap: 1rem;
      justify-content: flex-end;
      margin-top: 1.5rem;

      button {
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;

        &.ui.orange.button {
          background: #0066FF;
          color: white;
          border: none;

          &:hover {
            background: #0052cc;
          }
        }

        &.ui.button {
          background: #f8f9fa;
          color: #666;
          border: 1px solid #e8e8e8;

          &:hover {
            background: #e8e8e8;
          }
        }
      }
    }
  }
}

.show-more-messages,
.show-less-messages {
  text-align: center;
  margin: 2rem 0;

  button {
    padding: 0.75rem 1.5rem;
  }
}

@media (max-width: 768px) {
  .message-card {
    flex-direction: column;

    .message-stats {
      flex-direction: row;
      justify-content: space-around;
      border-right: none;
      border-bottom: 1px solid #e8e8e8;
      padding: 0.75rem;

      .stat-item {
        margin-bottom: 0;
      }
    }

    .message-content {
      padding: 0.75rem;
    }
  }

  .message-form {
    min-width: 90vw;
    margin: 1rem;
  }
}
</style> 