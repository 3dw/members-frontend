<template lang="pug">
main.ui.segment.container
  .ui.warning.message
    .header 請協助捍衛每個孩子選擇自學的權利
    p 只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育

  p 背景：2023年，自主學習促進會發起
    a(href="https://join.gov.tw/idea/detail/cd1f42dd-f8ce-40f1-b63e-a4be079a0473") 「向下延伸補助國中小自學生，落實不同社經背景家庭參與實驗教育之機會平等」線上連署
    | 並成功得到5354位網友具名連署，通過連署門檻，而實行細則在立法院遲遲未訂，致使目前國中小非學校型態實驗教育家庭仍未得到政府補助。

  h2.ui.header
    i.edit.icon
    | 2023年提案說明

  .ui.segments
    .ui.segment
      h3.ui.header 提議內容或建議事項
      p 不是所有孩子都適合學校教育。
      p 想想孩子的就學經驗，有些人可能順利，有些人在填鴨，切齊或評比競爭制度之下，過得很辛苦。
      p 社經地位高的家庭，較有能力讓孩子自學，或參加各式各樣的實驗教育團體或機構。
      p 但社經地位低家庭的孩子，即使想自學，第一個面對的就是費用問題。
      p 無力付擔只能忍耐，直到學校畢業，或是拒學甚至中輟。
      p 每個孩子都應受到照顧，同等重要。
      p 希望國家執政者，有勇氣幫助這些相對弱勢的孩子，同樣寶貝孩子，捍衛他們的教育選擇權。

      .ui.info.message
        p 政府從103學年以來補助高中自學生，到110學年總共嘉惠了8,770人。但人數最多和辦理達25年的國中小學自學生至今仍然沒有補助。

      .ui.positive.message
        p 政府應該從112學年開始，將自學學費補助向下延伸到國中小學階段，讓學生不分家庭社經背景，參與自學機會平等。

    .ui.segment
      h3.ui.header $利益與影響

      .ui.raised.segment
        h4.ui.header 讓各種社經背景家庭參與自學機會平等
        p 選擇自學不是一個輕易的決定。首先家長要有能力規劃自學計畫送實驗教育審議會審議通過，還要有足夠的文化和經濟資本來執行審議會通過的自學計畫，部分雙薪家庭至少要有一位從全職改成兼職工作，嚴重影響其家庭收入。
        p 即令孩子參加團體或機構實驗教育，少了政府每年公立中小學每生20萬元補助，家中即便多一位月入5萬的全職工作者，���要有兩個孩子選擇非學校型態實驗教育，基本上就捉襟見肘了，單親家庭更不待言。
        p 難怪目前主要只有文化和經濟資本雙高的家庭易於自學，但一旦政府全面補助，各種社經背景的家庭都有機會平等自學。

      .ui.raised.segment
        h4.ui.header 落實法律和國際公約規定參與自學機會平等之保障
        .ui.list
          .item 我國憲法第159條「國民受教育之機會，一律平等。」
          .item 教育基本法第4條規定教育機會平等原則
          .item 《兒童權利公約》第28條規定教育權利
        p 既然自學是我國合法的國民教育方式之一，政府本來就有確保不分社經地位，讓每個家庭得參與自學機會平等之責任，此亦是教育選擇權之真正落實。

      .ui.raised.segment
        h4.ui.header 補助自學的投資報酬率高
        .ui.statistics
          .statistic
            .value 8,770
            .label 受惠高中自學生數
          .statistic
            .value 0.006%
            .label 占教育總支出比例
        br
        p 根據教育部統計，政府在2014年起將高中自學納入政府補助累計嘉惠了8,770名高中自學生，累計支出4億3,850萬元，佔同一時期教育經費總支出7兆2千億元的0.006%，相當於同一時期政府每年花在補助274位國中生的成本。
        p 高中自學生的補助款，讓各種社經背景的中離生有機會以自學的方式完成高中學業，甚至透過特殊選才進入清華大學和陽明交通大學繼續升學。


  h2.ui.header
    i.users.icon
    | 請一起關切法案
    .sub.header 讓各種社經背景家庭參與自學機會平等

  p 民主需要公民的一起關切，請致電或Email教育委員會的立法委員，關切「向下延伸補助國中小自學生」實行細則的擬定進展，並說明為何這項法案對台灣教育的進步致關重要：
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

  h2.ui.header 在社群媒體上分享
  .ui.center.aligned.segment
    button.ui.facebook.button(@click="shareToFB")
      i.facebook.icon
      | 分享到 Facebook
    button.ui.twitter.button(@click="shareToTwitter")
      i.twitter.icon
      | 分享到 Twitter
    button.ui.line.green.button#line(@click="shareToLine")
      i.line.icon#line-icon L
      | 分享到 LINE

</template>

<script lang="ts">
export default {
  setup() {
    const url = 'https://www.alearn.org.tw/action'
    const title = '請協助捍衛每個孩子選擇自學的權利'
    const description = '只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育'

    const shareToFB = () => {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)
    }

    const shareToTwitter = () => {
      window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`)
    }

    const shareToLine = () => {
      window.open(`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`)
    }

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
      legislators,
      shareToFB,
      shareToTwitter,
      shareToLine
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
h4.ui.header, p {
  font-size: 16px;
}

.label {
  font-size: 18px !important;
}

.ui.button {
  margin: 0.5em;
}

.ui.line.button {
  background-color: #00b900;
  color: white !important;
}

#line, #line-icon {
  color: white !important;
}
</style>
