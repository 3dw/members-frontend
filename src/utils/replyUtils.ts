// 嵌套回覆工具函數

import type { NestedReply, OldReply, NewReplyData } from '@/types/bulletin';

export class ReplyManager {
  private static readonly MAX_DEPTH = 10; // 最大回覆深度

  /**
   * 生成新的回覆ID
   */
  static generateReplyId(): string {
    return `reply_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * 將舊格式回覆轉換為新的嵌套格式
   */
  static convertOldRepliesToNested(oldReplies: OldReply[]): NestedReply[] {
    return oldReplies.map((oldReply) => ({
      id: this.generateReplyId(),
      author: oldReply.author,
      uid: oldReply.uid,
      date: oldReply.date,
      text: oldReply.text,
      reactions: oldReply.reactions || {},
      children: [],
      level: 0
    }));
  }

  /**
   * 遞迴尋找特定ID的回覆
   */
  static findReplyById(replies: NestedReply[], id: string): NestedReply | null {
    for (const reply of replies) {
      if (reply.id === id) {
        return reply;
      }
      
      // 遞迴搜尋子回覆
      const found = this.findReplyById(reply.children, id);
      if (found) {
        return found;
      }
    }
    return null;
  }

  /**
   * 創建新回覆
   */
  static createNewReply(
    data: NewReplyData,
    author: string,
    uid: string,
    parentLevel: number = 0
  ): NestedReply {
    return {
      id: this.generateReplyId(),
      author,
      uid,
      date: new Date().toISOString(),
      text: data.text,
      parentId: data.parentId,
      replyToUser: data.replyToUser,
      reactions: {},
      children: [],
      level: parentLevel + 1
    };
  }

  /**
   * 將新回覆加入到回覆樹的正確位置
   */
  static addReplyToTree(
    replies: NestedReply[], 
    newReply: NestedReply, 
    parentId?: string
  ): NestedReply[] {
    // 如果沒有指定父回覆，就加到根層級
    if (!parentId) {
      return [...replies, { ...newReply, level: 0 }];
    }

    // 遞迴尋找父回覆並加入子回覆
    return replies.map(reply => {
      if (reply.id === parentId) {
        // 檢查回覆深度限制
        if (reply.level >= this.MAX_DEPTH - 1) {
          console.warn('已達最大回覆深度');
          return reply;
        }
        
        return {
          ...reply,
          children: [...reply.children, { ...newReply, level: reply.level + 1 }]
        };
      }
      
      // 遞迴處理子回覆
      return {
        ...reply,
        children: this.addReplyToTree(reply.children, newReply, parentId)
      };
    });
  }

  /**
   * 從回覆樹中刪除指定回覆
   */
  static removeReplyFromTree(replies: NestedReply[], replyId: string): NestedReply[] {
    return replies
      .filter(reply => reply.id !== replyId)
      .map(reply => ({
        ...reply,
        children: this.removeReplyFromTree(reply.children, replyId)
      }));
  }

  /**
   * 更新回覆內容
   */
  static updateReplyInTree(
    replies: NestedReply[], 
    replyId: string, 
    newText: string
  ): NestedReply[] {
    return replies.map(reply => {
      if (reply.id === replyId) {
        return {
          ...reply,
          text: newText,
          updated: new Date().toISOString()
        };
      }
      
      return {
        ...reply,
        children: this.updateReplyInTree(reply.children, replyId, newText)
      };
    });
  }

  /**
   * 計算回覆總數（包含所有層級）
   */
  static countReplies(replies: NestedReply[]): number {
    return replies.reduce((total, reply) => {
      return total + 1 + this.countReplies(reply.children);
    }, 0);
  }

  /**
   * 將回覆樹扁平化為一維陣列（保持層級資訊）
   */
  static flattenReplies(replies: NestedReply[]): NestedReply[] {
    const flattened: NestedReply[] = [];
    
    const flatten = (replyList: NestedReply[]) => {
      for (const reply of replyList) {
        flattened.push(reply);
        if (reply.children.length > 0) {
          flatten(reply.children);
        }
      }
    };
    
    flatten(replies);
    return flattened;
  }

  /**
   * 切換回覆的反應
   */
  static toggleReactionInTree(
    replies: NestedReply[],
    replyId: string,
    emoji: string,
    userId: string
  ): NestedReply[] {
    return replies.map(reply => {
      if (reply.id === replyId) {
        const reactions = { ...reply.reactions };
        
        if (!reactions[emoji]) {
          reactions[emoji] = {};
        }
        
        if (reactions[emoji][userId]) {
          delete reactions[emoji][userId];
        } else {
          reactions[emoji][userId] = true;
        }
        
        return { ...reply, reactions };
      }
      
      return {
        ...reply,
        children: this.toggleReactionInTree(reply.children, replyId, emoji, userId)
      };
    });
  }

  /**
   * 獲取特定回覆的路徑（用於高亮顯示）
   */
  static getReplyPath(replies: NestedReply[], targetId: string): string[] {
    const path: string[] = [];
    
    const findPath = (replyList: NestedReply[], currentPath: string[]): boolean => {
      for (const reply of replyList) {
        const newPath = [...currentPath, reply.id];
        
        if (reply.id === targetId) {
          path.push(...newPath);
          return true;
        }
        
        if (findPath(reply.children, newPath)) {
          return true;
        }
      }
      return false;
    };
    
    findPath(replies, []);
    return path;
  }

  /**
   * 搜尋回覆內容
   */
  static searchReplies(replies: NestedReply[], keyword: string): NestedReply[] {
    const results: NestedReply[] = [];
    
    const search = (replyList: NestedReply[]) => {
      for (const reply of replyList) {
        if (reply.text.toLowerCase().includes(keyword.toLowerCase()) ||
            reply.author.toLowerCase().includes(keyword.toLowerCase())) {
          results.push(reply);
        }
        search(reply.children);
      }
    };
    
    search(replies);
    return results;
  }

  /**
   * 檢查用戶是否可以刪除回覆
   */
  static canDeleteReply(reply: NestedReply, currentUserId: string): boolean {
    // 只有作者可以刪除自己的回覆
    // 且如果有子回覆，則不允許刪除（避免孤兒回覆）
    return reply.uid === currentUserId && reply.children.length === 0;
  }

  /**
   * 檢查用戶是否可以編輯回覆
   */
  static canEditReply(reply: NestedReply, currentUserId: string): boolean {
    return reply.uid === currentUserId;
  }

  /**
   * 格式化回覆時間顯示
   */
  static formatReplyTime(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    
    if (minutes < 1) return '剛剛';
    if (minutes < 60) return `${minutes} 分鐘前`;
    if (minutes < 1440) return `${Math.floor(minutes / 60)} 小時前`;
    if (minutes < 10080) return `${Math.floor(minutes / 1440)} 天前`;
    
    return date.toLocaleDateString();
  }
} 