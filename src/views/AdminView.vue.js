import axios from 'axios';
import { onMounted, ref } from 'vue';
import { supervisorsRef, projectsRef, database } from '@/firebase';
import { onValue, set, ref as dbRef } from 'firebase/database';
export default (await import('vue')).defineComponent({
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
        const supervisors = ref([]);
        const action = ref('理事會');
        const newName = ref('');
        const newRole = ref('');
        const newEmail = ref('');
        const members = ref([]);
        const password = ref('');
        const projects = ref([]);
        const newProjectName = ref('');
        const newProjectMainCategory = ref('');
        const newProjectMaintainer = ref('');
        const newProjectMaintainerEmail = ref('');
        const newProjectDescription = ref('');
        const editMode = ref(false);
        const currentProject = ref({});
        const currentSupervisor = ref({});
        const newUserFullname = ref('');
        const newUserEmail = ref('');
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
        };
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
        addSupervisor(name, role, email) {
            const id = this.supervisors.length;
            set(dbRef(database, `supervisors/${id}`), {
                id: id,
                fullname: name,
                role,
                email,
            });
        },
        listMembers(savedPassword) {
            console.log(savedPassword);
            const passwordToUse = savedPassword || window.prompt('請輸入密碼');
            if (!passwordToUse) {
                return;
            }
            if (!savedPassword) {
                this.password = passwordToUse;
            }
            axios.post('https://members-backend.alearn13994229.workers.dev/get_user_list', {
                uid: this.uid,
                password: passwordToUse,
            })
                .then(response => {
                this.members = response.data;
            })
                .catch(error => {
                window.alert('密碼錯誤');
                console.error('讀取會員資料時出錯', error);
            });
        },
        addUser() {
            const fullname = this.newUserFullname;
            const email = this.newUserEmail;
            const password = window.prompt('請輸入密碼');
            if (!password) {
                return;
            }
            axios.post('https://members-backend.alearn13994229.workers.dev/add_user', {
                uid: this.uid,
                password: password,
                fullname: fullname,
                email: email,
            })
                .then(response => {
                if (response.status === 200) {
                    window.alert('新增成功');
                    this.listMembers(this.password);
                }
                else {
                    window.alert('新增失敗');
                }
            })
                .catch(error => {
                console.error('新增會員資料時出錯', error);
            });
        },
        deleteUser(email) {
            const password = window.prompt('請輸入密碼');
            if (!password) {
                return;
            }
            if (window.confirm('確定要刪除嗎？')) {
                axios.post('https://members-backend.alearn13994229.workers.dev/delete_user', {
                    uid: this.uid,
                    password: password,
                    email: email,
                })
                    .then(response => {
                    if (response.status === 200) {
                        window.alert('刪除成功');
                        this.listMembers(this.password);
                    }
                    else {
                        window.alert('刪除失敗');
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
        editProject(project) {
            this.newProjectName = project.full_name;
            this.newProjectMainCategory = project.main_category;
            this.newProjectMaintainer = project.maintainer;
            this.newProjectMaintainerEmail = project.maintainer_email;
            this.newProjectDescription = project.description;
            this.editMode = true;
            this.currentProject = project;
        },
        updateProject(project) {
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
        deleteProject(project) {
            if (window.confirm('確定要刪除嗎？')) {
                const newProjects = this.projects.filter((p) => {
                    return p.id !== project.id;
                });
                set(projectsRef, newProjects).then(() => {
                    window.alert('刪除成功');
                }).catch(error => {
                    console.error('刪除失敗', error);
                    window.alert('刪除失敗');
                });
            }
        },
        editSupervisor(supervisor) {
            this.newName = supervisor.fullname;
            this.newRole = supervisor.role;
            this.newEmail = supervisor.email;
            this.editMode = true;
            this.currentSupervisor = supervisor;
        },
        updateSupervisor(supervisor) {
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
        deleteSupervisor(supervisor) {
            const newSupervisors = this.supervisors.filter((s) => {
                return s.id !== supervisor.id;
            });
            set(supervisorsRef, newSupervisors).then(() => {
                window.alert('刪除成功');
            }).catch(error => {
                console.error('刪除失敗', error);
                window.alert('刪除失敗');
            });
        },
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
//# sourceMappingURL=AdminView.vue.js.map