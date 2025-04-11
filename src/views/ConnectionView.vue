<template lang="pug">
  .connection-view
    h2.title 接電顯示板
    .circle-container
      .seat(
        v-for="n in 40"
        :key="n"
        :class="{ 'occupied': getSeatUser(n) }"
        :style="getPosition(n)"
      )
        .seat-number {{ n }}
        .user-info(v-if="getSeatUser(n)")
          img.user-avatar(v-if="getSeatUser(n).photoURL" :src="getSeatUser(n).photoURL")
          .user-name {{ getSeatUser(n).name || '訪客' }}
  </template>

  <script setup lang="ts">
  import { ref, onMounted, onUnmounted, computed } from 'vue'
  import { onValue, ref as dbRef } from 'firebase/database'
  import { database } from '@/firebase'

  // 使用者資料
  const users = ref<Record<string, any>>({})

  // 計算圓形位置
  const getPosition = (index: number) => {
    const totalSeats = 40
    const radius = 300 // 圓的半徑
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
    unsubscribe = onValue(usersRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        users.value = data
      }
    })
  })

  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe()
    }
  })

  // 取得座位上的使用者
  const getSeatUser = (seatNumber: number) => {
    const usersList = Object.values(users.value)
    return usersList[seatNumber - 1] || null
  }
  </script>

  <style scoped>
  .connection-view {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  .title {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
  }

  .circle-container {
    position: relative;
    width: 700px;
    height: 700px;
    margin: 50px auto;
  }

  .seat {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 60px;
    height: 60px;
    margin: -30px;
    border-radius: 50%;
    background: #f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    border: 2px solid #ddd;
    z-index: 1;
  }

  .seat.occupied {
    background: #e3f2fd;
    border-color: #2196f3;
    box-shadow: 0 2px 8px rgba(33, 150, 243, 0.2);
    z-index: 2;
  }

  .seat-number {
    position: absolute;
    top: -20px;
    font-size: 12px;
    color: #666;
  }

  .user-info {
    text-align: center;
    width: 100%;
  }

  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-bottom: 4px;
    object-fit: cover;
  }

  .user-name {
    font-size: 12px;
    color: #333;
    word-break: break-word;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  /* 懸停效果 */
  .seat:hover {
    transform: scale(1.1);
    z-index: 3;
  }

  .seat.occupied:hover {
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
  }

  /* 添加圓形背景 */
  .circle-container::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border: 2px dashed #ddd;
    border-radius: 50%;
    z-index: 0;
  }
  </style>