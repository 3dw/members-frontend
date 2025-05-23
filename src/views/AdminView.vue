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
        .ui.field
          label 密碼
          .ui.input
            input(type="password" v-model="password" placeholder="請輸入密碼")
        br
        button.ui.basic.primary.button(@click="listMembers(password)")
          i.users.icon
          | 列出所有會員
        button.ui.basic.orange.button(v-if="members.length > 0" @click="copyMembersEmails")
          i.copy.icon
          | 複製所有會員電子郵件列表
        br
        table.ui.celled.compact.table(v-if="members.length > 0")
          thead
            tr
            th 姓名
            th 電子郵件
            th 動作
        tbody
          tr(v-for="member in members")
            td {{ member.fullname }}
            td {{ member.email }}
            td
              .ui.vertical.buttons
                button.ui.basic.red.button(@click="deleteUser(member.email)")
                  i.trash.icon
                  | 刪除
          tr
            td
              input(type="text" v-model="newUserFullname" placeholder="請輸入姓名")
            td
              input(type="text" v-model="newUserEmail" placeholder="請輸入電子郵件")
            td
              button.ui.basic.green.button(@click="addUser")
                i.user.add.icon
                | 新增

    .ui.segment(v-if="action === '理監事會'")
      h2.ui.header 理監事會

      table.ui.celled.compact.table
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
  .ui.segment(v-else)
    h2.ui.header 請先登入管理員帳號
  </template>

  <script lang="ts">
  import axios from 'axios'
  import { onMounted, ref } from 'vue'
  import { supervisorsRef, projectsRef, database } from '@/firebase'
  import { onValue, set, ref as dbRef } from 'firebase/database'

  interface Supervisor {
    id: string
    fullname: string
    role: string
    email: string
  }

  interface Member {
    fullname: string
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
      const supervisors = ref<Supervisor[]>([])
      const action = ref('理事會')
      const newName = ref('')
      const newRole = ref('')
      const newEmail = ref('')
      const members = ref<Member[]>([])
      const password = ref('')
      const projects = ref<Project[]>([])
      const newProjectName = ref('')
      const newProjectMainCategory = ref('')
      const newProjectMaintainer = ref('')
      const newProjectMaintainerEmail = ref('')
      const newProjectDescription = ref('')
      const editMode = ref(false)
      const currentProject = ref<Project | object>({})
      const currentSupervisor = ref<Supervisor | object>({})
      const newUserFullname = ref('')
      const newUserEmail = ref('')
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

      const copyMembersEmails = () => {
        const emails = members.value.map(member => member.email).join(', ');
        navigator.clipboard.writeText(emails);
        window.alert('已複製所有會員電子郵件');
      }

      return {
        supervisors,
        action,
        newName,
        newRole,
        newEmail,
        copyMembersEmails,
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
        newUserFullname,
        newUserEmail,
      };
    },
    methods: {
      addSupervisor(name: string, role: string, email: string) {
        const id = this.supervisors.length;
        set(dbRef(database, `supervisors/${id}`), {
          id: id,
          fullname: name,
          role,
          email,
        });
      },
      listMembers(savedPassword?: string) {
        console.log(savedPassword)
        const passwordToUse = savedPassword || window.prompt('請輸入密碼')
        if (!passwordToUse) {
          return
        }

        if (!savedPassword) {
          this.password = passwordToUse
        }

        axios.post('https://members-backend.alearn13994229.workers.dev/get_user_list', {
          uid: this.uid,
          password: passwordToUse,
        })
          .then(response => {
            this.members = response.data;
          })
          .catch(error => {
            window.alert('密碼錯誤')
            console.error('讀取會員資料時出錯', error);
          });
      },
      addUser() {
        const fullname = this.newUserFullname
        const email = this.newUserEmail

        const password = window.prompt('請輸入密碼')
        if (!password) {
          return
        }

        axios.post('https://members-backend.alearn13994229.workers.dev/add_user', {
          uid: this.uid,
          password: password,
          fullname: fullname,
          email: email,
        })
        .then(response => {
          if (response.status === 200) {
            window.alert('新增成功')
            this.listMembers(this.password)
          } else {
            window.alert('新增失敗')
          }
        })
        .catch(error => {
          console.error('新增會員資料時出錯', error);
        });
      },
      deleteUser(email: string) {
        const password = window.prompt('請輸入密碼')
        if (!password) {
          return
        }

        if (window.confirm('確定要刪除嗎？')) {
          axios.post('https://members-backend.alearn13994229.workers.dev/delete_user', {
            uid: this.uid,
            password: password,
            email: email,
          })
          .then(response => {
            if (response.status === 200) {
              window.alert('刪除成功')
              this.listMembers(this.password)
            } else {
              window.alert('刪除失敗')
            }
          })
          .catch(error => {
            console.error('刪除會員資料時出錯', error);
          });
        }
      },
      addProject() {
        const id = this.projects.length;
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
          const newProjects = this.projects.filter((p) => {
            return p.id !== project.id
          })
          set(projectsRef, newProjects).then(() => {
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
        }).then(() => {
          window.alert('更新成功');
          this.editMode = false;
        }).catch(error => {
          console.error('更新失敗', error);
          window.alert('更新失敗');
        });
      },
      deleteSupervisor(supervisor: Supervisor) {
        const newSupervisors = this.supervisors.filter((s) => {
          return s.id !== supervisor.id
        })
        set(supervisorsRef, newSupervisors).then(() => {
          window.alert('刪除成功')
        }).catch(error => {
          console.error('刪除失敗', error);
          window.alert('刪除失敗');
        });
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

  input {
    background-color: #fff;
  }
  </style>
