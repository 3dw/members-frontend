<template lang="pug">
  .connection-view
    .header
      h1.title 接力顯示板
      p.subtitle 即時顯示成員已認證狀態
    .circle-container
      .seat(
        v-for="n in 50"
        :key="n"
        :class="{ 'occupied': getSeatUser(n) }"
        :style="getPosition(n)"
      )
        .seat-number {{ n }}
        .user-info(v-if="getSeatUser(n)")
          img.user-avatar(v-if="getSeatUser(n).photoURL" :src="getSeatUser(n).photoURL")
          .user-name {{ getSeatUser(n).name || '訪客' }}
    .stats
      .stat-item
        .stat-number {{ Object.keys(users).length }}
        .stat-label 認證成員
  </template>

  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { onValue, ref as dbRef } from 'firebase/database'
  import { database } from '@/firebase'

  // 使用者資料
  const users = ref<Record<string, any>>({})

  // 計算圓形位置
  const getPosition = (index: number) => {
    const totalSeats = 50
    // 根據螢幕寬度動態調整半徑
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
    const angle = ((index - 1) * (360 / totalSeats)) * (Math.PI / 180)
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    return {
      transform: `translate(${x}px, ${y}px)`
    }
  }

  // 從 Firebase 讀取使用者資料
  const usersRef = dbRef(database, 'users')
  let unsubscribe: (() => void) | null = null

  onMounted(() => {
    // 監聽 Firebase users 資料變化
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
  </style>