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
        )
        .color-selector
          .color-option(
            v-for="(label, color) in colorMap"
            :key="color"
            :class="{ active: newNote.color === color }"
            :style="{ backgroundColor: color }"
            @click="newNote.color = color"
          )
            span.tooltip {{ label }}
        button.submit-btn(@click="addNote") 新增便利貼

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
            span.user {{ note.user || '匿名' }}
            span.timestamp {{ formatDate(note.timestamp) }}
          .note-actions
            button.like-btn(@click="toggleLike(note)")
              span.like-icon ❤️
              span.like-count {{ note.likes }}
  </template>

  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { database } from '@/firebase'
  import { ref as dbRef, push, update, onValue } from 'firebase/database'

  const colorMap = {
    '#ffd700': '我要解決的問題',
    '#ff69b4': '我想要嘗試的專案',
    '#4169e1': '我需要的資源或協助',
    '#98fb98': '我希望的學習環境或文化',
    '#dda0dd': '我願意貢獻的能力'
  }

  const notes = ref<any[]>([])
  const selectedFilter = ref<string | null>(null)
  const newNote = ref({
    content: '',
    color: '#ffd700',
    user: '匿名'
  })

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

  // 新增筆記
  const addNote = async () => {
    if (!newNote.value.content.trim()) return

    const notesRef = dbRef(database, 'notes')
    await push(notesRef, {
      content: newNote.value.content,
      color: newNote.value.color,
      timestamp: new Date().toISOString(),
      likes: 0,
      user: newNote.value.user
    })

    newNote.value.content = ''
  }

  // 切換讚數
  const toggleLike = async (note: any) => {
    const noteRef = dbRef(database, `notes/${note.id}`)
    await update(noteRef, {
      likes: (note.likes || 0) + 1
    })
  }

  // 拖曳功能
  const dragStart = (event: DragEvent, note: any) => {
    if (event.dataTransfer) {
      event.dataTransfer.setData('noteId', note.id)
    }
  }

  const dragEnd = (event: DragEvent) => {
    event.preventDefault()
  }

  const drop = async (event: DragEvent, targetNote: any) => {
    event.preventDefault()
    if (!event.dataTransfer) return

    const sourceId = event.dataTransfer.getData('noteId')
    const targetId = targetNote.id

    // 在這裡實現位置交換的邏輯
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

  // 監聽 Firebase 資料變化
  onMounted(() => {
    const notesRef = dbRef(database, 'notes')
    onValue(notesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        notes.value = Object.entries(data).map(([id, note]: [string, any]) => ({
          id,
          ...note
        }))
      }
    })
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 1rem;
  }

  .note {
    background: white;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    cursor: move;
    transition: all 0.2s;
  }

  .note:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  .note-content {
    margin-bottom: 1rem;
    white-space: pre-wrap;
  }

  .note-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    color: #64748b;
  }

  .note-info {
    display: flex;
    gap: 0.5rem;
  }

  .like-btn {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    transition: all 0.2s;
  }

  .like-btn:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (max-width: 640px) {
    .notes-view {
      padding: 1rem;
    }

    .title {
      font-size: 2rem;
    }

    .notes-wall {
      grid-template-columns: 1fr;
    }
  }
  </style>