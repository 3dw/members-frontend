<template lang="pug">
.notes-view
  .header
    h1.title 數位便利貼牆
    p.subtitle 分享你的想法、需求與專案

  .input-section
    .note-input
      textarea(
        v-model="newNote.content"
        placeholder="分享你的想法..."
        rows="3"
        :disabled="isLoading"
      )
      .error-message(v-if="errorMessage") {{ errorMessage }}
      .color-selector
        .color-option(
          v-for="(label, color) in colorMap"
          :key="color"
          :class="{ active: newNote.color === color }"
          :style="{ backgroundColor: color }"
          @click="newNote.color = color"
        )
          span.tooltip {{ label }}
      button.submit-btn(
        @click="addNote"
        :disabled="isLoading"
      )
        span(v-if="!isLoading") 新增便利貼
        span(v-else) 新增中...

  .filter-section
    button.filter-btn(
      v-for="(label, color) in colorMap"
      :key="color"
      :class="{ active: selectedFilter === color }"
      :style="{ backgroundColor: color }"
      @click="filterNotes(color)"
    ) {{ label }}
    button.filter-btn.all(@click="filterNotes(null)") 全部

  .notes-wall
    TransitionGroup(
      name="note-list"
      tag="div"
      class="notes-grid"
    )
      .note(
        v-for="note in filteredNotes"
        :key="note.id"
        :style="{ backgroundColor: note.color }"
        draggable="true"
        @dragstart="dragStart($event, note)"
        @dragend="dragEnd($event)"
        @dragover.prevent
        @drop="drop($event, note)"
      )
        .note-content {{ note.content }}
        .note-footer
          .note-info
            span.user {{ note.user }}
            span.timestamp {{ formatDate(note.timestamp) }}
          .note-actions
            button.like-btn(@click="toggleLike(note)")
              span.like-icon ❤️
              span.like-count {{ note.likes }}

        button.delete-btn(title="刪除" @click="deleteNote(note)")
          span.delete-icon 🗑️

  .error-message(v-if="errorMessage") {{ errorMessage }}
</template>

<script lang="ts">
import { ref, computed, onMounted, defineComponent } from 'vue'
import { database } from '@/firebase'
import { ref as dbRef, push, update, onValue, remove } from 'firebase/database'

// 定義便利貼介面
interface Note {
  id: string
  content: string
  color: string
  timestamp: string
  likes: number
  user: string
}


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
    }

    const notes = ref<Note[]>([])
    const selectedFilter = ref<string | null>(null)
    const newNote = ref({
      content: '',
      color: '#ffd700',
      user: '匿名'
    })

    // 新增錯誤提示
    const errorMessage = ref('')
    const isLoading = ref(false)

    // 過濾筆記
    const filteredNotes = computed(() => {
      if (!selectedFilter.value) return notes.value
      return notes.value.filter(note => note.color === selectedFilter.value)
    })

    // 格式化日期
    const formatDate = (timestamp: string) => {
      return new Date(timestamp).toLocaleDateString('zh-TW', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }

    // 修改新增筆記函數
    const addNote = async () => {
      try {
        // 驗證內容
        if (!newNote.value.content.trim()) {
          errorMessage.value = '請輸入內容'
          return
        }

        isLoading.value = true

        // 準備要新增的資料
        const noteData = {
          content: newNote.value.content.trim(),
          color: newNote.value.color,
          timestamp: new Date().toISOString(),
          likes: 0,
          user: props.users[props.uid].name || '匿名'
        }

        // 新增到 Firebase
        const notesRef = dbRef(database, 'notes')
        const newNoteRef = await push(notesRef)

        // 更新資料
        await update(newNoteRef, {
          id: newNoteRef.key,
          ...noteData
        })

        // 清空輸入
        newNote.value.content = ''
        errorMessage.value = ''

        console.log('便利貼新增成功！')

      } catch (error) {
        console.error('新增便利貼失敗：', error)
        errorMessage.value = '新增失敗，請稍後再試'
      } finally {
        isLoading.value = false
      }
    }

    // 切換讚數
    const toggleLike = async (note: Note) => {
      const noteRef = dbRef(database, `notes/${note.id}`)
      await update(noteRef, {
        likes: (note.likes || 0) + 1
      })
    }

    // 拖曳功能
    const dragStart = (event: DragEvent, note: Note) => {
      if (event.dataTransfer) {
        event.dataTransfer.setData('noteId', note.id)
      }
    }

    const dragEnd = (event: DragEvent) => {
      event.preventDefault()
    }

    const drop = async (event: DragEvent, targetNote: Note) => {
      event.preventDefault()
      if (!event.dataTransfer) return

      const sourceId = event.dataTransfer.getData('noteId')
      const targetId = targetNote.id

      const sourceIndex = notes.value.findIndex(n => n.id === sourceId)
      const targetIndex = notes.value.findIndex(n => n.id === targetId)

      if (sourceIndex > -1 && targetIndex > -1) {
        const temp = notes.value[sourceIndex]
        notes.value[sourceIndex] = notes.value[targetIndex]
        notes.value[targetIndex] = temp
      }
    }

    // 過濾筆記
    const filterNotes = (color: string | null) => {
      selectedFilter.value = color
    }

    // 刪除便利貼
    const deleteNote = async (note: Note) => {
      try {
        if (!confirm('確定要刪除這張便利貼嗎？')) {
          return
        }

        const noteRef = dbRef(database, `notes/${note.id}`)
        await remove(noteRef)
        console.log('便利貼刪除成功！')
      } catch (error) {
        console.error('刪除便利貼失敗：', error)
        errorMessage.value = '刪除失敗，請稍後再試'
      }
    }

    // 監聽 Firebase 資料變化
    onMounted(() => {
      const notesRef = dbRef(database, 'notes')
      onValue(notesRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
          notes.value = Object.entries(data).map(([id, noteData]: [string, any]) => ({
            id,
            content: noteData.content || '',
            color: noteData.color || '#ffd700',
            timestamp: noteData.timestamp || new Date().toISOString(),
            likes: noteData.likes || 0,
            user: noteData.user || '匿名'
          }))

          // 依時間排序，最新的在前面
          notes.value.sort((a, b) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
          )
        } else {
          notes.value = []
        }
      })
    })

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
    }
  }
})
</script>

