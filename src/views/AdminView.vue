<template lang="pug">
main.ui.segment.container(v-if = "uid && user && user.isAdmin")
  h1.ui.header 管理員系統
  .ui.menu
    button.item(@click="action = '會員管理'") 會員管理
    button.item(@click="action = '理監事會'") 理監事會
    button.item(@click="action = '專案管理'") 專案管理

  .ui.segment(v-if="action === '會員管理'")
    h2.ui.header 會員管理
    .ui.segment
      button.ui.basic.primary.button(@click="listMembers")
        i.users.icon
        | 列出所有會員

    table.ui.celled.compact.table(v-if="members.length > 0")
      thead
        tr
          th 姓名
          th 電子郵件
      tbody
        tr(v-for="member in members")
          td {{ member.fullname }}
          td {{ member.email }}

  .ui.segment(v-if="action === '理監事會'")
    h2.ui.header 理監事會

    .ui.celled.compact.table
      table
        thead
          tr
            th 姓名
            th 職位
            th 電子郵件
            th 動作
        tbody
          tr(v-for="supervisor in supervisors")
            td {{ supervisor.fullname }}
            td {{ supervisor.role }}
            td {{ supervisor.email }}
            td
              .ui.vertical.buttons
                button.ui.basic.primary.button(@click="editSupervisor(supervisor)")
                  i.edit.icon
                  | 編輯
                button.ui.basic.red.button(@click="deleteSupervisor(supervisor)")
                  i.trash.icon
                  | 刪除
    .ui.form
      .ui.field
        label 姓名
        .ui.input
          input(type="text" v-model="newName" placeholder="請輸入理事會成員姓名")
      .ui.field
        label 職位
        .ui.input
          input(type="text" v-model="newRole" placeholder="請輸入理事會成員職位")
      .ui.field
        label 電子郵件
        .ui.input
          input(type="text" v-model="newEmail" placeholder="請輸入理事會成員電子郵件")
      button.ui.basic.green.button(@click="addSupervisor(newName, newRole, newEmail)", v-if="!editMode")
        i.user.add.icon
        | 新增
      button.ui.basic.green.button(@click="updateSupervisor(currentSupervisor)", v-else)
        i.save.icon
        | 更新

  .ui.segment(v-if="action === '專案管理'")
    h2.ui.header 專案管理
    table.ui.celled.stackable.table(v-show="!editMode")
      thead
        tr
          th 全名
          th 主要類別
          th 維護者
          th 電子郵件信箱
          th.description 描述
          th 動作
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
          td
            .ui.vertical.buttons
              button.ui.basic.primary.button(@click="editProject(item)")
                i.edit.icon
                | 編輯
              button.ui.basic.red.button(@click="deleteProject(item)")
                i.trash.icon
                | 刪除

    .ui.form
      .ui.field
        label 全名
        .ui.input
          input(type="text" v-model="newProjectName" placeholder="請輸入專案全名")
      .ui.field
        label 主要類別
        .ui.input
          input(type="text" v-model="newProjectMainCategory" placeholder="請輸入專案主要類別")
      .ui.field
        label 維護者
        .ui.input
          input(type="text" v-model="newProjectMaintainer" placeholder="請輸入專案維護者")
      .ui.field
        label 電子郵件信箱
        .ui.input
          input(type="text" v-model="newProjectMaintainerEmail" placeholder="請輸入專案維護者電子郵件")
      .ui.field
        label 描述
        .ui.input
          input(type="text" v-model="newProjectDescription" placeholder="請輸入專案描述")
      button.ui.basic.green.button(@click="editMode ? updateProject(currentProject) : addProject()")
        i.plus.icon(v-if="!editMode")
        i.save.icon(v-else)
        span(v-if="!editMode") 新增
        span(v-else) 更新
</template>

<script lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { supervisorsRef, projectsRef, database } from '@/firebase'
import { onValue, set, ref as dbRef, remove } from 'firebase/database'


interface Supervisor {
  id: string
  fullname: string
  role: string
  email: string
}

interface Project {
  id: string
  full_name: string
  main_category: string
  maintainer: string
  maintainer_email: string
  description: string
}

