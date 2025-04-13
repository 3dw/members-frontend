<template lang="pug">
  .trouble-tree-view
    canvas.tree-canvas(ref="treeCanvas")

    .header
      h1.title 煩惱樹洞
      p.subtitle 向大自然樹洞傾訴，接收溫暖的回應

    .input-section
      .trouble-input
        .tree-hole-input
          h3.input-title 向樹洞傾訴你的煩惱...
          textarea(
            v-model="newTrouble.content"
            placeholder="點擊這裡，開始向樹洞傾訴..."
            rows="4"
            :disabled="isLoading"
          )
        .error-message(v-if="errorMessage") {{ errorMessage }}
        .category-selector
          .category-option(
            v-for="(label, category) in categoryMap"
            :key="category"
            :class="{ active: newTrouble.category === category }"
            :style="{ backgroundColor: getCategoryColor(category) }"
            @click="newTrouble.category = category"
          )
            span.category-tooltip {{ label }}
        button.submit-btn(
          @click="addTrouble"
          :disabled="isLoading || !newTrouble.content.trim()"
        )
          span(v-if="!isLoading") 傾訴給樹洞
          span(v-else)
            .loading-spinner
            | 送出中...

    .filter-section
      button.filter-btn(
        v-for="(label, category) in categoryMap"
        :key="category"
        :class="{ active: selectedFilter === category }"
        :style="{ backgroundColor: getCategoryColor(category) }"
        @click="filterTroubles(category)"
      ) {{ label }}
      button.filter-btn.all(:class="{ active: selectedFilter === null }" @click="filterTroubles(null)") 全部

    .troubles-container(v-if="!selectedTroubleId")
      TransitionGroup(
        name="trouble-list"
        tag="div"
        class="troubles-grid"
      )
        .trouble-leaf(
          v-for="trouble in filteredTroubles"
          :key="trouble.id"
          :class="{ 'has-replies': trouble.replyCount > 0 }"
          @click="viewTroubleDetails(trouble)"
        )
          .leaf-shape
          .trouble-content {{ trouble.content }}
          .trouble-category-tag(:style="{ backgroundColor: getCategoryColor(trouble.category) }") {{ categoryMap[trouble.category] }}
          .trouble-footer
            .trouble-info
              span.trouble-timestamp {{ formatDate(trouble.timestamp) }}
            .trouble-stats
              .trouble-replies
                span.reply-icon 🍃
                span.reply-count {{ trouble.replyCount || 0 }}
              .trouble-empathies
                span.empathy-icon 🌱
                span.empathy-count {{ trouble.empathies || 0 }}

    .trouble-detail(v-else)
      button.back-btn(@click="backToList") ← 返回煩惱樹洞

      .trouble-main
        .trouble-category-tag(:style="{ backgroundColor: selectedTrouble ? getCategoryColor(selectedTrouble.category) : 'transparent' }") {{ selectedTrouble ? categoryMap[selectedTrouble.category] : '' }}
        .trouble-content {{ selectedTrouble ? selectedTrouble.content : '' }}
        .trouble-footer
          .trouble-info
            span.trouble-timestamp {{ selectedTrouble ? formatDate(selectedTrouble.timestamp) : '' }}
          .trouble-actions
            button.empathy-btn(@click="toggleEmpathy(selectedTrouble)")
              span.empathy-icon 🌱
              span.empathy-label 感同身受
              span.empathy-count {{ selectedTrouble ? selectedTrouble.empathies || 0 : 0 }}

      .trouble-replies
        h3.replies-title 樹洞回應 ({{ replies.length }})

        .reply-form
          textarea(
            v-model="newReply.content"
            placeholder="在此回應這個煩惱..."
            rows="3"
            :disabled="isLoading"
          )
          .error-message(v-if="replyError") {{ replyError }}
          button.reply-btn(
            @click="addReply"
            :disabled="isLoading || !newReply.content.trim()"
          )
            span(v-if="!isLoading") 送出回應
            span(v-else)
              .loading-spinner
              | 送出中...

        .replies-list
          .reply-card(v-for="reply in replies" :key="reply.id")
            .reply-content {{ reply.content }}
            .reply-footer
              .reply-timestamp {{ formatDate(reply.timestamp) }}
              .reply-helpful
                button.helpful-btn(@click="toggleHelpful(reply)")
                  span.helpful-icon 🙏
                  span.helpful-label 有幫助
                  span.helpful-count {{ reply.helpful || 0 }}
  </template>

  <script lang="ts">
  import { ref, computed, onMounted, onUnmounted, defineComponent, nextTick } from 'vue'
  import { database } from '@/firebase'
  import { ref as dbRef, push, set, update, onValue, get } from 'firebase/database'

  // 定義煩惱介面
  interface Trouble {
    id: string
    content: string
    category: string
    timestamp: string
    empathies: number
    replyCount: number
  }

  // 定義回覆介面
  interface Reply {
    id: string
    troubleId: string
    content: string
    timestamp: string
    helpful: number
  }

  export default defineComponent({
    name: 'TroubleTreeView',
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
      // 定義樹洞分類
      const categoryMap = {
        'personal': '個人成長',
        'relationship': '人際關係',
        'career': '工作職涯',
        'family': '家庭困擾',
        'health': '身心健康'
      }

      // 定義分類顏色
      const getCategoryColor = (category: string) => {
        const colorMap: Record<string, string> = {
          'personal': '#2e7d32',
          'relationship': '#1b5e20',
          'career': '#388e3c',
          'family': '#43a047',
          'health': '#4caf50'
        }
        return colorMap[category] || '#2e7d32'
      }

      const troubles = ref<Trouble[]>([])
      const replies = ref<Reply[]>([])
      const selectedFilter = ref<string | null>(null)
      const selectedTroubleId = ref<string | null>(null)
      const selectedTrouble = computed(() => {
        return troubles.value.find(trouble => trouble.id === selectedTroubleId.value)
      })

      const newTrouble = ref({
        content: '',
        category: 'personal'
      })

      const newReply = ref({
        content: '',
        troubleId: ''
      })

      // 錯誤提示
      const errorMessage = ref('')
      const replyError = ref('')
      const isLoading = ref(false)

      // Tree Canvas
      const treeCanvas = ref<HTMLCanvasElement | null>(null)

      // 過濾煩惱
      const filteredTroubles = computed(() => {
        if (!selectedFilter.value) return troubles.value
        return troubles.value.filter(trouble => trouble.category === selectedFilter.value)
      })

      // 格式化日期
      const formatDate = (timestamp: string) => {
        const date = new Date(timestamp)
        const now = new Date()
        const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))

        if (diffDays === 0) {
          return '今天 ' + date.toLocaleTimeString('zh-TW', {
            hour: '2-digit',
            minute: '2-digit'
          })
        } else if (diffDays === 1) {
          return '昨天 ' + date.toLocaleTimeString('zh-TW', {
            hour: '2-digit',
            minute: '2-digit'
          })
        } else if (diffDays < 7) {
          return `${diffDays}天前`
        } else {
          return date.toLocaleDateString('zh-TW', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        }
      }

      // 繪製大樹和樹洞
      const drawTree = () => {
        if (!treeCanvas.value) return

        const canvas = treeCanvas.value
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // 設置 canvas 尺寸
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        // 背景
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
        gradient.addColorStop(0, '#e8f5e9')
        gradient.addColorStop(1, '#c8e6c9')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // 畫樹幹
        const trunkWidth = Math.min(canvas.width * 0.18, 180)
        const trunkHeight = canvas.height * 0.65
        const trunkX = canvas.width - trunkWidth - 20
        const trunkY = canvas.height - trunkHeight - 20

        // 樹幹漸變
        const trunkGradient = ctx.createLinearGradient(trunkX, trunkY, trunkX + trunkWidth, trunkY)
        trunkGradient.addColorStop(0, '#5D4037')
        trunkGradient.addColorStop(0.6, '#795548')
        trunkGradient.addColorStop(1, '#6D4C41')

        ctx.fillStyle = trunkGradient
        ctx.beginPath()
        ctx.moveTo(trunkX, trunkY + trunkHeight)
        ctx.lineTo(trunkX + trunkWidth * 0.8, trunkY + trunkHeight)
        ctx.lineTo(trunkX + trunkWidth, trunkY + trunkHeight * 0.9)
        ctx.lineTo(trunkX + trunkWidth, trunkY + trunkHeight * 0.3)
        ctx.lineTo(trunkX + trunkWidth * 0.7, trunkY)
        ctx.lineTo(trunkX + trunkWidth * 0.3, trunkY)
        ctx.lineTo(trunkX, trunkY + trunkHeight * 0.3)
        ctx.closePath()
        ctx.fill()

        // 畫樹洞
        const holeWidth = trunkWidth * 0.6
        const holeHeight = trunkHeight * 0.4
        const holeX = trunkX + (trunkWidth - holeWidth) / 2
        const holeY = trunkY + trunkHeight * 0.45

        // 樹洞外圍
        ctx.fillStyle = '#3E2723'
        ctx.beginPath()
        ctx.ellipse(
          holeX + holeWidth / 2,
          holeY + holeHeight / 2,
          holeWidth / 2,
          holeHeight / 2,
          0,
          0,
          Math.PI * 2
        )
        ctx.fill()

        // 樹洞內部
        ctx.fillStyle = '#1a1a1a'
        ctx.beginPath()
        ctx.ellipse(
          holeX + holeWidth / 2,
          holeY + holeHeight / 2,
          holeWidth / 2 * 0.8,
          holeHeight / 2 * 0.8,
          0,
          0,
          Math.PI * 2
        )
        ctx.fill()

        // 畫樹葉
        const drawLeaves = (x: number, y: number, radius: number, color: string) => {
          ctx.fillStyle = color
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }

        // 樹冠
        const treeTopX = trunkX + trunkWidth / 2
        const treeTopY = trunkY * 0.7

        // 樹葉漸變
        const leafColors = ['#2E7D32', '#388E3C', '#43A047', '#4CAF50']

        // 隨機產生樹葉
        for (let i = 0; i < 100; i++) {
          const angle = Math.random() * Math.PI * 2
          const distance = Math.random() * trunkWidth * 2
          const x = treeTopX + Math.cos(angle) * distance
          const y = treeTopY + Math.sin(angle) * distance * 0.7
          const radius = Math.random() * 50 + 30
          const color = leafColors[Math.floor(Math.random() * leafColors.length)]
          drawLeaves(x, y, radius, color)
        }

        // 地面
        ctx.fillStyle = '#795548'
        ctx.beginPath()
        ctx.moveTo(0, canvas.height)
        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(canvas.width, canvas.height - 20)
        ctx.quadraticCurveTo(canvas.width * 0.75, canvas.height - 15, canvas.width * 0.5, canvas.height - 30)
        ctx.quadraticCurveTo(canvas.width * 0.25, canvas.height - 15, 0, canvas.height - 25)
        ctx.closePath()
        ctx.fill()

        // 畫一些草
        ctx.fillStyle = '#4CAF50'
        for (let i = 0; i < canvas.width; i += 15) {
          const height = Math.random() * 10 + 5
          ctx.beginPath()
          ctx.moveTo(i, canvas.height)
          ctx.lineTo(i, canvas.height - height)
          ctx.lineTo(i + 5, canvas.height - height - 5)
          ctx.lineTo(i + 10, canvas.height - height)
          ctx.lineTo(i + 10, canvas.height)
          ctx.closePath()
          ctx.fill()
        }
      }

      // 新增煩惱
      const addTrouble = async () => {
        try {
          // 驗證內容
          if (!newTrouble.value.content.trim()) {
            errorMessage.value = '請輸入煩惱內容'
            return
          }

          isLoading.value = true

          // 準備要新增的資料
          const troubleData = {
            content: newTrouble.value.content.trim(),
            category: newTrouble.value.category,
            timestamp: new Date().toISOString(),
            empathies: 0,
            replyCount: 0
          }

          // 新增到 Firebase
          const troublesRef = dbRef(database, 'troubles')
          const newTroubleRef = push(troublesRef)

          // 更新資料
          await set(newTroubleRef, {
            id: newTroubleRef.key,
            ...troubleData
          })

          // 清空輸入
          newTrouble.value.content = ''
          errorMessage.value = ''

          console.log('煩惱發布成功！')

        } catch (error) {
          console.error('發布煩惱失敗：', error)
          errorMessage.value = '發布失敗，請稍後再試'
        } finally {
          isLoading.value = false
        }
      }

      // 新增回覆
      const addReply = async () => {
        if (!selectedTroubleId.value) return

        try {
          // 驗證內容
          if (!newReply.value.content.trim()) {
            replyError.value = '請輸入回覆內容'
            return
          }

          isLoading.value = true

          // 準備要新增的資料
          const replyData = {
            troubleId: selectedTroubleId.value,
            content: newReply.value.content.trim(),
            timestamp: new Date().toISOString(),
            helpful: 0
          }

          // 新增到 Firebase
          const repliesRef = dbRef(database, 'replies')
          const newReplyRef = push(repliesRef)

          // 更新資料
          await set(newReplyRef, {
            id: newReplyRef.key,
            ...replyData
          })

          // 更新煩惱的回覆計數
          const troubleRef = dbRef(database, `troubles/${selectedTroubleId.value}`)
          const currentTrouble = selectedTrouble.value
          if (currentTrouble) {
            const replyCount = (currentTrouble.replyCount || 0) + 1
            await update(troubleRef, { replyCount })
          }

          // 清空輸入
          newReply.value.content = ''
          replyError.value = ''

          console.log('回覆發布成功！')

        } catch (error) {
          console.error('發布回覆失敗：', error)
          replyError.value = '回覆發布失敗，請稍後再試'
        } finally {
          isLoading.value = false
        }
      }

      // 切換同理心數
      const toggleEmpathy = async (trouble: Trouble) => {
        if (!trouble) return

        const troubleRef = dbRef(database, `troubles/${trouble.id}`)
        await update(troubleRef, {
          empathies: (trouble.empathies || 0) + 1
        })
      }

      // 切換有幫助數
      const toggleHelpful = async (reply: Reply) => {
        if (!reply) return

        const replyRef = dbRef(database, `replies/${reply.id}`)
        await update(replyRef, {
          helpful: (reply.helpful || 0) + 1
        })
      }

      // 過濾煩惱
      const filterTroubles = (category: string | null) => {
        selectedFilter.value = category
      }

      // 查看煩惱詳情
      const viewTroubleDetails = (trouble: Trouble) => {
        selectedTroubleId.value = trouble.id
        newReply.value.troubleId = trouble.id
        loadReplies(trouble.id)
      }

      // 返回煩惱列表
      const backToList = () => {
        selectedTroubleId.value = null
        replies.value = []
        newReply.value.content = ''
        newReply.value.troubleId = ''
      }

      // 加載特定煩惱的回覆
      const loadReplies = async (troubleId: string) => {
        const repliesRef = dbRef(database, 'replies')

        const unsubscribe = onValue(repliesRef, (snapshot) => {
          const data = snapshot.val()
          if (data) {
            replies.value = Object.values(data)
              .filter((reply: any) => reply.troubleId === troubleId)
              .sort((a: any, b: any) =>
                new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
              )
          } else {
            replies.value = []
          }
        })

        return unsubscribe
      }

      // 處理窗口大小改變，重新繪製樹
      const handleResize = () => {
        drawTree()
      }

      // 監聽 Firebase 資料變化
      let troublesUnsubscribe: Function | null = null

      onMounted(() => {
        // 設置 canvas 並繪製樹
        nextTick(() => {
          drawTree()
          window.addEventListener('resize', handleResize)
        })

        // 監聽煩惱資料變化
        const troublesRef = dbRef(database, 'troubles')
        troublesUnsubscribe = onValue(troublesRef, (snapshot) => {
          const data = snapshot.val()
          if (data) {
            troubles.value = Object.values(data)

            // 依時間排序，最新的在前面
            troubles.value.sort((a: any, b: any) =>
              new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
            )
          } else {
            troubles.value = []
          }
        })

        // 在 setup 中添加連接狀態檢查
        const connectedRef = dbRef(database, '.info/connected')
        onValue(connectedRef, (snap) => {
          if (snap.val() === true) {
            console.log('已連接到 Firebase')
          } else {
            console.log('未連接到 Firebase')
          }
        })
      })

      onUnmounted(() => {
        if (troublesUnsubscribe) {
          troublesUnsubscribe()
        }
        window.removeEventListener('resize', handleResize)
      })

      // 返回模板需要使用的值和函數
      return {
        treeCanvas,
        troubles,
        replies,
        selectedFilter,
        selectedTroubleId,
        selectedTrouble,
        newTrouble,
        newReply,
        errorMessage,
        replyError,
        isLoading,
        filteredTroubles,
        categoryMap,
        getCategoryColor,
        formatDate,
        addTrouble,
        addReply,
        toggleEmpathy,
        toggleHelpful,
        filterTroubles,
        viewTroubleDetails,
        backToList
      }
    }
  })
  </script>

  <style scoped>
  .trouble-tree-view {
    position: relative;
    min-height: 100vh;
    font-family: "Inter", "Noto Sans TC", -apple-system, sans-serif;
    overflow-x: hidden;
  }

  .tree-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .header {
    text-align: center;
    padding-top: 2.5rem;
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 1;
  }

  .title {
    font-size: 3rem;
    font-weight: 800;
    letter-spacing: -0.025em;
    color: #2e7d32;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 0.75rem;
  }

  .subtitle {
    color: #1b5e20;
    font-size: 1.25rem;
    font-weight: 500;
    max-width: 600px;
    margin: 0 auto;
  }

  .input-section {
    max-width: 720px;
    margin: 0 auto 3rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    position: relative;
    z-index: 1;
    border: 1px solid rgba(76, 175, 80, 0.3);
  }

  .tree-hole-input {
    background: rgba(255, 255, 255, 0.7);
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    border: 1px dashed #2e7d32;
  }

  .input-title {
    color: #2e7d32;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .trouble-input textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #b8dabb;
    border-radius: 0.75rem;
    resize: vertical;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.6;
    transition: all 0.2s;
    background: rgba(255, 255, 255, 0.8);
  }

  .trouble-input textarea:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.2);
  }

  .category-selector {
    display: flex;
    gap: 0.75rem;
    margin: 1rem 0 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .category-option {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    border: 2px solid transparent;
    transition: all 0.2s;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  }

  .category-option:hover .category-tooltip {
    display: block;
  }

  .category-option.active {
    border-color: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .category-tooltip {
    display: none;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem 0.75rem;
    background: #1f2937;
    color: white;
    border-radius: 0.375rem;
    font-size: 0.75rem;
    white-space: nowrap;
    z-index: 10;
    margin-bottom: 0.5rem;
  }

  .submit-btn {
    width: 100%;
    padding: 1rem;
    background: #2e7d32;
    color: white;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    font-weight: 600;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
  }

  .submit-btn:hover {
    background: #1b5e20;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(46, 125, 50, 0.4);
  }

  .submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  .loading-spinner {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    border-top-color: white;
    animation: spin 1s ease-in-out infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .filter-section {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .filter-btn {
    padding: 0.625rem 1.5rem;
    border: none;
    border-radius: 2rem;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 0.875rem;
    font-weight: 600;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  }

  .filter-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  .filter-btn.active {
    box-shadow: 0 0 0 2px white, 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .filter-btn.all {
    background: #66bb6a;
  }

  .troubles-container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 1.5rem 4rem;
    position: relative;
    z-index: 1;
  }

  .troubles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    align-items: start;
  }

  .trouble-leaf {
    position: relative;
    padding: 2rem 1.75rem 1.75rem;
    border-radius: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    background: #ffffff;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(76, 175, 80, 0.3);
  }

  .leaf-shape {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1rem;
    background-color: #4caf50;
    border-radius: 1rem 1rem 0 0;
  }

  .trouble-leaf:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  .trouble-leaf.has-replies::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 2rem 2rem 0;
    border-color: transparent #4caf50 transparent transparent;
  }

  .trouble-content {
    font-size: 1rem;
    line-height: 1.6;
    color: #1f2937;
    margin-bottom: 1.5rem;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .trouble-category-tag {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    border-radius: 1rem;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .trouble-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: #6b7280;
  }

  .trouble-stats {
    display: flex;
    gap: 1rem;
  }

  .trouble-replies,
  .trouble-empathies {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .reply-icon,
  .empathy-icon {
    font-size: 1.25rem;
  }

  .trouble-detail {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    position: relative;
    z-index: 1;
  }

  .back-btn {
    display: inline-flex;
    align-items: center;
    padding: 0.75rem 1.5rem;
    background: white;
    border: 1px solid #4caf50;
    border-radius: 0.5rem;
    color: #2e7d32;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    margin-bottom: 2rem;
  }

  .back-btn:hover {
    background: #f0fdf4;
    transform: translateX(-4px);
  }

  .trouble-main {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    border: 1px solid rgba(76, 175, 80, 0.3);
  }

  .trouble-actions {
    margin-top: 1.5rem;
    display: flex;
    justify-content: flex-end;
  }

  .empathy-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    background: #f0fdf4;
    border: 1px solid #4caf50;
    border-radius: 0.5rem;
    color: #2e7d32;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .empathy-btn:hover {
    background: #dcfce7;
    transform: translateY(-2px);
  }

  .replies-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2e7d32;
    margin-bottom: 1.5rem;
  }

  .reply-form {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(76, 175, 80, 0.3);
  }

  .reply-form textarea {
    width: 100%;
    padding: 1rem;
    border: 1px solid #b8dabb;
    border-radius: 0.5rem;
    resize: vertical;
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.6;
    transition: all 0.2s;
  }

  .reply-form textarea:focus {
    outline: none;
    border-color: #2e7d32;
    box-shadow: 0 0 0 3px rgba(46, 125, 50, 0.2);
  }

  .reply-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: #2e7d32;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .reply-btn:hover {
    background: #1b5e20;
    transform: translateY(-2px);
  }

  .reply-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  .replies-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .reply-card {
    background: white;
    padding: 1.5rem;
    border-radius: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(76, 175, 80, 0.2);
  }

  .reply-content {
    font-size: 1rem;
    line-height: 1.6;
    color: #1f2937;
    margin-bottom: 1rem;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .reply-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: #6b7280;
  }

  .helpful-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    padding: 0.5rem 0.75rem;
    background: #f0fdf4;
    border: 1px solid #4caf50;
    border-radius: 0.375rem;
    color: #2e7d32;
    font-size: 0.875rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  .helpful-btn:hover {
    background: #dcfce7;
    transform: translateY(-1px);
  }

  .error-message {
    color: #dc2626;
    font-size: 0.875rem;
    margin: 0.5rem 0;
  }

  .trouble-list-enter-active,
  .trouble-list-leave-active {
    transition: all 0.5s ease;
  }

  .trouble-list-enter-from {
    opacity: 0;
    transform: translateY(30px);
  }

  .trouble-list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2.5rem;
    }

    .subtitle {
      font-size: 1.125rem;
    }

    .input-section {
      margin: 0 1rem 2rem;
      padding: 1.5rem;
    }

    .troubles-grid {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 1.5rem;
      padding: 0 1rem;
    }

    .trouble-detail {
      padding: 1.5rem 1rem;
    }
  }

  @media (max-width: 480px) {
    .title {
      font-size: 2rem;
    }

    .subtitle {
      font-size: 1rem;
    }

    .category-selector {
      gap: 0.5rem;
    }

    .category-option {
      width: 2rem;
      height: 2rem;
    }

    .filter-btn {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    }
  }
  </style>