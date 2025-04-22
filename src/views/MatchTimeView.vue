<template lang="pug">
.hello
  .ui.success.message
    // 加入文字說明
    h2.ui.header 找夥伴
    p 以下是有登錄協作平台的會員資料，您可以搜尋名稱或資訊，找到夥伴。
    p 歡迎您
      router-link(to="/profile") 登錄您的資訊
      | ，參與「找夥伴」。
  .ui.row(v-if="!uid && (!users || toList(users).length == 0)")
        .sixteen.wide.column
          .ui.huge.buttons
            button.ui.orange.button(@click="toggleLogin")
              i.lock.icon
              | 登入以查看資料
  loader(v-else-if="!users || toList(users).length == 0")
  .ui.container
    .ui.form
      .field
        label 搜尋
        .ui.icon.input
          input(type="text", v-model="search", placeholder="搜尋名稱或資訊")
          i.search.icon
    table.ui.celled.striped.collapsing.stackable.table
      thead.fat-only
        tr
          th 夥伴
          th 需求
          th 可分享
          th 有空的時間
          th 聯絡方式
      tbody
        tr(v-for="user in filteredUsers" :key="user.id")
          td(style="display: flex; align-items: center;")
            router-link(:to="`/flag/${user.uid}`", style="text-decoration: none; display: flex; align-items: center;")
              img(:src="user.photoURL" style="width: 32px; height: 32px; border-radius: 50%;")
              | &nbsp;&nbsp;
              span(v-html="highlightText(user.name, search)")
          td
            span.thin-only 需求：
            span(v-html="highlightText(user.ask, search)")
          td
            span.thin-only 可分享：
            span(v-html="highlightText(user.share, search)")
          td
            span.thin-only 有空的時間：
            span(v-html="highlightText(user.freetime, search)")
          td
            span.thin-only 聯絡方式：
            span(v-html="highlightText(user.connect_me, search)")
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import Loader from '@/components/Loader.vue';

export default defineComponent({
  name: 'MatchTimeView',
  components: {
    Loader,
  },
  props: {
    uid: {
      type: String,
      required: false,
      default: '',
    },
    users: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup(props) {
    const search = ref('');
    const toggleLogin = () => {
      window.location.href = '/login';
    };
    const toList = (users: any) => {
      return Object.values(users);
    };
    const highlightText = (text: string, searchTerm: string) => {
      if (!searchTerm || !text) return text;
      // 先將 HTML 特殊字符轉義
      const escapedText = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
      const regex = new RegExp(`(${searchTerm})`, 'gi');
      return escapedText.replace(regex, '<span class="highlight">$1</span>');
    };
    const filteredUsers = computed(() => {
      return toList(props.users).filter((user: any) => {
        return (
          user.name.includes(search.value) ||
          (user.ask && user.ask.includes(search.value)) ||
          (user.share && user.share.includes(search.value)) ||
          (user.connect_me && user.connect_me.includes(search.value)) ||
          (user.freetime && user.freetime.includes(search.value))
        );
      });
    });
    return {
      search,
      toggleLogin,
      toList,
      filteredUsers,
      highlightText,
    };
  },
});
</script>

<style scoped>
.highlight {
  background-color: #ffeb3b;
  padding: 2px;
  border-radius: 2px;
}
</style>
