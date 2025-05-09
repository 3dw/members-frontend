<template lang="pug">
main.ui.segment.container
  .ui.warning.message
    .header 請協助捍衛每個孩子選擇自學的權利
    p 只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育
    a(href="#legislators")
      i.phone.icon
      i.mail.icon
      i.facebook.icon
      | 致電,Email,Facebook給教育及文化委員會委員

  .ui.success.message
    .header 過去7天行動統計
    .ui.tiny.statistics
      .statistic(v-for="(count, date) in weeklyStats")
        .value {{ count }}
        .label {{ formatDate(date) }}
    a(href="#action-record")
      | 查看行動記錄
      i.arrow.down.icon

  .ui.warning.message(v-if="todayActions.filter(action => action.name != 'test').length === 0")
    | 今天還沒有任何行動記錄，成為今天第一個行動的人吧！
    a(href="#legislators")
      i.phone.icon
      i.mail.icon
      i.facebook.icon
      | 立即致電,Email,Facebook給委員

  p 背景：2023年，自主學習促進會發起
    a(href="https://join.gov.tw/idea/detail/cd1f42dd-f8ce-40f1-b63e-a4be079a0473") 「向下延伸補助國中小自學生，落實不同社經背景家庭參與實驗教育之機會平等」線上連署
    | 並成功得到5354位網友具名連署，通過連署門檻，而實行細則在立法院遲遲未訂，致使目前國中小非學校型態實驗教育家庭仍未得到政府補助。
  p 延伸閱讀：
  .ui.bulleted.list
    .item
      a(href="https://ws.tycg.gov.tw/Download.ashx?u=LzAwMS9VcGxvYWQvNzQvUmVsRmlsZS8xMTk0MS83NjcxNjIvMDkt5qGD5ZyS5biC6KiT57e0LeWFkuerpeasiuWIqeWFrOe0hOWPiuWcsOaWueazleimj%2BaqouimluewoeS7iy5wZGY%3D&n=MDkt5qGD5ZyS5biC6KiT57e0LeWFkuerpeasiuWIqeWFrOe0hOWPiuWcsOaWueazleimj%2BaqouimluewoeS7iy5wZGY%3D", target="_blank", rel="noopener noreferrer") 《聯合國兒童權利公約簡介》
    .item
      a(href="https://law.moj.gov.tw/LawClass/LawSingle.aspx?pcode=H0070059&flno=30", target="_blank", rel="noopener noreferrer") 《高級中等以下教育階段非學校型態實驗教育實施條例》
    .item
      a(href="https://www.cy.gov.tw/AP_Home/Op_Upload/eDoc/%E5%87%BA%E7%89%88%E5%93%81/109/1090000191010900991p.pdf", target="_blank", rel="noopener noreferrer") 《我國實驗教育的實施現況與未來發展調查通案性案件調查研究報告》

  h2.ui.header
    i.edit.icon
    | 2023年提案說明

  .ui.segments
    .ui.segment
      h3.ui.header 提議內容或建議事項
      p 不是所有孩子都適合學校教育。
      p 想想孩子的就學經驗，有些人可能順利，有些人在填鴨，切齊或評比競爭制度之下，過得很辛苦。
      p 社經地位高的家庭，較有能力讓孩子自學，或參加各式各樣的實驗教育團體或機構。
      p 但社經地位較低家庭的孩子，即使想自學，第一個面對的就是費用問題。
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
        p 即令孩子參加團體或機構實驗教育，少了政府每年公立中小學每生20萬元補助，家中即便多一位月入5萬的全職工作者，只要有兩個孩子選擇非學校型態實驗教育，基本上就捉襟見肘了，單親家庭更不待言。
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

  p 民主需要公民的一起關切，請致電教育及文化委員會的立法委員，關切「向下延伸補助國中小自學生」實行細則的擬定進展，並說明為何這項法案對台灣教育的進步致關重要：
  ol
    li 中華民國教育基本法保障家庭的「教育選擇權」 。
    li 國中小是「義務教育」，自學已是「體制內合法申請」，受到政府審議監督，理當和在校生一樣享有政府補助的教育經費。
    li 只有補助自學，弱勢家庭的孩子才有足夠的機會參與實驗教育。
  // br
  // .ui.three.column.grid
  //   .column
  //     p
  //       a(href="https://docs.google.com/document/d/11VLONUCj3kJ6S9poD9LrSZL4Oqe7_nO1RzoS9oOhYcc/edit?tab=t.0", target="_blank", rel="noopener noreferrer")
  //         i.facebook.icon
  //         | 參考臉書私訊範本
  //   .column
  //     p
  //       a(href="https://docs.google.com/document/d/162z3-C-D3qWGVuBXZ-nbcgJV4u9sCMMyit_dn_XAKIg/edit?usp=sharing", target="_blank", rel="noopener noreferrer")
  //         i.mail.icon
  //         | 參考信件範本
  //   .column
  //     p
  //       a(href="https://docs.google.com/document/d/1Sx_OKbRynNYsUI-ryj7qKiUd1h_z-W9zOins7sIwhQM/edit?usp=sharing", target="_blank", rel="noopener noreferrer")
  //         i.phone.icon
  //         | 參考電話溝通指南
  br
  h2.ui.center.aligned.header#legislators 教育及文化委員會-第11屆第2會期委員聯絡資訊
    .sub.header 資料來源：
      a(href="https://www.ly.gov.tw/Pages/Detail.aspx?nodeid=55089&pid=243430", target="_blank", rel="noopener noreferrer") 立法院全球資訊網
      | 及各委員臉書
      button.ui.basic.green.button(@click="showDetails = true", v-if="!showDetails")
        | 展開
        i.arrow.down.icon
      button.ui.basic.green.button(@click="showDetails = false", v-else)
        | 收合
        i.arrow.up.icon
      .ui.bulleted.list(v-show="showDetails")
        .ui.item(v-for="legislator in legislators")
          a(v-if="legislator.facebook", :href="legislator.facebook", target="_blank", rel="noopener noreferrer" ) {{legislator.name}} 臉書
  .ui.four.doubling.stackable.cards
    .card(v-for="legislator in legislators")
      .ui.progress.green(
        :data-percent="getCallCount(legislator.name)",
        :class="{ active: getCallCount(legislator.name) > 0 }"
      )
        .bar
          .progress {{ getCallCount(legislator.name) }}%
      .content
        .header
          i.user.icon
          | {{ legislator.name }}
        .meta {{ legislator.party }}
        .description
          .ui.list
            .item(v-if="legislator.tel")
              i.phone.icon
              .content
                a(:href="'tel:' + legislator.tel") {{ legislator.tel }}
            .item(v-if="legislator.mobile")
              i.phone.icon
              .content
                a(:href="'tel:' + legislator.mobile") {{ legislator.mobile }}
            .item(v-if="legislator.fax")
              i.fax.icon
              .content {{ legislator.fax }}
            .item(v-if="legislator.email")
              i.mail.icon
              .content
                a(:href="'mailto:' + legislator.email") {{ legislator.email }}
            .item(v-if="legislator.facebook")
              i.facebook.icon
              .content
                a(:href="legislator.facebook", target="_blank", rel="noopener noreferrer" ) {{legislator.name}}臉書

        .ui.divider

        p
          span(v-if="legislator.email") 發信或
          span(v-if="legislator.facebook") 在發訊息或
          span 打電話後，請在下方按鈕留下記錄吧！

        .extra.content
          .ui.vertical.buttons(style="display: flex; margin: 0 auto;")

            a.ui.basic.green.button(href="#action-record-form", @click="myLegislator = legislator.name")
              i.user.icon
              | 我剛聯給了
              br
              | {{ legislator.name }}委員

  .ui.segment#action-record
    h2.ui.header
      i.history.icon
      | 最新行動記錄
    .ui.warning.message(v-if="actions.filter(action => action.name != 'test').length === 0")
      | 目前還沒有任何行動記錄，成為第一個行動的人吧！
    .ui.warning.message(v-else-if="todayActions.filter(action => action.name != 'test').length === 0")
      | 今天還沒有任何行動記錄，成為今天第一個行動的人吧！

    .ui.form#action-record-form
      br
      br
      .ui.field
        .red.star
        label 請問您聯絡了哪一位委員
        select.ui.dropdown(v-model="myLegislator")
            option(v-for="legislator in legislators" :value="legislator.name") {{ legislator.name }}
      .ui.two.stackable.fields
        .ui.field
          .red.star
          label 請問您的大名或是暱稱?
          input(type="text", v-model="userName")
        .ui.field
          .red.star
          label 您聯絡的方式
          select.ui.dropdown(v-model="method")
            option(v-for="method in methods" :value="method") {{ method }}
      .ui.field
        label 請問您的心得感想?(可不填)
        textarea(v-model="message", rows="3", placeholder="請在此輸入您的心得感想")
      .ui.buttons
        button.ui.primary.button(@click="logAction")
          i.save.icon
          | 記錄行動
        button.ui.basic.purple.button(@click="downloadAction")
          i.download.icon
          | 下載行動記錄

    .ui.feed
      .event(v-for="action in actions.filter(action => action.name != 'test').reverse()")
        .content
          .summary {{ action.datetime }}: {{ action.name }}
            span(v-if="action.action === 'phone' || !action.action") 打了一通電話給
            span(v-else-if="action.action === 'email'") 寄了一封信給
            span(v-else-if="action.action === 'facebook'") 在臉書上發了一則訊息給
            | {{ action.legislator }}
            | 委員
          .meta {{ action.message }}


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

  .ui.form.segment
    h3.ui.header 編輯訊息內容
    .ui.vertical.buttons
      button.ui.basic.blue.button(@click="toggleMessageTemplate('facebook')")
        i.facebook.icon
        | 切換範本(Facebook)
      button.ui.basic.green.button(@click="toggleMessageTemplate('email')")
        i.mail.icon
        | 切換範本(Email)
      button.ui.basic.orange.button(@click="toggleMessageTemplate('phone')")
        i.phone.icon
        | 切換範本(電話)
    textarea(
      v-model="messageTemplate1",
      rows="10",
      placeholder="在此編輯要傳送的訊息..."
    )
    .ui.buttons
      button.ui.primary.button(@click="copyMessage")
        i.copy.icon
        | 複製訊息
      button.ui.button(@click="resetMessage")
        i.undo.icon
        | 重設內容

