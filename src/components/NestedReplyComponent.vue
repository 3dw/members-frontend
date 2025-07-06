<template>
  <div class="nested-reply-container">
    <!-- 回覆項目 -->
    <div 
      v-for="reply in replies" 
      :key="reply.id"
      class="reply-item"
      :class="{ 'highlighted': highlightedReplyId === reply.id }"
      :style="{ 
        marginLeft: `${reply.level * 20}px`,
        borderLeft: reply.level > 0 ? '2px solid #e5e7eb' : 'none',
        paddingLeft: reply.level > 0 ? '15px' : '0'
      }"
    >
      <!-- 回覆內容 -->
      <div class="reply-content">
        <!-- 回覆者資訊 -->
        <div class="reply-header">
          <span class="reply-author">{{ reply.author }}</span>
          <span class="reply-time">{{ formatTime(reply.date) }}</span>
          <span v-if="reply.updated" class="reply-updated">
            (已編輯 {{ formatTime(reply.updated) }})
          </span>
          <span v-if="reply.replyToUser" class="reply-to">
            回覆 @{{ reply.replyToUser }}
          </span>
        </div>

        <!-- 回覆文字 -->
        <div v-if="!reply.isEditing" class="reply-text">
          {{ reply.text }}
        </div>

        <!-- 編輯模式 -->
        <div v-if="reply.isEditing" class="reply-edit-form">
          <textarea
            v-model="editingText"
            class="edit-textarea"
            @keydown.ctrl.enter="submitEdit(reply.id)"
            @keydown.esc="cancelEdit(reply.id)"
            placeholder="編輯回覆..."
            rows="3"
          />
          <div class="edit-actions">
            <button @click="submitEdit(reply.id)" class="btn-save">
              儲存
            </button>
            <button @click="cancelEdit(reply.id)" class="btn-cancel">
              取消
            </button>
          </div>
        </div>

        <!-- 回覆動作 -->
        <div class="reply-actions">
          <!-- 反應按鈕 -->
          <div class="reaction-buttons">
            <button 
              v-for="emoji in availableEmojis" 
              :key="emoji"
              @click="$emit('toggle-reaction', reply.id, emoji)"
              class="emoji-btn"
              :class="{ active: hasUserReacted(reply, emoji) }"
            >
              {{ emoji }}
              <span v-if="getReactionCount(reply, emoji) > 0" class="reaction-count">
                {{ getReactionCount(reply, emoji) }}
              </span>
            </button>
          </div>

          <!-- 操作按鈕 -->
          <div class="action-buttons">
            <button 
              @click="startReply(reply)"
              class="action-btn"
              :disabled="reply.level >= maxDepth"
            >
              <i class="fas fa-reply"></i>
              回覆
            </button>
            
            <button 
              v-if="canEdit(reply)"
              @click="startEdit(reply)"
              class="action-btn"
            >
              <i class="fas fa-edit"></i>
              編輯
            </button>
            
            <button 
              v-if="canDelete(reply)"
              @click="$emit('delete-reply', reply.id)"
              class="action-btn danger"
            >
              <i class="fas fa-trash"></i>
              刪除
            </button>
          </div>
        </div>

        <!-- 新增回覆表單 -->
        <div v-if="reply.showReplyForm" class="reply-form">
          <div class="reply-form-header">
            <span>回覆 @{{ reply.author }}</span>
            <button @click="cancelReply(reply.id)" class="close-btn">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <textarea
            v-model="newReplyText"
            class="reply-textarea"
            @keydown.ctrl.enter="submitReply(reply.id)"
            @keydown.esc="cancelReply(reply.id)"
            placeholder="輸入回覆..."
            rows="3"
          />
          
          <div class="reply-form-actions">
            <button 
              @click="submitReply(reply.id)"
              class="btn-submit"
              :disabled="!newReplyText.trim()"
            >
              發送回覆
            </button>
            <button @click="cancelReply(reply.id)" class="btn-cancel">
              取消
            </button>
          </div>
        </div>
      </div>

      <!-- 遞迴顯示子回覆 -->
      <NestedReplyComponent
        v-if="reply.children && reply.children.length > 0"
        :replies="reply.children"
        :current-user-id="currentUserId"
        :max-depth="maxDepth"
        :available-emojis="availableEmojis"
        :highlighted-reply-id="highlightedReplyId"
        @add-reply="$emit('add-reply', $event)"
        @edit-reply="$emit('edit-reply', $event)"
        @delete-reply="$emit('delete-reply', $event)"
        @toggle-reaction="(replyId, emoji) => $emit('toggle-reaction', replyId, emoji)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { NestedReply } from '@/types/bulletin';
import { ReplyManager } from '@/utils/replyUtils';

// 定義 Props
interface Props {
  replies: NestedReply[];
  currentUserId: string;
  maxDepth?: number;
  availableEmojis?: string[];
  highlightedReplyId?: string;
}

const props = withDefaults(defineProps<Props>(), {
  maxDepth: 10,
  availableEmojis: () => ['👍', '❤️', '🙏', '🫡', '❤️‍🔥', '😢'],
  highlightedReplyId: ''
});

