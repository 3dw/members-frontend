<template lang="pug">
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
        .item
          i.tags.icon
          .content
            strong 任務列表:
            | 使用
            code - [ ] 任務項目
            |  或
            code - [x] 已完成項目
            |  格式
        .item
          i.at.icon
          .content
            strong 提及用戶:
            | 使用
            code @用戶名
            |  格式提及其他用戶
    .mention-suggestions(
      v-if="showMentions && mentionSuggestions.length > 0"
      :style="{ top: mentionPosition.top + 'px', left: mentionPosition.left + 'px' }"
    )
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
import { ref, defineComponent, nextTick } from 'vue';

interface User {
  name: string;
  photoURL?: string;
  email?: string;
}

export default defineComponent({
  name: 'BulletinMessageEditor',
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
  emits: ['add-message'],
  setup(props, { emit }) {
    const uploadProgress = ref('');
    const isBigFile = ref(false);
    const newMessage = ref('');
    const newMessageHref = ref('');
    const newMessageHrefs = ref<string[]>([]);
    const uploadingFile = ref(false);
    const newMessageAttachments = ref<Array<{name: string, url: string, size: number, type: string}>>([]);
    const messageTextarea = ref<HTMLTextAreaElement | null>(null);
    const showMentions = ref(false);
    const mentionSuggestions = ref<Array<{uid: string, name: string, photoURL?: string}>>([]);
    const mentionIndex = ref(0);
    const mentionStart = ref(-1);
    const notifyAllUsers = ref(false);
    const mentionPosition = ref({ top: 0, left: 0 });

    const addMessage = () => {
      if (newMessageHref.value) {
        newMessageHrefs.value.push(newMessageHref.value);
        newMessageHref.value = '';
      }

      const mentionedUsers = detectMentionedUsers(newMessage.value);
      const tasks = parseTaskList(newMessage.value);
      const referencedMessages = detectReferences(newMessage.value);

      const messageData = {
        text: newMessage.value,
        attachments: newMessageAttachments.value,
        hrefs: newMessageHrefs.value,
        mentionedUsers,
        tasks,
        referencedMessages,
        notifyAllUsers: notifyAllUsers.value
      };

      emit('add-message', messageData);

      // 清空表單
      newMessage.value = '';
      newMessageHrefs.value = [];
      newMessageAttachments.value = [];
      notifyAllUsers.value = false;
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

    // 計算 @ 符號位置
    const calculateMentionPosition = () => {
      if (!messageTextarea.value || mentionStart.value === -1) return;

      const textarea = messageTextarea.value;
      const textareaRect = textarea.getBoundingClientRect();

      // 創建一個臨時的 span 來測量文本寬度
      const measurer = document.createElement('span');
      const computedStyle = getComputedStyle(textarea);

      measurer.style.cssText = `
        visibility: hidden;
        position: absolute;
        white-space: pre;
        font-family: ${computedStyle.fontFamily};
        font-size: ${computedStyle.fontSize};
        font-weight: ${computedStyle.fontWeight};
        line-height: ${computedStyle.lineHeight};
        letter-spacing: ${computedStyle.letterSpacing};
      `;

      document.body.appendChild(measurer);

      // 獲取到 @ 符號為止的文本
      const textBeforeMention = newMessage.value.slice(0, mentionStart.value + 1);

      // 處理換行
      const lines = textBeforeMention.split('\n');
      const lastLine = lines[lines.length - 1];

      // 測量最後一行的寬度
      measurer.textContent = lastLine;
      const textWidth = measurer.getBoundingClientRect().width;

      document.body.removeChild(measurer);

      // 計算位置
      const paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
      const paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
      const borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
      const borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
      const lineHeight = parseInt(computedStyle.lineHeight, 10) || 20;

      // 計算 @ 符號的位置
      const left = textareaRect.left + paddingLeft + borderLeft + textWidth;
      const top = textareaRect.top + paddingTop + borderTop + (lines.length * lineHeight) + window.scrollY;

      // 確保不超出螢幕邊界
      const menuWidth = Math.min(220, window.innerWidth - 20);
      const maxLeft = window.innerWidth - menuWidth - 10;
      const minLeft = 10;
      const finalLeft = Math.min(Math.max(left, minLeft), maxLeft);

      // 確保不超出底部邊界
      const menuHeight = 250;
      const maxTop = window.innerHeight - menuHeight - 10;
      const finalTop = Math.min(top, maxTop);

      mentionPosition.value = { top: finalTop, left: finalLeft };
    };

    const handleMessageInput = () => {
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

          // 計算位置
          nextTick(() => {
            calculateMentionPosition();
          });
          return;
        }

        if (!searchText.includes(' ')) {
          const filteredUsers = Object.entries(props.users)
            .filter(([, user]) =>
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

          // 計算位置
          nextTick(() => {
            calculateMentionPosition();
          });
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

    const addHref = () => {
      if (newMessageHref.value) {
        try {
          new URL(newMessageHref.value);
          newMessageHrefs.value.push(newMessageHref.value);
          newMessageHref.value = '';
        } catch {
          alert('請輸入有效的網址');
        }
      }
    };

    const removeHrefByIndex = (index: number) => {
      newMessageHrefs.value.splice(index, 1);
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

    // 檢測引用的函數
    const detectReferences = (text: string): Array<{id: number, preview: string, type: 'message' | 'reply'}> => {
      const references: Array<{id: number, preview: string, type: 'message' | 'reply'}> = [];

      // 檢測引用格式 (例如 #123 或 引用 #123)
      const referenceRegex = /(?:引用\s*)?#(\d+)/g;
      let match;

      while ((match = referenceRegex.exec(text)) !== null) {
        const messageId = parseInt(match[1]);
        // 這裡需要從父組件獲取 messages 來檢查引用是否有效
        // 暫時先加入，讓父組件來驗證
        references.push({
          id: messageId,
          preview: '',
          type: 'message'
        });
      }

      return references;
    };

    return {
      uploadProgress,
      isBigFile,
      newMessage,
      newMessageHref,
      newMessageHrefs,
      uploadingFile,
      newMessageAttachments,
      messageTextarea,
      showMentions,
      mentionSuggestions,
      mentionIndex,
      notifyAllUsers,
      mentionPosition,
      addMessage,
      handleFileUpload,
      removeAttachment,
      calculateMentionPosition,
      handleMessageInput,
      handleKeydown,
      selectMention,
      addHref,
      removeHrefByIndex,
      detectMentionedUsers,
      parseTaskList,
      detectReferences,
    }
  }
});
</script>

<style scoped>
.ui.form.reply {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  max-width: 1200px;
  margin: 0 auto;
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

.mention-suggestions {
  position: fixed;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  max-height: 200px;
  overflow-y: auto;
  z-index: 10000;
  min-width: 200px;
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

/* 響應式設計 */
@media (max-width: 768px) {
  .ui.form.reply {
    padding: 1rem;
  }

  /* 小螢幕上的 @ 提及選單優化 */
  .mention-suggestions {
    min-width: 180px;
    max-width: calc(100vw - 20px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }

  .mention-item {
    padding: 12px 16px;
    font-size: 14px;
  }

  .mention-item img {
    width: 20px;
    height: 20px;
  }
}

/* 超小螢幕優化 */
@media (max-width: 480px) {
  .ui.buttons {
    flex-wrap: wrap;
    gap: 0.25rem;
  }
}
</style>
