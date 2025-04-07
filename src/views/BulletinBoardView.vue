<template lang="pug">
  .ui.container.two.column.stackable.grid
    .column(v-if="!uid")
      .ui.segment
        .ui.header 留言板
        .ui.description 請先登入才能留言
        .ui.divider
        button.ui.large.green.basic.button(@click="toggleLogin") 登入

    .ui.comments.flex-column.column(v-if="uid")
      .comment(v-for="(message, index) in sortedMessages" :key="index")
        .content
          img.ui.avatar.image(v-if="users && users[message.uid] && users[message.uid].photoURL" :src="users[message.uid].photoURL")
          .author {{ message.author }}
          .metadata
            .date {{ parseDate(message.date) }}
          .text {{ message.text }}
          .actions
            .reaction-buttons
              button.reaction-btn(
                v-for="emoji in ['👍', '❤️', '🙏', '🫡', '❤️‍🔥', '😢']"
                :key="emoji"
                @click="toggleReaction(message, emoji)"
                :class="{ active: hasReacted(message, emoji) }"
              )
                .reaction-tooltip(v-if="getReactionCount(message, emoji) > 0")
                  | {{ getReactionUsers(message, emoji) }}
                span.emoji {{ emoji }}
                span.count {{ getReactionCount(message, emoji) }}

    .ui.form.reply.column(v-if="uid")
      .ui.divider.thin-only
      .field
        label 輸入留言
        textarea(v-model="newMessage")
      .ui.primary.submit.button(@click="addMessage") 留言
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, nextTick, computed } from 'vue';
import { onValue, ref as dbRef, set } from 'firebase/database';
import { bulletinRef } from '@/firebase';

interface Message {
  author: string;
  uid: string;
  date: string;
  text: string;
  reactions: {
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
    const messages = ref<Message[]>([
      { author: 'AliceS', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'BobS', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-20 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-20 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-29 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-29 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' }

    ].map(msg => ({
      ...msg,
      reactions: {}
    })));

    const newMessage = ref('');

    // 添加 sortedMessages 計算屬性
    const sortedMessages = computed(() => {
      return [...messages.value].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime(); // 降序排列，最新的在前面
      });
    });

    const addMessage = () => {
      console.log(newMessage.value);
      messages.value.push({
        author: props.users[props.uid].name || '匿名',
        uid: props.uid || '123',
        date: new Date().toISOString(),
        text: newMessage.value,
        reactions: {}
      });
      newMessage.value = '';
      set(bulletinRef, messages.value).then(() => {
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

    // 新增處理反應的方法
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

      // 更新到 Firebase
      set(bulletinRef, messages.value).then(() => {
        console.log('反應更新成功');
      });
    };

    const hasReacted = (message: Message, reaction: string) => {
      return message.reactions?.[reaction]?.[props.uid] || false;
    };

    const getReactionCount = (message: Message, reaction: string) => {
      return Object.keys(message.reactions?.[reaction] || {}).length;
    };

    // 新增獲取反應者名稱的方法
    const getReactionUsers = (message: Message, reaction: string): string => {
      if (!message.reactions?.[reaction]) return '';

      return Object.keys(message.reactions[reaction])
        .map(uid => props.users[uid]?.name || '匿名用戶')
        .join('、');
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
          reactions: message.reactions || {}
        }));
      });
      setInterval(async () => {
        console.log('tick');
        await nextTick();
        // 更新 messages 的狀態以觸發重新渲染
        messages.value = [...messages.value];
      }, 60 * 1000);
    });

    return {
      messages,
      newMessage,
      addMessage,
      parseDate,
      toggleLogin,
      sortedMessages,
      toggleReaction,
      hasReacted,
      getReactionCount,
      getReactionUsers
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

.ui.comments .comment .text {
  line-height: 1.6;
  color: #333;
}

/* 具有懸停能力的設備（通常是桌面電腦）可以選擇文字 */
@media (hover: hover) {
  .ui.comments .comment .text {
    user-select: text;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
  }
}

/* 觸控設備（手機和平板）不能選擇文字 */
@media (hover: none) {
  .ui.comments .comment .text {
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
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

.ui.green.basic.button {
  border: 2px solid #0066FF;
  color: #0066FF;
  background: transparent;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
}

.ui.green.basic.button:hover {
  background-color: #0066FF;
  color: white;
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
</style>