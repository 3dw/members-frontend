<template lang="pug">
  .connection-view
    .header
      h1.title 接力顯示板
      p.subtitle 即時顯示成員已認證狀態
    .circle-container
      .seat(
        v-for="n in totalSeats"
        :key="n"
        :class="{ 'occupied': getSeatUser(n) }"
        :style="getPosition(n)"
      )
        .seat-number {{ n }}
        .user-info(v-if="getSeatUser(n)" @click="showProfile(getSeatUser(n))")
          img.user-avatar(v-if="getSeatUser(n).photoURL" :src="getSeatUser(n).photoURL")
          .user-name {{ getSeatUser(n).name || '訪客' }}
    .stats
      .stat-item
        .stat-number {{ totalSeats }}
        .stat-label 會員總數
        .stat-accent
      .stat-item
        .stat-number {{ Object.keys(users).length }}
        .stat-label 認證成員
        .stat-accent

    //- 添加 Profile 彈窗
    .profile-modal(v-if="selectedUser" @click.self="closeProfile")
      .profile-content
        .profile-header
          img.profile-avatar(v-if="selectedUser.photoURL" :src="selectedUser.photoURL")
          .profile-close(@click="closeProfile") ×
        .profile-info
          h3.profile-name {{ selectedUser.name || '訪客' }}
          .profile-detail(v-if="selectedUser.email")
            .detail-label Email
            .detail-value {{ selectedUser.email }}
          .profile-detail(v-if="selectedUser.organization")
            .detail-label 組織
            .detail-value {{ selectedUser.organization }}
          .profile-detail(v-if="selectedUser.role")
            .detail-label 角色
            .detail-value {{ selectedUser.role }}
          .profile-detail
            .detail-label 加入時間
            .detail-value {{ formatDate(selectedUser.createdAt) }}
  </template>

  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { onValue, ref as dbRef } from 'firebase/database'
  import { database } from '@/firebase'
  import axios from 'axios'

  // 使用者資料
  const users = ref<Record<string, any>>({})
  // 新增: 座位總數的響應式變數
  const totalSeats = ref(50) // 預設值為 50

  // 新增: 獲取座位總數的函數
  const fetchTotalSeats = async () => {
    try {
      const response = await axios.get('https://members-backend.alearn13994229.workers.dev/count_members')
      console.log('API response:', response.data)
      totalSeats.value = response.data.total  // 修改這裡：取得 total 屬性的值
      console.log('Total seats set to:', totalSeats.value)
    } catch (error) {
      console.error('Error fetching total seats:', error)
      // 發生錯誤時保持預設值 50
    }
  }

  // 計算圓形位置
  const getPosition = (index: number) => {
    // 使用 totalSeats.value 替換固定值
    const getRadius = () => {
      const width = window.innerWidth
      if (width > 1200) return 350
      if (width > 900) return 300
      if (width > 700) return 250
      if (width > 500) return 200
      if (width > 350) return 150
      return 130
    }

    const radius = getRadius()
    const angle = ((index - 1) * (360 / totalSeats.value)) * (Math.PI / 180)
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return {
      transform: `translate(${x}px, ${y}px)`
    }
  }

  // 從 Firebase 讀取使用者資料
  const usersRef = dbRef(database, 'users')
  let unsubscribe: (() => void) | null = null

  onMounted(async () => {
    // 先獲取座位總數
    await fetchTotalSeats()

    // 原有的 Firebase 監聽邏輯
    unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        users.value = data
        console.log('Users data updated:', data)
      }
    }, (error) => {
      console.error('Error fetching users:', error)
    })
  })

  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe()
    }
  })

  // 取得座位上的使用者
  const getSeatUser = (seatNumber: number) => {
    if (!users.value) return null
    const usersList = Object.values(users.value)
    return usersList[seatNumber - 1] || null
  }

  // 新增: 選中的用戶資料
  const selectedUser = ref<any>(null)

  // 新增: 顯示 profile 的函數
  const showProfile = (user: any) => {
    selectedUser.value = user
  }

  // 新增: 關閉 profile 的函數
  const closeProfile = () => {
    selectedUser.value = null
  }

  // 新增: 格式化日期的函數
  const formatDate = (timestamp: number) => {
    if (!timestamp) return '未知'
    return new Date(timestamp).toLocaleDateString('zh-TW', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  </script>

  <style scoped>
  .connection-view {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(to bottom, #f0f9ff, #e0f2fe);
    color: #1c1c1c;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
  }

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 12px;
    background: linear-gradient(45deg, #0066ff, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: -0.5px;
  }

  .subtitle {
    font-size: 1.1rem;
    color: #475569;
    max-width: 600px;
    margin: 0 auto;
  }

  .circle-container {
    position: relative;
    width: 800px;
    height: 800px;
    margin: 50px auto;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-radius: 50%;
    box-shadow:
      0 4px 20px rgba(0, 0, 0, 0.05),
      inset 0 2px 10px rgba(255, 255, 255, 0.5);
    padding: 20px;
  }

  .seat {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 70px;
    height: 70px;
    margin: -35px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border: 2px solid #e2e8f0;
    z-index: 1;
    backdrop-filter: blur(5px);
  }

  .seat.occupied {
    background: white;
    border-color: #3b82f6;
    box-shadow:
      0 4px 12px rgba(59, 130, 246, 0.15),
      inset 0 2px 4px rgba(59, 130, 246, 0.1);
    z-index: 2;
  }

  .seat-number {
    position: absolute;
    top: -24px;
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.8);
  }

  .user-info {
    text-align: center;
    width: 100%;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .user-info:hover {
    transform: scale(1.1);
  }

  .user-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-bottom: 6px;
    object-fit: cover;
    border: 2px solid white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .user-name {
    font-size: 0.75rem;
    color: #1e293b;
    font-weight: 500;
    word-break: break-word;
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
  }

  .seat:hover {
    transform: scale(1.15) translateZ(0);
    z-index: 3;
  }

  .seat.occupied:hover {
    box-shadow:
      0 8px 24px rgba(59, 130, 246, 0.2),
      inset 0 2px 4px rgba(59, 130, 246, 0.1);
  }

  .circle-container::before {
    content: '';
    position: absolute;
    left: 5%;
    top: 5%;
    width: 90%;
    height: 90%;
    border: 2px dashed rgba(59, 130, 246, 0.2);
    border-radius: 50%;
    z-index: 0;
    animation: rotate 60s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .stats {
    margin-top: 40px;
    display: flex;
    gap: 40px;
    justify-content: center;
  }

  .stat-item {
    text-align: center;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    box-shadow:
      0 2px 8px rgba(0, 0, 0, 0.05),
      inset 0 1px 2px rgba(255, 255, 255, 0.5);
  }

  .stat-number {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(45deg, #0066ff, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 4px;
  }

  .stat-label {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }

  .stat-accent {
    font-size: 0.875rem;
    color: #64748b;
    font-weight: 500;
  }

  /* 響應式設計 */
  @media (max-width: 1200px) {
    .circle-container {
      width: 700px;
      height: 700px;
    }

    .seat {
      width: 65px;
      height: 65px;
      margin: -32.5px;
    }
  }

  @media (max-width: 900px) {
    .circle-container {
      width: 600px;
      height: 600px;
    }

    .seat {
      width: 55px;
      height: 55px;
      margin: -27.5px;
    }

    .user-avatar {
      width: 32px;
      height: 32px;
    }

    .title {
      font-size: 2.2rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  @media (max-width: 700px) {
    .circle-container {
      width: 450px;
      height: 450px;
    }

    .seat {
      width: 45px;
      height: 45px;
      margin: -22.5px;
    }

    .user-avatar {
      width: 28px;
      height: 28px;
    }

    .user-name {
      font-size: 0.7rem;
    }

    .seat-number {
      top: -20px;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 500px) {
    .connection-view {
      padding: 20px 10px;
    }

    .circle-container {
      width: 320px;
      height: 320px;
      margin: 30px auto;
    }

    .seat {
      width: 35px;
      height: 35px;
      margin: -17.5px;
    }

    .user-avatar {
      width: 24px;
      height: 24px;
      margin-bottom: 3px;
    }

    .user-name {
      font-size: 0.65rem;
    }

    .seat-number {
      top: -16px;
      font-size: 0.7rem;
    }

    .title {
      font-size: 1.8rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .stat-item {
      padding: 15px 25px;
    }

    .stat-number {
      font-size: 1.5rem;
    }

    .stat-label {
      font-size: 0.75rem;
    }
  }

  /* 添加橫向模式支援 */
  @media (max-height: 700px) and (orientation: landscape) {
    .circle-container {
      width: 400px;
      height: 400px;
      margin: 20px auto;
    }

    .seat {
      width: 40px;
      height: 40px;
      margin: -20px;
    }

    .header {
      margin-bottom: 30px;
    }

    .title {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }

    .stats {
      margin-top: 20px;
    }
  }

  /* 確保最小尺寸 */
  @media (max-width: 350px) {
    .circle-container {
      width: 280px;
      height: 280px;
    }

    .seat {
      width: 30px;
      height: 30px;
      margin: -15px;
    }
  }

  /* Profile 彈窗樣式 */
  .profile-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .profile-content {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    padding: 30px;
    width: 90%;
    max-width: 400px;
    position: relative;
    box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.2),
      inset 0 1px 2px rgba(255, 255, 255, 0.5);
  }

  .profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .profile-close {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 24px;
    color: #64748b;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .profile-close:hover {
    background: #64748b;
    color: white;
  }

  .profile-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #1e293b;
    margin-bottom: 20px;
  }

  .profile-detail {
    display: flex;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(100, 116, 139, 0.1);
  }

  .detail-label {
    width: 100px;
    color: #64748b;
    font-weight: 500;
    font-size: 0.9rem;
  }

  .detail-value {
    flex: 1;
    color: #1e293b;
    font-weight: 500;
  }

  /* RWD 適配 */
  @media (max-width: 640px) {
    .profile-content {
      width: 95%;
      padding: 20px;
    }

    .profile-avatar {
      width: 60px;
      height: 60px;
    }

    .profile-name {
      font-size: 1.2rem;
    }

    .detail-label {
      width: 80px;
      font-size: 0.8rem;
    }

    .detail-value {
      font-size: 0.8rem;
    }
  }
  </style>