<style scoped>
.notes-view {
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #f6f8ff 0%, #f0f4ff 100%);
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2563eb, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: #64748b;
  margin-top: 0.5rem;
}

.input-section {
  max-width: 800px;
  margin: 0 auto 2rem;
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.note-input textarea {
  width: 100%;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  resize: vertical;
  margin-bottom: 1rem;
}

.color-selector {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.color-option {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  border: 2px solid transparent;
  transition: all 0.2s;
}

.color-option:hover .tooltip {
  display: block;
}

.color-option.active {
  border-color: #2563eb;
  transform: scale(1.1);
}

.tooltip {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 0.5rem;
  background: #1e293b;
  color: white;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  white-space: nowrap;
  z-index: 10;
}

.submit-btn {
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
}

.submit-btn:hover {
  background: #1d4ed8;
}

.filter-section {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 2rem;
  color: white;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.filter-btn:hover {
  transform: translateY(-2px);
}

.filter-btn.all {
  background: #64748b;
}

.notes-wall {
  padding: 2rem;
  min-height: 50vh;
}

.notes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  align-items: start;
  padding: 1rem;
}

.note {
  aspect-ratio: 1;
  background: white;
  padding: 1.2rem;
  border-radius: 2px;
  box-shadow:
    2px 2px 5px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  cursor: move;
  position: relative;
  overflow: hidden;
  transform-origin: center;
  min-height: 200px;
}

.note::before {
  display: none;
}

.note::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20px;
  height: 20px;
  background: linear-gradient(
    135deg,
    transparent 50%,
    rgba(0, 0, 0, 0.03) 50%
  );
}

.note:hover {
  transform: scale(1.02) rotate(1deg);
  box-shadow:
    3px 3px 8px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

.note-content {
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: "Helvetica Neue", sans-serif;
}

.note-footer {
  position: absolute;
  bottom: 1rem;
  left: 1.2rem;
  right: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.5);
}

.note-info {
  display: flex;
  gap: 1rem;
  color: #ffffff;
}

.like-btn {
  padding: 0.25rem 0.5rem;
  border: none;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.75rem;
}

.like-btn:hover {
  background: rgba(0, 0, 0, 0.1);
}

.delete-btn {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  background: rgba(255, 0, 0, 0.5);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.delete-btn:hover {
  background: rgba(255, 0, 0, 0.1);
}

/* 添加動畫效果 */
.note-list-enter-active,
.note-list-leave-active {
  transition: all 0.5s ease;
}

.note-list-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.note-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* 響應式設計 */
@media (max-width: 640px) {
  .notes-wall {
    padding: 1rem;
  }

  .notes-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1rem;
  }

  .note {
    min-height: 150px;
    padding: 1rem;
  }

  .note-content {
    font-size: 0.875rem;
  }

  .note-footer {
    bottom: 0.75rem;
    left: 1rem;
    right: 1rem;
  }
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

textarea:disabled {
  background-color: #f3f4f6;
  cursor: not-allowed;
}

.note[style*="background-color: #ffd700"] { background-color: #fff740 !important; }
.note[style*="background-color: #ff69b4"] { background-color: #ff7eb9 !important; }
.note[style*="background-color: #4169e1"] { background-color: #7afcff !important; }
.note[style*="background-color: #98fb98"] { background-color: #98ff98 !important; }
.note[style*="background-color: #dda0dd"] { background-color: #e980fc !important; }
</style>