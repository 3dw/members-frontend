<template lang="pug">
main.ui.container
  h1.ui.header 本會簡介
  .ui.segment.two.column.stackable.grid.container.padded
    .column.right-bordered
      h2.ui.header 理念
      p 「自主學習」是讓每一位學習者皆能參與自己的學習規劃、檢視、賦與意義，清明自覺的從事各項學習，以開發生命潛能。

      p 教育工作者的角色，則是尊重個別的學習性向及需要，協助學習者了解自己、接納自己、培養與環境正向互動的能力，並透過典範的引導、情境的激發，讓每位學生都能適性發展自我、成就自己、並與自身所繫之系統良好共處。

      p 因此，我們反對教育環境中，一切使人盲目服從的手段，像是欺騙、威脅、操控。

      p 在實踐中，也證明了互為主體的同理與討論、嚴格但不威權的界限清楚，能幫助小孩從他律轉為自律。

      p 在學習上，幫助小孩瞭解自己的學習優勢與風格、如何檢查自己會不會、以及各學科在人類文明中的意義，比起為考試而讀書，印象會深刻、更能活用、也更長久。更重要的���覺得學習有意義，也有趣味。

      h2.ui.header 任務
      p 本會任務如下：
      p 1. 從事自主學習理念之研究及推廣
      p 2. 辦理師資培訓與教師成長
      p 3. 支援自學家庭教材與教法
      p 4. 開設有助於學生自主的課程及社團
      p 5. 其他有關自主學習相關業務

    .column
      h2 本會簡史
      p 教育實踐之路，從不滿意體制的一群大人小孩開始。

      h3 種籽親子實驗小學(1994-)
      p 台灣民主學校的先驅，由十個家庭共同創立。由社群教師李雅卿為創辦人及首任苑長。種籽的特色是討論文化、課程選修和師生平權的生活公約。

      h3 台北市自主學習實驗計畫(1998-2006)
      p 台北市唯一一次公民合作辦理的國、高中六年一貫自主中學實驗計畫。實驗計畫透過必修、選修和自主三個學程，讓不同性向的學生都能發展特長。

      h3 自主學習促進會成立(2001)
      p 為延續自主學習的經驗與知識，當時的親、師、生結合學術界的專家學者，於2001年3月30日召開會議籌設「中華民國自主學習促進會」，同年8月9日經內政部核准生效。

      h3 自主培力學園(2008-2010)
      p 針對體制內拒學、懼學和想自學的青少年，以一年時��，透過全日制的團體學習，來瞭解自己，重建學習興趣和習慣。

      h3 獨立教育工作者社群(2009-)
      p 運用累積的經驗開設學習團體，陪伴自學家庭；傳承教育經驗給新夥伴，開發自學教材；與相關友會合作，開拓台灣自學資源。

      h3 雲端化後的促進會(2011-)
      p 採用網路協力、志工認領的方式持續運作，維持諮詢服務、教材流通、自學地圖網站以及對自學相關修法與政策的持續關注。

      h3 跨社群連結的促進會(2019-)
      p 108課綱後，加上COVID-19的影響，線上教育及跨社群連結蓬勃發展。本會持續與其他單位合作、培育新血師資、建立網路平台、推動修法爭取自學生的合理補助。

  h1.ui.header 理監事名單
  .ui.two.stackable.cards(v-if="supervisors.length")
    .card(v-for="supervisor in supervisors" :key="supervisor.email")
      .content.flex.flex-column
        .flex.flex-row.flex-align-center
          .flex-center
            i.user.icon
            | {{ supervisor.role }}：{{ supervisor.fullname }}
          .filler
          button.ui.small.basic.blue.button(@click="toggleEmail(supervisor.email)")
            span(v-if="!visibleEmails.includes(supervisor.email)") 顯示
            span(v-else) 隱藏
            | Email
        .filler
        div
          span(v-if="visibleEmails.includes(supervisor.email)") {{ supervisor.email }}
          span(v-else) &nbsp;
  p(v-else) 載入中...

  h1.ui.header 自主學習促進會專案一覽：

  table.ui.celled.stackable.table
    thead
      tr
        th 全名
        th 主要類別
        th 維護者
        th 電子郵件信箱
        th.description 描述
    tbody
      tr(v-for="item in projects" :key="item.id")
        td
          a(:href="item.website" target="_blank" rel="noopener noreferrer")
            i.globe.icon
            | {{ item.full_name }}
        td {{ item.main_category }}
        td {{ item.maintainer }}
        td {{ item.maintainer_email }}
        td.description {{ item.description }}
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { database, projectsRef, supervisorsRef } from '@/firebase'
import { onValue } from 'firebase/database'

interface Supervisor {
  role: string;
  fullname: string;
  email: string;
}

export default {
  setup() {
    const data = ref([])

    const projects = ref([]);
    const supervisors = ref<Supervisor[]>([]);
    const arr: any[] = new Array();
    const visibleEmails = ref(arr);

    const roleOrder = {
      '理事長': 1,
      '常務理事': 2,
      '常務監事': 3,
      '理事': 4,
      '監事': 5,
      '候補理事': 6
    };

    onMounted(() => {
      onValue(projectsRef, (snapshot) => {
        const projectsData = snapshot.val();
        projects.value = Object.values(projectsData);
      }, (error) => {
        console.error('讀取專案資料時出錯', error);
      });

      onValue(supervisorsRef, (snapshot) => {
        const supervisorsData = snapshot.val();
        supervisors.value = Object.values(supervisorsData) as Supervisor[];
        supervisors.value.sort((a, b) => (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99));
      }, (error) => {
        console.error('讀取理監事資料時出錯', error);
      });
    });

    return {
      data,
      projects,
      supervisors,
      visibleEmails,
    };
  },
  methods: {
    toggleLogin() {
      this.$emit('toggleLogin');
    },
    toggleEmail(email: string) {
      if (this.visibleEmails.includes(email)) {
        this.visibleEmails.splice(this.visibleEmails.indexOf(email), 1);
      } else {
        this.visibleEmails.push(email);
      }
    },
  },
}
</script>

<style scoped>
table {
  width: 100%;
}

th, td {
  padding: 0.5rem;
  text-align: left;
  min-width: 120px;
}

.description {
  white-space: pre-wrap;
  min-width: 200px;
}
</style>
