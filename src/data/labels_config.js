// 預設標籤配置
export const DEFAULT_LABELS = [
    {
        id: 'bug',
        name: '錯誤',
        color: 'red',
        description: '系統錯誤或問題回報',
        icon: 'bug'
    },
    {
        id: 'feature',
        name: '功能請求',
        color: 'blue',
        description: '新功能需求或建議',
        icon: 'lightbulb'
    },
    {
        id: 'discussion',
        name: '討論',
        color: 'green',
        description: '一般討論話題',
        icon: 'comments'
    },
    {
        id: 'question',
        name: '疑問',
        color: 'yellow',
        description: '提問或尋求幫助',
        icon: 'question'
    },
    {
        id: 'urgent',
        name: '緊急',
        color: 'orange',
        description: '需要緊急處理的事項',
        icon: 'exclamation triangle'
    },
    {
        id: 'documentation',
        name: '文檔',
        color: 'purple',
        description: '文檔相關問題',
        icon: 'file text'
    },
    {
        id: 'enhancement',
        name: '改進',
        color: 'teal',
        description: '現有功能的改進建議',
        icon: 'arrow up'
    },
    // 您可以在這裡添加更多自定義標籤
    {
        id: 'announcement',
        name: '公告',
        color: 'violet',
        description: '重要公告或通知',
        icon: 'bullhorn'
    },
    {
        id: 'feedback',
        name: '回饋',
        color: 'pink',
        description: '用戶回饋或建議',
        icon: 'thumbs up'
    }
];
// 根據項目需求自定義的標籤
export const CUSTOM_LABELS = [
    // 添加您專案特定的標籤
    {
        id: 'meeting',
        name: '會議',
        color: 'brown',
        description: '會議相關討論',
        icon: 'users'
    },
    {
        id: 'event',
        name: '活動',
        color: 'olive',
        description: '活動策劃或通知',
        icon: 'calendar'
    }
];
// 合併所有標籤
export const ALL_LABELS = [
    ...DEFAULT_LABELS,
    ...CUSTOM_LABELS
];
// 標籤顏色對應
export const LABEL_COLORS = {
    red: '#db2828',
    blue: '#2185d0',
    green: '#21ba45',
    yellow: '#fbbd08',
    orange: '#f2711c',
    purple: '#a333c8',
    teal: '#00b5ad',
    violet: '#6435c9',
    pink: '#e03997',
    brown: '#a5673f',
    olive: '#b5cc18'
};
// 可用的顏色選項（用於下拉選單）
export const AVAILABLE_COLORS = Object.keys(LABEL_COLORS);
//# sourceMappingURL=labels_config.js.map