</template>

<script lang="ts">
import { ref, onMounted, computed } from 'vue'
import { actionsRef } from '@/firebase'
import { push, onValue } from 'firebase/database'
import { legislators } from '@/data/ly_11_02'
import { messageTemplate, messageFacebookTemplate, messageEmailTemplate, messagePhoneTemplate } from '@/data/message_templates'

interface Action {
  datetime: string;
  name: string;
  legislator: string;
  message: string;
}

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

    const methods = ['電話', 'Email', 'Facebook']
    const userName = ref('')
    const myLegislator = ref('')
    const method = ref('Facebook')
    const message = ref('')

    const actions = ref<Action[]>([])

    const showDetails = ref(false)

    // 新增 computed property 來計算今日行動
    const todayActions = computed(() => {
      const today = new Date()
      return actions.value.filter(action => {
        console.log(action.datetime)
        console.log(action.datetime.split(' ')[0])
        const actionDate = new Date(action.datetime.split(' ')[0])
        console.log(actionDate)
        console.log(today)

        return actionDate.getFullYear() === today.getFullYear() &&
               actionDate.getMonth() === today.getMonth() &&
               actionDate.getDate() === today.getDate()
      })
    })

    // 監聽資料變化
    onMounted(() => {
      onValue(actionsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
          actions.value = Object.values(data) as Action[]
          console.log(actions.value)
        }
      })
    })

    // 記錄行動
    const logAction = () => {
      console.log(myLegislator.value)
      console.log(userName.value)
      console.log(method.value)
      console.log(message.value)
      if (!myLegislator.value || !userName.value || !method.value) {
        window.alert('請填寫完整表單')
        return
      }
      const now = new Date()

      // 將方法轉換為小寫
      let myMethod;
      if (method.value === '電話') {
        myMethod = 'phone'
      } else if (method.value === 'Email') {
        myMethod = 'email'
      } else if (method.value === 'Facebook') {
        myMethod = 'facebook'
      }

      push(actionsRef, {
        datetime: now.toLocaleString('zh-TW'),
        name: userName.value,
        legislator: myLegislator.value,
        action: myMethod,
        message: message.value || '請繼續接力關注此案'
      }).then(() => {
        window.alert('行動記錄已成功保存')
      }).catch((error) => {
        window.alert('行動記錄保存失敗: ' + error.message)
      })

      return
    }

    // 計算每位委員被打電話的次數
    const getCallCount = (legislatorName: string) => {
      const count = actions.value.filter(action =>
        action.name !== 'test' &&
        action.legislator === legislatorName
      ).length
      return Math.min(Math.round((count / 100) * 100), 100)
    }

    // 新增每週統計
    const weeklyStats = computed(() => {
      const stats = {}
      const today = new Date()

      // 初始化過去7天的數據
      for (let i = 6; i >= 0; i--) {
        const date = new Date(today)
        date.setDate(date.getDate() - i)
        stats[date.toISOString().split('T')[0]] = 0
      }

      // 統計行動數據
      actions.value.forEach(action => {
        if (action.name === 'test') return

        // 解析 "2024/12/19 下午9:39:21" 格式的日期
        const [datePart] = action.datetime.split(' ')
        const [year, month, day] = datePart.split('/')
        const actionDateStr = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`

        if (stats[actionDateStr] !== undefined) {
          stats[actionDateStr]++
        }
      })

      return stats
    })

    // 格式化日期顯示
    const formatDate = (dateStr: string) => {
      const date = new Date(dateStr)
      return `${date.getMonth() + 1}/${date.getDate()}`
    }

    const messageTemplate1 = ref(messageTemplate);
    const messageFacebookTemplate1 = ref(messageFacebookTemplate);
    const messageEmailTemplate1 = ref(messageEmailTemplate);
    const messagePhoneTemplate1 = ref(messagePhoneTemplate);


    const copyMessage = async () => {
      try {
        await navigator.clipboard.writeText(messageTemplate1.value)
        window.alert('訊息已複製到剪貼簿')
      } catch (err) {
        console.error('複製失敗:', err)
      }
    }

    // 下載行動記錄, 以JSON格式
    const downloadAction = () => {
      // 排版一下，至少要有換行
      let jsonString = JSON.stringify(actions.value)
        .replace(/,/g, '\n,')
        .replace(/\}\s+,/g, '},')
        .replace(/,\{/g, ',\n{');
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'action_record.json';
      a.click();
    }

    const toggleMessageTemplate = (templateType: string) => {
      switch(templateType) {
        case 'facebook':
          messageTemplate1.value = messageFacebookTemplate1.value.trim()
          break
        case 'email':
          messageTemplate1.value = messageEmailTemplate1.value.trim()
          break
        case 'phone':
          messageTemplate1.value = messagePhoneTemplate1.value.trim()
          break
      }
    }

    const resetMessage = () => {
      messageTemplate1.value = messageTemplate
    }

    return {
      userName,
      myLegislator,
      method,
      methods,
      message,
      url,
      title,
      description,
      legislators,
      showDetails,
      shareToFB,
      shareToTwitter,
      shareToLine,
      actions,
      todayActions,
      logAction,
      getCallCount,
      weeklyStats,
      formatDate,
      messageTemplate1, // 訊息範本
      messageFacebookTemplate1, // 訊息範本
      messageEmailTemplate1, // 訊息範本
      messagePhoneTemplate1, // 訊息範本
      copyMessage,
      resetMessage,
      toggleMessageTemplate,
      downloadAction
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

.ui.buttons .ui.button {
  margin-left: 0;
  margin-right: 0;
}

.ui.line.button {
  background-color: #00b900;
  color: white !important;
}

#line, #line-icon {
  color: white !important;
}

.ui.feed {
  margin: 2em 0;
}

#action-record {
  max-height: 600px;
  overflow-y: auto;
}

.ui.progress {
  margin: 0;
  border-radius: 0.28571429rem 0.28571429rem 0 0;
}

.ui.card .ui.progress:first-child {
  margin: 0;
}

.ui.tiny.statistics {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 1em 0;
}

.ui.tiny.statistics .statistic {
  margin: 0.5em !important;
}

.ui.form textarea {
  font-size: 16px;
  line-height: 1.5;
}

.ui.success.message {
  margin-top: 1em;
}

.red.star {
  display: inline-block;
  position: relative;
  top: 1em;
  left: -.5em;
  color: red;
}

.red.star::after {
  content: ' *';
}
</style>
