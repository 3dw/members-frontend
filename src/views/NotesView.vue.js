import { ref, computed, onMounted, defineComponent } from 'vue';
import { database } from '@/firebase';
import { ref as dbRef, push, update, onValue, remove } from 'firebase/database';
export default defineComponent({
    name: 'NotesView',
    props: {
        users: {
            type: Object,
            required: false,
            default: () => []
        },
        uid: {
            type: String,
            required: false,
            default: '匿名'
        }
    },
    setup(props) {
        const colorMap = {
            '#ffd700': '解決問題',
            '#ff69b4': '嘗試專案',
            '#4169e1': '資源協助',
            '#21a921': '學習文化',
            '#aa70aa': '貢獻能力'
        };
        const notes = ref([]);
        const selectedFilter = ref(null);
        const newNote = ref({
            content: '',
            color: '#ffd700',
            user: '匿名'
        });
        // 新增錯誤提示
        const errorMessage = ref('');
        const isLoading = ref(false);
        // 過濾筆記
        const filteredNotes = computed(() => {
            if (!selectedFilter.value)
                return notes.value;
            return notes.value.filter(note => note.color === selectedFilter.value);
        });
        // 格式化日期
        const formatDate = (timestamp) => {
            return new Date(timestamp).toLocaleDateString('zh-TW', {
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        };
        // 修改新增筆記函數
        const addNote = async () => {
            try {
                // 驗證內容
                if (!newNote.value.content.trim()) {
                    errorMessage.value = '請輸入內容';
                    return;
                }
                isLoading.value = true;
                // 準備要新增的資料
                const noteData = {
                    content: newNote.value.content.trim(),
                    color: newNote.value.color,
                    timestamp: new Date().toISOString(),
                    likes: 0,
                    user: props.users[props.uid].name || '匿名'
                };
                // 新增到 Firebase
                const notesRef = dbRef(database, 'notes');
                const newNoteRef = await push(notesRef);
                // 更新資料
                await update(newNoteRef, {
                    id: newNoteRef.key,
                    ...noteData
                });
                // 清空輸入
                newNote.value.content = '';
                errorMessage.value = '';
                console.log('便利貼新增成功！');
            }
            catch (error) {
                console.error('新增便利貼失敗：', error);
                errorMessage.value = '新增失敗，請稍後再試';
            }
            finally {
                isLoading.value = false;
            }
        };
        // 切換讚數
        const toggleLike = async (note) => {
            const noteRef = dbRef(database, `notes/${note.id}`);
            await update(noteRef, {
                likes: (note.likes || 0) + 1
            });
        };
        // 拖曳功能
        const dragStart = (event, note) => {
            if (event.dataTransfer) {
                event.dataTransfer.setData('noteId', note.id);
            }
        };
        const dragEnd = (event) => {
            event.preventDefault();
        };
        const drop = async (event, targetNote) => {
            event.preventDefault();
            if (!event.dataTransfer)
                return;
            const sourceId = event.dataTransfer.getData('noteId');
            const targetId = targetNote.id;
            const sourceIndex = notes.value.findIndex(n => n.id === sourceId);
            const targetIndex = notes.value.findIndex(n => n.id === targetId);
            if (sourceIndex > -1 && targetIndex > -1) {
                const temp = notes.value[sourceIndex];
                notes.value[sourceIndex] = notes.value[targetIndex];
                notes.value[targetIndex] = temp;
            }
        };
        // 過濾筆記
        const filterNotes = (color) => {
            selectedFilter.value = color;
        };
        // 刪除便利貼
        const deleteNote = async (note) => {
            try {
                if (!confirm('確定要刪除這張便利貼嗎？')) {
                    return;
                }
                const noteRef = dbRef(database, `notes/${note.id}`);
                await remove(noteRef);
                console.log('便利貼刪除成功！');
            }
            catch (error) {
                console.error('刪除便利貼失敗：', error);
                errorMessage.value = '刪除失敗，請稍後再試';
            }
        };
        // 監聽 Firebase 資料變化
        onMounted(() => {
            const notesRef = dbRef(database, 'notes');
            onValue(notesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    notes.value = Object.entries(data).map(([id, noteData]) => ({
                        id,
                        content: noteData.content || '',
                        color: noteData.color || '#ffd700',
                        timestamp: noteData.timestamp || new Date().toISOString(),
                        likes: noteData.likes || 0,
                        user: noteData.user || '匿名'
                    }));
                    // 依時間排序，最新的在前面
                    notes.value.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
                }
                else {
                    notes.value = [];
                }
            });
        });
        // 返回模板需要使用的值和函數
        return {
            notes,
            selectedFilter,
            newNote,
            errorMessage,
            isLoading,
            filteredNotes,
            colorMap,
            formatDate,
            addNote,
            toggleLike,
            dragStart,
            dragEnd,
            drop,
            filterNotes,
            deleteNote
        };
    }
});
debugger; /* PartiallyEnd: #3632/script.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['color-option']} */ ;
/** @type {__VLS_StyleScopedClasses['color-option']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip']} */ ;
/** @type {__VLS_StyleScopedClasses['submit-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['filter-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['like-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['delete-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['notes-wall']} */ ;
/** @type {__VLS_StyleScopedClasses['notes-grid']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['note-content']} */ ;
/** @type {__VLS_StyleScopedClasses['note-footer']} */ ;
/** @type {__VLS_StyleScopedClasses['submit-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
/** @type {__VLS_StyleScopedClasses['note']} */ ;
var __VLS_dollars;
let __VLS_self;
//# sourceMappingURL=NotesView.vue.js.map