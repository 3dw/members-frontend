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
    const messages = ref([
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
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },

      { author: 'Alice', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'Bob', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' }

    ]);

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
        text: newMessage.value
      });
      newMessage.value = '';
      set(bulletinRef, messages.value).then(() => {
        console.log('留言成功');
      });
      // 可以在這裡添加邏輯來將新留言添加到 messages 中
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

    onMounted(() => {
      console.log('mounted');
      onValue(bulletinRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        messages.value = data.map((message: any) => ({
          author: message.author,
          uid: message.uid,
          date: message.date,
          text: message.text
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
      sortedMessages
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
}
</style>