// 定義事件
const emit = defineEmits<{
  'add-reply': [data: { parentId: string; text: string; replyToUser: string }];
  'edit-reply': [data: { replyId: string; text: string }];
  'delete-reply': [replyId: string];
  'toggle-reaction': [replyId: string, emoji: string];
}>();

// 響應式數據
const newReplyText = ref('');
const editingText = ref('');
const replyStates = reactive<Record<string, { showReplyForm: boolean; isEditing: boolean }>>({});

// 工具函數
const formatTime = (dateString: string) => {
  return ReplyManager.formatReplyTime(dateString);
};

const hasUserReacted = (reply: NestedReply, emoji: string) => {
  return reply.reactions?.[emoji]?.[props.currentUserId] || false;
};

const getReactionCount = (reply: NestedReply, emoji: string) => {
  return Object.keys(reply.reactions?.[emoji] || {}).length;
};

const canEdit = (reply: NestedReply) => {
  return ReplyManager.canEditReply(reply, props.currentUserId);
};

const canDelete = (reply: NestedReply) => {
  return ReplyManager.canDeleteReply(reply, props.currentUserId);
};

// 回覆相關函數
const startReply = (reply: NestedReply) => {
  // 清除其他回覆表單
  Object.keys(replyStates).forEach(id => {
    if (id !== reply.id) {
      replyStates[id] = { showReplyForm: false, isEditing: false };
    }
  });
  
  if (!replyStates[reply.id]) {
    replyStates[reply.id] = { showReplyForm: false, isEditing: false };
  }
  
  replyStates[reply.id].showReplyForm = true;
  newReplyText.value = '';
  
  // 設置回覆狀態到 reply 對象
  reply.showReplyForm = true;
};

const submitReply = (parentId: string) => {
  const text = newReplyText.value.trim();
  if (!text) return;
  
  const parentReply = findReplyById(props.replies, parentId);
  if (!parentReply) return;
  
  emit('add-reply', {
    parentId,
    text,
    replyToUser: parentReply.author
  });
  
  cancelReply(parentId);
};

const cancelReply = (replyId: string) => {
  const reply = findReplyById(props.replies, replyId);
  if (reply) {
    reply.showReplyForm = false;
  }
  
  if (replyStates[replyId]) {
    replyStates[replyId].showReplyForm = false;
  }
  
  newReplyText.value = '';
};

// 編輯相關函數
const startEdit = (reply: NestedReply) => {
  reply.isEditing = true;
  editingText.value = reply.text;
};

const submitEdit = (replyId: string) => {
  const text = editingText.value.trim();
  if (!text) return;
  
  emit('edit-reply', { replyId, text });
  cancelEdit(replyId);
};

const cancelEdit = (replyId: string) => {
  const reply = findReplyById(props.replies, replyId);
  if (reply) {
    reply.isEditing = false;
  }
  editingText.value = '';
};

// 輔助函數
const findReplyById = (replies: NestedReply[], id: string): NestedReply | null => {
  return ReplyManager.findReplyById(replies, id);
};
</script>

<style scoped>
.nested-reply-container {
  width: 100%;
}

.reply-item {
  margin-bottom: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.reply-item.highlighted {
  background-color: #fef3c7;
  border-left-color: #f59e0b !important;
}

.reply-content {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 12px;
}

.reply-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 14px;
}

.reply-author {
  font-weight: 600;
  color: #1e40af;
}

.reply-time {
  color: #6b7280;
  font-size: 12px;
}

.reply-updated {
  color: #9ca3af;
  font-size: 12px;
  font-style: italic;
}

.reply-to {
  color: #059669;
  font-size: 12px;
  font-weight: 500;
}

.reply-text {
  margin-bottom: 12px;
  line-height: 1.6;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.reply-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.reaction-buttons {
  display: flex;
  gap: 6px;
}

.emoji-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
}

.emoji-btn:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
}

.emoji-btn.active {
  background: #dbeafe;
  border-color: #3b82f6;
}

.reaction-count {
  font-size: 12px;
  color: #6b7280;
  font-weight: 500;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 12px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 12px;
  color: #6b7280;
}

.action-btn:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.action-btn.danger {
  color: #dc2626;
}

.action-btn.danger:hover {
  background: #fef2f2;
  border-color: #fecaca;
}

.reply-form {
  margin-top: 12px;
  padding: 12px;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.reply-form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #374151;
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  padding: 4px;
  border-radius: 4px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #f3f4f6;
  color: #374151;
}

.reply-textarea, .edit-textarea {
  width: 100%;
  min-height: 80px;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
}

.reply-textarea:focus, .edit-textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.reply-form-actions, .edit-actions {
  display: flex;
  gap: 8px;
  margin-top: 8px;
}

.btn-submit, .btn-save {
  padding: 8px 16px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.btn-submit:hover, .btn-save:hover {
  background: #2563eb;
}

.btn-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-cancel {
  padding: 8px 16px;
  background: #f3f4f6;
  color: #374151;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.btn-cancel:hover {
  background: #e5e7eb;
}

.reply-edit-form {
  margin-bottom: 12px;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .reply-item {
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
  
  .reply-actions {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  
  .reaction-buttons {
    flex-wrap: wrap;
  }
  
  .action-buttons {
    flex-wrap: wrap;
  }
}
</style> 