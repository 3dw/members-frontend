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
img.ui.avatar.image {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}

.ui.container {
  font-size: 16px; /* 調整這裡的數值來改變字體大小 */
}

.ui.comments .comment .content {
  font-size: 16px;
}

.ui.comments.flex-column {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 85vh; /* 設定最大高度 */
  overflow-y: auto !important; /* 添加垂直卷軸 */
  padding-right: 10px; /* 為卷軸預留空間 */
  width: 100%; /* 確保寬度為100% */
  word-break: break-word; /* 防止文字溢出 */
}

@media (max-width: 768px) {
  .ui.comments.flex-column {
    max-height: 45vh;
  }
}

.ui.comments .comment {
  width: 100%; /* 確保留言寬度為100% */
  margin-bottom: 1em;
}

.ui.comments .comment .content {
  font-size: 16px;
  max-width: 100%; /* 確保內容不超過容器 */
}

/* 確保留言文字不會溢出 */
.ui.comments .comment .text {
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

/* 可以在這裡添加自定義樣式 */
</style>