export default {
  props: {
    uid: {
      type: String,
      required: true,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const supervisors = ref([])
    const action = ref('理事會')
    const newName = ref('')
    const newRole = ref('')
    const newEmail = ref('')
    const members = ref([])
    const password = ref('')
    const projects = ref([])
    const newProjectName = ref('')
    const newProjectMainCategory = ref('')
    const newProjectMaintainer = ref('')
    const newProjectMaintainerEmail = ref('')
    const newProjectDescription = ref('')
    const editMode = ref(false)
    const currentProject = ref({})
    const currentSupervisor = ref({})
    onMounted(() => {
        onValue(supervisorsRef, (snapshot) => {
            const rawData = snapshot.val();
            console.log(rawData);
            supervisors.value = Object.values(rawData);
        });
        onValue(projectsRef, (snapshot) => {
            const rawData = snapshot.val();
            console.log(rawData);
            projects.value = Object.values(rawData);
        });
    });

    return {
      supervisors,
      action,
      newName,
      newRole,
      newEmail,
      members,
      password,
      projects,
      newProjectName,
      newProjectMainCategory,
      newProjectMaintainer,
      newProjectMaintainerEmail,
      newProjectDescription,
      editMode,
      currentProject,
      currentSupervisor,
    };
  },
  methods: {
    addSupervisor(name: string, role: string, email: string) {
      const id = this.supervisors && this.supervisors.length > 0 ? this.supervisors[this.supervisors.length - 1].id : null;
      set(dbRef(database, `supervisors/${id}`), {
        id: id,
        fullname: name,
        role,
        email,
      });
    },
    listMembers() {
      const password = window.prompt('請輸入密碼')
      if (!password) {
        return
      }

      axios.post('https://members-backend.alearn13994229.workers.dev/get_user_list', {
        uid: this.uid,
        password: password,
      })
        .then(response => {
          this.members = response.data;
        })
        .catch(error => {
          console.error('讀取會員資料時出錯', error);
        });
    },
    addProject() {
      const id = this.projects && this.projects.length > 0 ? this.projects[this.projects.length - 1].id : null;
      set(dbRef(database, `projects/${id}`), {
        id: id,
        full_name: this.newProjectName,
        main_category: this.newProjectMainCategory,
        maintainer: this.newProjectMaintainer,
        maintainer_email: this.newProjectMaintainerEmail,
        description: this.newProjectDescription,
      });
    },
    editProject(project: Project) {
      this.newProjectName = project.full_name;
      this.newProjectMainCategory = project.main_category;
      this.newProjectMaintainer = project.maintainer;
      this.newProjectMaintainerEmail = project.maintainer_email;
      this.newProjectDescription = project.description;
      this.editMode = true;
      this.currentProject = project;
    },
    updateProject(project: Project) {
      set(dbRef(database, `projects/${project.id}`), {
        id: project.id,
        full_name: this.newProjectName,
        main_category: this.newProjectMainCategory,
        maintainer: this.newProjectMaintainer,
        maintainer_email: this.newProjectMaintainerEmail,
        description: this.newProjectDescription,
      }).then(() => {
        window.alert('更新成功');
        this.editMode = false;
      }).catch(error => {
        console.error('更新失敗', error);
        window.alert('更新失敗');
      });
    },
    deleteProject(project: Project) {
      if (window.confirm('確定要刪除嗎？')) {
        remove(dbRef(database, `projects/${project.id}`)).then(() => {
          window.alert('刪除成功');
        }).catch(error => {
        console.error('刪除失敗', error);
          window.alert('刪除失敗');
        });
      }
    },
    editSupervisor(supervisor: Supervisor) {
      this.newName = supervisor.fullname;
      this.newRole = supervisor.role;
      this.newEmail = supervisor.email;
      this.editMode = true;
      this.currentSupervisor = supervisor;
    },
    updateSupervisor(supervisor: Supervisor) {
      set(dbRef(database, `supervisors/${supervisor.id}`), {
        id: supervisor.id,
        fullname: this.newName,
        role: this.newRole,
        email: this.newEmail,
      });
    },
    deleteSupervisor(supervisor: Supervisor) {
      remove(dbRef(database, `supervisors/${supervisor.id}`));
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
