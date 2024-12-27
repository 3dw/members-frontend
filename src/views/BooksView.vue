<template lang="pug">
main.ui.container#books-container
  h2.ui.center.aligned.header 出版品推廣

  .ui.warning.message
    p 本會出版品只有在網站自行販售，並無在實體或一般網路書店鋪貨，
    p 如有建議、通路資源請聯繫
      a(href="mailto:alearn13994229@gmail.com") alearn13994229@gmail.com

  .ui.segment
    h3.ui.header 本會出版品
    .ui.items
      .item(v-for="book in books" :key="book.title")
        .image
          img(:src="book.coverImage" :alt="book.title")
        .content
          .header {{ book.title }}
          .meta
            span.price {{ book.price }}
          .extra(v-if="book.note") {{ book.note }}

  .ui.segment.two.column.stackable.grid
    .column.right-bordered
      h3.ui.header 購書方式
      h4.ui.header 郵資與處理費用：
      .ui.list
      .item 一~三本70元
      .item 四本以上免郵資（需購買本會出版品）
      .item ※海外購書郵資自付，可用paypal付款。

      h4.ui.header 匯款資料：
      .ui.list
        .item
          i.building.icon
          .content 銀行：台北富邦 士林分行（012）
        .item
          i.credit.card.icon
          .content 帳號：30012-0000601
        .item
          i.user.icon
          .content 戶名：社團法人中華民國自主學習促進會

    .column
      h4.ui.header 流程：
      p
        i.mail.icon
        | 請E-MAIL至
        a(href="mailto:alearn13994229@gmail.com") alearn13994229@gmail.com
        |  告知以下訊息：
        .ui.ordered.list
            .item.no-margin 已轉帳或即將轉帳
            .item.no-margin 書名
            .item.no-margin 本數
            .item.no-margin 總金額
            .item.no-margin 寄送地址
            .item.no-margin 收件人
            .item.no-margin 匯款者姓名（或轉帳帳號後三碼）
      p 行政室核對無誤後，回信給您並以郵局掛號寄書。


  .ui.segment
    h3.ui.header 其他出版社
    p 以下書籍可與本會出版品一起購買，或自行於一般通路購書。
    .ui.items
      .item(v-for="book in otherBooks" :key="book.title")
        .image
          img(:src="book.coverImage" :alt="book.title")
        .content
          .header {{ book.title }}
          .meta
            span.author 作者：{{ book.author }}
          .description
            | 推廣價：{{ book.promoPrice }}（原價{{ book.originalPrice }}）
</template>

<script lang="ts">
import handbook from '@/assets/books/handbook.png'
import talks6 from '@/assets/books/6talks.png'
import change from '@/assets/books/change.png'
import rights from '@/assets/books/rights.png'
import programIsland from '@/assets/books/program_island.jpeg'
import playMath from '@/assets/books/play_math_with_child.jpg'

export default {
  setup() {
    const books = [
      {
        title: '自主學習手冊',
        price: '100元',
        note: '（已無庫存）',
        coverImage: handbook
      },
      {
        title: '自主學習理念六講',
        price: '100元',
        coverImage: talks6
      },
      {
        title: '異動中的永恆',
        price: '150元',
        coverImage: change
      },
      {
        title: '校園青少年人權手冊',
        price: '150元',
        coverImage: rights
      },
    ]

    const otherBooks = [
      {
        title: '普格碼島的法師：歡樂自學寫程式',
        author: '唐宗浩',
        promoPrice: '340元',
        originalPrice: '450元',
        coverImage: programIsland
      },
      {
        title: '跟孩子一起玩數學',
        author: '唐宗浩',
        promoPrice: '210元',
        originalPrice: '280元',
        coverImage: playMath
      }
    ]

    return {
      books,
      otherBooks
    }
  }
}
</script>

<style scoped>
#books-container {
  padding: 2rem;
}

.email-mask {
  font-family: monospace;
}

.image img {
  max-width: 200px;
  height: auto;
  object-fit: cover;
}

.item {
  display: flex;
  gap: 2rem;
}

@media screen and (max-width: 768px) {
  #books-container {
    padding: 1rem;
  }

  .item {
    flex-direction: column;
    gap: 1rem;
  }

  .image img {
    max-width: 150px;
  }
}
</style>
