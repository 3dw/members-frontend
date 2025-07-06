// 留言板的型別定義 - 支援嵌套回覆

export interface User {
  name: string;
  photoURL?: string;
  email?: string;
  uid: string;
}

export interface Reaction {
  [emoji: string]: {
    [uid: string]: boolean;
  };
}

// 新的嵌套回覆介面
export interface NestedReply {
  id: string;              // 回覆的唯一ID
  author: string;          // 作者名稱
  uid: string;             // 作者UID
  date: string;            // 建立時間
  updated?: string;        // 更新時間
  text: string;            // 回覆內容
  parentId?: string;       // 父回覆的ID（如果是回覆某個回覆）
  replyToUser?: string;    // 回覆的用戶名稱
  reactions?: Reaction;    // 反應
  children: NestedReply[]; // 子回覆陣列
  level: number;           // 回覆層級（用於顯示和限制）
  
  // UI 狀態屬性（前端使用）
  showReplyForm?: boolean; // 是否顯示回覆表單
  isEditing?: boolean;     // 是否正在編輯
}

// 主要留言介面
export interface Message {
  author: string;
  uid: string;
  date: string;
  updated?: string;
  text: string;
  reactions: Reaction;
  
  // 保持舊的回覆格式用於向後相容
  replies?: OldReply[];
  
  // 新的嵌套回覆格式
  nestedReplies?: NestedReply[];
  
  repliesExpanded?: boolean;
  actualIndex?: number;
  attachments?: Array<{name: string, url: string, size: number, type: string}>;
  hrefs?: string[];
  mentions?: string[];
}

// 舊的回覆格式（向後相容）
export interface OldReply {
  author: string;
  uid: string;
  date: string;
  text: string;
  reactions?: Reaction;
}

// 新回覆的輸入資料
export interface NewReplyData {
  text: string;
  parentId?: string;      // 如果是回覆某個回覆
  replyToUser?: string;   // 回覆的用戶名稱
}

// 回覆工具函數的介面
export interface ReplyUtils {
  // 生成新的回覆ID
  generateReplyId(): string;
  
  // 將舊格式回覆轉換為新格式
  convertOldRepliesToNested(oldReplies: OldReply[]): NestedReply[];
  
  // 遞迴尋找回覆
  findReplyById(replies: NestedReply[], id: string): NestedReply | null;
  
  // 新增回覆到正確的位置
  addReplyToTree(replies: NestedReply[], newReply: NestedReply, parentId?: string): NestedReply[];
  
  // 刪除回覆
  removeReplyFromTree(replies: NestedReply[], replyId: string): NestedReply[];
  
  // 計算回覆總數
  countReplies(replies: NestedReply[]): number;
  
  // 扁平化回覆樹（用於搜尋等）
  flattenReplies(replies: NestedReply[]): NestedReply[];
} 