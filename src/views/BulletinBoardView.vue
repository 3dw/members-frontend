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
          .ui.buttons
            button.ui.tiny.basic.blue.button(@click="toggleReplyForm(message.actualIndex)")
              | 回覆&nbsp;&nbsp;
              i.reply.icon
            button.ui.tiny.basic.orange.button(@click="toggleReplies(message.actualIndex)")
              span(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded") 展開&nbsp;&nbsp;
                i.expand.icon
              span(v-else) 收起&nbsp;&nbsp;
                i.chevron.up.icon

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
                    button.ui.tiny.basic.red.button(@click="deleteReply(message.actualIndex, rIndex)")
                      i.trash.icon
                      | 刪除

          .ui.form.reply-form(v-if="replyingTo === message.actualIndex")
            .ui.divider
            textarea(v-model="replyText" class="reply-textarea" rows="2" cols="50" placeholder="輸入回覆...")
            .actions
              button.ui.primary.button(@click="addReply(message.actualIndex)") 發送
              button.ui.button(@click="cancelReply") 取消

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
import { bulletinRef, database } from '@/firebase';

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
  replies?: Reply[];
  repliesExpanded?: boolean;
  actualIndex?: number;
}

interface Reply {
  author: string;
  uid: string;
  date: string;
  text: string;
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
    ].map(msg => ({
      ...msg,
      reactions: {}
    })));

    const newMessage = ref('');
    const dataLoaded = ref(false);
    const replyingTo = ref(-1);
    const replyText = ref('');

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
      if (!dataLoaded.value) return;

      console.log(newMessage.value);
      const m_length = messages.value.length;
      const newMessageObj = {
        author: props.users[props.uid].name || '匿名',
        uid: props.uid || '123',
        date: new Date().toISOString(),
        text: newMessage.value,
        reactions: {}
      }
      messages.value.push(newMessageObj);
      newMessage.value = '';
      set(dbRef(database, 'messages/' + m_length), newMessageObj).then(() => {
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
        set(dbRef(database, `messages/${message.actualIndex}/reactions`), message.reactions).then(() => {
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

      const newReply: Reply = {
        author: props.users[props.uid].name || '匿名',
        uid: props.uid,
        date: new Date().toISOString(),
        text: replyText.value.trim()
      };

      messageToReply.replies.push(newReply);
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

      // 確認回覆是當前用戶所發的
      const replyToDelete = messageToUpdate.replies[replyIndex];
      if (replyToDelete.uid !== props.uid) return;

      if (window.confirm('確定要刪除這則回覆嗎？')) {
        // 移除回覆
        messageToUpdate.replies.splice(replyIndex, 1);

      // 更新到 Firebase，只更新特定訊息的回覆
      set(dbRef(database, `bulletin/${messageIndex}/replies`), messageToUpdate.replies).then(() => {
          console.log('回覆刪除成功');
        });
      }
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
          reactions: message.reactions || {},
          replies: message.replies || []
        }));
        dataLoaded.value = true;
      });
      setInterval(async () => {
        console.log('tick');
        await nextTick();
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
      getReactionUsers,
      dataLoaded,
      replyingTo,
      replyText,
      toggleReplyForm,
      addReply,
      cancelReply,
      toggleReplies,
      deleteReply
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