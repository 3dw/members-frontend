<template>
  <div class="nested-reply-demo">
    <h2>🎯 嵌套回覆系統演示</h2>
    
    <div class="demo-controls">
      <h3>測試數據</h3>
      <button @click="generateTestData" class="btn-generate">
        生成測試回覆
      </button>
      <button @click="clearReplies" class="btn-clear">
        清除所有回覆
      </button>
    </div>
    
    <div class="reply-stats">
      <span class="stat">
        總回覆數: {{ ReplyManager.countReplies(replies) }}
      </span>
      <span class="stat">
        最大深度: {{ calculateMaxDepth(replies) }}
      </span>
    </div>
    
    <div class="reply-container">
      <!-- 使用新的嵌套回覆組件 -->
      <NestedReplyComponent
        :replies="replies"
        :current-user-id="currentUserId"
        :max-depth="10"
        :available-emojis="['👍', '❤️', '🙏', '🫡', '❤️‍🔥', '😢', '😂', '🤔', '👏', '🔥']"
        :highlighted-reply-id="highlightedReplyId"
        @add-reply="handleAddReply"
        @edit-reply="handleEditReply"
        @delete-reply="handleDeleteReply"
        @toggle-reaction="handleToggleReaction"
      />
    </div>
    
    <div class="add-root-reply">
      <h4>新增根回覆</h4>
      <textarea
        v-model="newRootReply"
        placeholder="輸入新的根回覆..."
        rows="3"
        class="root-reply-input"
      />
      <button 
        @click="addRootReply"
        :disabled="!newRootReply.trim()"
        class="btn-add-root"
      >
        新增回覆
      </button>
    </div>
    
    <div class="debug-info">
      <h4>除錯資訊</h4>
      <pre>{{ JSON.stringify(replies, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NestedReplyComponent from './NestedReplyComponent.vue';
import type { NestedReply } from '@/types/bulletin';
import { ReplyManager } from '@/utils/replyUtils';

// 響應式數據
const replies = ref<NestedReply[]>([]);
const currentUserId = ref('demo_user_123');
const highlightedReplyId = ref('');
const newRootReply = ref('');

// 生成測試數據
const generateTestData = () => {
  const testReplies: NestedReply[] = [
    {
      id: 'reply_1',
      author: 'Alice',
      uid: 'user_alice',
      date: new Date(Date.now() - 3600000).toISOString(),
      text: '這是一個很好的想法！我們可以進一步討論實作細節。',
      reactions: {
        '👍': { user_bob: true, user_charlie: true },
        '❤️': { user_david: true }
      },
      children: [
        {
          id: 'reply_1_1',
          author: 'Bob',
          uid: 'user_bob',
          date: new Date(Date.now() - 3000000).toISOString(),
          text: '我同意 Alice 的觀點，但我們還需要考慮性能問題。',
          parentId: 'reply_1',
          replyToUser: 'Alice',
          reactions: {
            '🤔': { user_alice: true }
          },
          children: [
            {
              id: 'reply_1_1_1',
              author: 'Charlie',
              uid: 'user_charlie',
              date: new Date(Date.now() - 2400000).toISOString(),
              text: '關於性能，我建議使用虛擬滾動來優化長列表。',
              parentId: 'reply_1_1',
              replyToUser: 'Bob',
              reactions: {
                '👏': { user_alice: true, user_bob: true }
              },
              children: [],
              level: 2
            }
          ],
          level: 1
        },
        {
          id: 'reply_1_2',
          author: 'David',
          uid: 'user_david',
          date: new Date(Date.now() - 2100000).toISOString(),
          text: '我可以幫忙處理 UI 設計的部分！',
          parentId: 'reply_1',
          replyToUser: 'Alice',
          reactions: {
            '❤️‍🔥': { user_alice: true }
          },
          children: [],
          level: 1
        }
      ],
      level: 0
    },
    {
      id: 'reply_2',
      author: 'Eve',
      uid: 'user_eve',
      date: new Date(Date.now() - 1800000).toISOString(),
      text: '有人測試過在移動設備上的表現嗎？',
      reactions: {
        '🤔': { user_alice: true, user_bob: true }
      },
      children: [
        {
          id: 'reply_2_1',
          author: 'Frank',
          uid: 'user_frank',
          date: new Date(Date.now() - 1200000).toISOString(),
          text: '我在 iOS 上測試了，運行得很順暢！',
          parentId: 'reply_2',
          replyToUser: 'Eve',
          reactions: {
            '👍': { user_eve: true }
          },
          children: [],
          level: 1
        }
      ],
      level: 0
    }
  ];
  
  replies.value = testReplies;
};

// 清除所有回覆
const clearReplies = () => {
  replies.value = [];
};

// 新增根回覆
const addRootReply = () => {
  const text = newRootReply.value.trim();
  if (!text) return;
  
  const newReply: NestedReply = {
    id: ReplyManager.generateReplyId(),
    author: '演示用戶',
    uid: currentUserId.value,
    date: new Date().toISOString(),
    text,
    reactions: {},
    children: [],
    level: 0
  };
  
  replies.value.push(newReply);
  newRootReply.value = '';
};

// 處理新增回覆
const handleAddReply = (data: { parentId: string; text: string; replyToUser: string }) => {
  const parentReply = ReplyManager.findReplyById(replies.value, data.parentId);
  if (!parentReply) return;
  
  const newReply = ReplyManager.createNewReply(
    { text: data.text, parentId: data.parentId, replyToUser: data.replyToUser },
    '演示用戶',
    currentUserId.value,
    parentReply.level
  );
  
  replies.value = ReplyManager.addReplyToTree(replies.value, newReply, data.parentId);
};

// 處理編輯回覆
const handleEditReply = (data: { replyId: string; text: string }) => {
  replies.value = ReplyManager.updateReplyInTree(replies.value, data.replyId, data.text);
};

// 處理刪除回覆
const handleDeleteReply = (replyId: string) => {
  if (confirm('確定要刪除這個回覆嗎？')) {
    replies.value = ReplyManager.removeReplyFromTree(replies.value, replyId);
  }
};

// 處理反應切換
const handleToggleReaction = (replyId: string, emoji: string) => {
  replies.value = ReplyManager.toggleReactionInTree(replies.value, replyId, emoji, currentUserId.value);
};

// 計算最大深度
const calculateMaxDepth = (replyList: NestedReply[]): number => {
  if (replyList.length === 0) return 0;
  return Math.max(...replyList.map(reply => 
    1 + calculateMaxDepth(reply.children)
  ));
};

// 初始化時生成測試數據
generateTestData();
</script>

<style scoped>
.nested-reply-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.demo-controls {
  margin-bottom: 20px;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
}

.demo-controls h3 {
  margin: 0 0 10px 0;
  color: #374151;
}

.btn-generate, .btn-clear {
  margin-right: 10px;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.btn-generate {
  background: #10b981;
  color: white;
}

.btn-generate:hover {
  background: #059669;
}

.btn-clear {
  background: #ef4444;
  color: white;
}

.btn-clear:hover {
  background: #dc2626;
}

.reply-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  padding: 10px;
  background: #e0f2fe;
  border-radius: 6px;
}

.stat {
  font-weight: 500;
  color: #0369a1;
}

.reply-container {
  margin-bottom: 30px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  background: white;
}

.add-root-reply {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8fafc;
  border-radius: 8px;
}

.add-root-reply h4 {
  margin: 0 0 10px 0;
  color: #374151;
}

.root-reply-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-family: inherit;
  font-size: 14px;
  line-height: 1.5;
  resize: vertical;
  margin-bottom: 10px;
}

.root-reply-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-add-root {
  padding: 10px 20px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
}

.btn-add-root:hover {
  background: #2563eb;
}

.btn-add-root:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.debug-info {
  margin-top: 30px;
  padding: 15px;
  background: #1f2937;
  border-radius: 8px;
  color: #f9fafb;
}

.debug-info h4 {
  margin: 0 0 10px 0;
  color: #f3f4f6;
}

.debug-info pre {
  margin: 0;
  font-size: 12px;
  line-height: 1.4;
  max-height: 300px;
  overflow-y: auto;
  color: #e5e7eb;
}
</style> 