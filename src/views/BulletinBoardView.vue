<template lang="pug">
  .ui.container.two.column.stackable.grid
    .column(v-if="!uid")
      .ui.segment
        .ui.header 留言板
        .ui.description 請先登入才能留言
        .ui.divider
        button.ui.large.green.basic.button(@click="toggleLogin") 登入

    .ui.comments.flex-column.column(v-if="uid")
      .comment(v-for="(message, index) in sortedMessages.slice(0, maxShowMessages)" :key="index")
        .content
          img.ui.avatar.image(v-if="users && users[message.uid] && users[message.uid].photoURL" :src="users[message.uid].photoURL")
          .author {{ message.author }}
          .metadata
            .date {{ parseDate(message.date) }}
              span.updated(v-if="message.updated") ({{ parseDate(message.updated) }}已更新)
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
              span(v-if="href.length > 40") {{ href.slice(0, 20) }}...
              span(v-else) {{ href }}
          .ui.buttons
            button.ui.tiny.basic.blue.button(@click="toggleReplyForm(message.actualIndex)")
              | 回覆&nbsp;&nbsp;
              i.reply.icon
            button.ui.tiny.basic.orange.button(v-if="message.replies && message.replies.length > 0" @click="toggleReplies(message.actualIndex)")
              span(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded") 展開&nbsp;&nbsp;
                i.expand.icon
              span(v-else) 收起&nbsp;&nbsp;
                i.chevron.up.icon
            button.ui.tiny.basic.purple.button(v-if="message.uid === uid && (!message.replies || message.replies.length === 0)" @click="editMessage(message.actualIndex)")
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
                    // 加入emoji回覆
                    .reaction-buttons
                      button.reaction-btn(
                        v-for="emoji in ['👍', '❤️', '🙏', '🫡', '❤️‍🔥', '😢']"
                        :key="emoji"
                        @click="toggleReplyReaction(reply, message.actualIndex, rIndex, emoji)"
                        :class="{ active: hasReacted(reply, emoji) }"
                      )
                        .reaction-tooltip(v-if="getReactionCount(reply, emoji) > 0")
                          | {{ getReactionUsers(reply, emoji) }}
                        span.emoji {{ emoji }}
                        span.count {{ getReactionCount(reply, emoji) }}
                  .ui.buttons
                    button.ui.tiny.basic.blue.button(@click="toggleReplyForm(message.actualIndex)")
                      | 回覆&nbsp;&nbsp;
                      i.reply.icon
                    button.ui.tiny.basic.orange.button(v-if="message.replies && message.replies.length > 0" @click="toggleReplies(message.actualIndex)")
                      span(v-if="!message.replies || message.replies.length === 0 || !message.repliesExpanded") 展開&nbsp;&nbsp;
                        i.expand.icon
                      span(v-else) 收起&nbsp;&nbsp;
                        i.chevron.up.icon
                    button.ui.tiny.basic.red.button(@click="deleteReply(message.actualIndex, rIndex)")
                      i.trash.icon
                      span.fat-only 刪除

          .ui.form.reply-form(v-if="replyingTo === message.actualIndex")
            .ui.divider
            textarea(v-model="replyText" class="reply-textarea" rows="2" cols="50" placeholder="輸入回覆...")
            .actions
              button.ui.primary.button(@click="addReply(message.actualIndex)") 發送
              button.ui.button(@click="cancelReply") 取消

      .show-more-messages(v-if="sortedMessages.length > maxShowMessages")
        button.ui.basic.orange.button(@click="showMoreMessages")
          i.chevron.down.icon
          | 顯示更多留言
      .show-less-messages(v-if="sortedMessages.length <= maxShowMessages && sortedMessages.length > 5")
        button.ui.basic.orange.button(@click="showLessMessages")
          i.chevron.up.icon
          | 顯示更少留言

    .ui.form.reply.column(v-if="uid")
      .ui.divider.thin-only
      .field
        label 輸入留言
        textarea(v-model="newMessage")
      .field
        label
          i.paperclip.icon
          | 附加檔案(可選，最大10MB)
        .ui.upload.segment
          input(type="file" ref="fileUpload" @change="handleFileUpload" style="display: none")
          .ui.basic.button(@click="$refs.fileUpload.click()")
            i.upload.icon
            | 選擇檔案
          span(v-if="uploadingFile") 上傳中...
          .ui.list(v-if="newMessageAttachments && newMessageAttachments.length > 0")
            .item(v-for="(file, index) in newMessageAttachments" :key="index")
              i.file.icon
              .content
                a(:href="file.url" target="_blank") {{ file.name }}
                .ui.mini.red.button(@click="removeAttachment(index)") 刪除

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

    const maxShowMessages = ref(5);
    const messages = ref<Message[]>([
      { author: 'AliceS', uid: '123', date: '2025-03-18 10:00:00', text: 'This is a great post!' },
      { author: 'BobS', uid: '456', date: '2025-03-18 10:00:00', text: 'I totally agree with Alice.' },
    ].map(msg => ({
      ...msg,
      reactions: {}
    })));

    const newMessage = ref('');
    const newMessageHref = ref('');
    const newMessageHrefs = ref<string[]>([]);
    const dataLoaded = ref(false);
    const replyingTo = ref(-1);
    const replyText = ref('');
    const editingMessage = ref(-1);
    const uploadingFile = ref(false);
    const newMessageAttachments = ref<Array<{name: string, url: string, size: number, type: string}>>([]);

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
      const newMessageObj: Message = {
        author: props.users[props.uid].name || '匿名',
        uid: props.uid || '123',
        date: new Date().toISOString(),
        text: newMessage.value,
        reactions: {},
      }

      // 只有在有附加檔案時才加入 attachments 欄位
      if (newMessageAttachments.value.length > 0) {
        newMessageObj.attachments = newMessageAttachments.value;
      }

      // 只有在有連結時才加入 hrefs 欄位
      if (newMessageHrefs.value.length > 0) {
        newMessageObj.hrefs = newMessageHrefs.value;
      }

      messages.value.push(newMessageObj);
      newMessage.value = '';
      newMessageHrefs.value = [];
      newMessageAttachments.value = [];
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

      // 保存展開狀態到sessionStorage
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

    // 新增保存展開狀態到sessionStorage的方法
    const saveRepliesExpandedState = () => {
      const expandedState: Record<number, boolean> = {};
      messages.value.forEach((message, index) => {
        if (message.repliesExpanded) {
          expandedState[index] = true;
        }
      });
      sessionStorage.setItem('repliesExpandedState', JSON.stringify(expandedState));
    };

    // 新增從sessionStorage恢復展開狀態的方法
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

      // 確認是用戶自己的留言且沒有回覆
      if (messageToEdit.uid !== props.uid || (messageToEdit.replies && messageToEdit.replies.length > 0)) return;

      // 取得編輯內容（這裡可以使用 prompt，在實際使用時建議更換為 modal 或表單）
      const editedText = prompt('編輯留言', messageToEdit.text);

      if (editedText !== null && editedText.trim() !== '') {
        // 更新留言內容
        messageToEdit.text = editedText.trim();
        // 添加更新時間戳
        messageToEdit.updated = new Date().toISOString();

        // 更新到 Firebase
        set(dbRef(database, `bulletin/${index}/text`), editedText.trim()).then(() => {
          console.log('留言編輯成功');
        });
        // 更新 updated 欄位到 Firebase
        set(dbRef(database, `bulletin/${index}/updated`), messageToEdit.updated).then(() => {
          console.log('更新時間記錄成功');
        });
      }
    };

    const handleFileUpload = async (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (!file) return;

      // 檢查檔案大小 (最大 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert('檔案大小不能超過 10MB');
        return;
      }

      uploadingFile.value = true;
      try {
        // 直接讀取檔案內容
        const fileContent = await file.arrayBuffer();

        // 上傳檔案
        const response = await fetch('https://members-backend.alearn13994229.workers.dev/uploadToR2/files/' + file.name, {
          method: 'POST',
          body: fileContent,
          headers: {
            'Content-Type': file.type
          }
        });

        if (!response.ok) {
          throw new Error('上傳失敗');
        }

        const result = await response.json();

        // 新增檔案資訊到 attachments 陣列
        newMessageAttachments.value.push({
          name: file.name,
          url: result.url,
          size: file.size,
          type: file.type
        });

        // 清空檔案輸入
        (event.target as HTMLInputElement).value = '';

      } catch (error) {
        console.error('檔案上傳失敗:', error);
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
          attachments: message.attachments || []
        }));
        dataLoaded.value = true;

        // 在數據載入後恢復展開狀態
        restoreRepliesExpandedState();
      });
      setInterval(async () => {
        console.log('tick');
        await nextTick();
        messages.value = [...messages.value];
      }, 60 * 1000);
    });

    const addHref = () => {
      if (newMessageHref.value) {
        // 檢查是否為有效的 URL
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

    const showMoreMessages = () => {
      maxShowMessages.value += 10;
    };

    const showLessMessages = () => {
      maxShowMessages.value -= 10;
    };

    return {
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
      newMessageHrefs
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
</style>