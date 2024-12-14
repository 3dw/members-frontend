<template lang="pug">
main.ui.segment.container
  .ui.warning.message
    .header 請協助捍衛每個孩子選擇自學的權利
    p 只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育

  p 背景：2023年，自主學習促進會發起
    a(href="https://join.gov.tw/idea/detail/cd1f42dd-f8ce-40f1-b63e-a4be079a0473") 「向下延伸補助國中小自學生，落實不同社經背景家庭參與實驗教育之機會平等」線上連署
    | 並成功得到5354位網友具名連署，通過連署門檻，而實行細則在立法院遲遲未訂，致使目前國中小非學校型態實驗教育家庭仍未得到政府補助。

  p 民主需要公民的一起關切，請致電教育委員會的立法委員，關切「向下延伸補助國中小自學生」實行細則的擬定進展，並說明為何這項法案對台灣教育的進步致關重要：
    ol
      li 中華民國教育基本法保障家庭的「教育選擇權」 。
      li 國中小是「義務教育」，自學已是「體制內合法申請」，受到政府審議監督，理當和在校生一樣享有政府補助的教育經費。
      li 只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育。

  h2.ui.center.aligned.header 立法委員聯絡資訊
  .ui.cards
    .card(v-for="legislator in legislators")
      .content
        .header {{ legislator.name }}
        .meta {{ legislator.party }}
        .description
          .ui.list
            .item(v-if="legislator.tel")
              i.phone.icon
              .content {{ legislator.tel }}
            .item(v-if="legislator.fax")
              i.fax.icon
              .content {{ legislator.fax }}
            .item(v-if="legislator.email")
              i.mail.icon
              .content
                a(:href="'mailto:' + legislator.email") {{ legislator.email }}
</template>

<script lang="ts">
export default {
  setup() {
    const legislators = [
      {
        name: '民主進步黨團',
        party: '民進黨',
        fax: '02-2358-5797'
      },
      {
        name: '中國國民黨團',
        party: '國民黨',
        fax: '02-2358-5681, 02-2358-5692'
      },
      {
        name: '范雲',
        tel: '02-2358-6056、0988-807139',
        fax: '02-2358-6060'
      },
      {
        name: '張其祿',
        tel: '02-2358-6391',
        fax: '02-2358-6395'
      },
      {
        name: '陳培瑜',
        tel: '02-2358-8221',
        fax: '02-2358-8225'
      },
      {
        name: '張廖萬堅',
        tel: '02-2358-8282',
        fax: '02-2358-8285'
      },
      {
        name: '吳思瑤',
        tel: '02-2358-8131',
        fax: '02-2358-8135'
      },
      {
        name: '林宜瑾',
        tel: '02-2358-8316',
        fax: '02-2358-8320'
      },
      {
        name: '高金素梅',
        tel: '02-2358-6051',
        fax: '02-2358-6055'
      },
      {
        name: '陳秀寶',
        tel: '02-2358-6881',
        fax: '02-2358-6140'
      },
      {
        name: '黃國書',
        tel: '02-2358-6846',
        fax: '02-2358-6850'
      },
      {
        name: '萬美玲',
        tel: '02-2358-6156',
        fax: '02-2358-6160',
        email: 'idea.power@msa.hinet.net'
      },
      {
        name: '鄭正鈐',
        tel: '02-2358-8121',
        fax: '02-2358-8125'
      },
      {
        name: '鄭麗文',
        tel: '02-2358-6866',
        fax: '02-2358-6870'
      },
      {
        name: '陳靜敏',
        tel: '02-2358-8181',
        fax: '02-2358-8185',
        email: 'ly11208b@ly.gov.tw'
      },
      {
        name: '王婉諭',
        tel: '02-2358-6376',
        fax: '02-2358-6380',
        email: 'wanyu.claire@gmail.com'
      }
    ]

    return {
      legislators
    }
  }
}
</script>

<style scoped>
.ui.cards {
  margin-top: 2em;
}
.ui.cards > .card {
  margin-bottom: 1em;
}
p {
  font-size: 16px;
}
</style>
