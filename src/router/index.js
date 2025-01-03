import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/books',
            name: 'BooksView',
            component: () => import('../views/BooksView.vue')
        },
        {
            path: '/yearly_report',
            name: 'YearlyReport',
            component: () => import('../views/YearlyReportView.vue')
        },
        {
            path: '/history',
            name: 'HistoryView',
            component: () => import('../views/HistoryView.vue')
        },
        {
            path: '/action',
            name: 'action',
            component: () => import('../views/ActionView.vue')
        },
        {
            path: '/podcast',
            name: 'padcast',
            component: () => import('../views/PodcastView.vue')
        },
        {
            path: '/admin',
            name: 'AdminView',
            component: () => import('../views/AdminView.vue')
        },
        {
            path: '/doc',
            name: 'DocView',
            component: () => import('../views/DocView.vue')
        },
        {
            path: '/join-us',
            name: 'JoinUsView',
            component: () => import('../views/JoinUsView.vue')
        },
        {
            path: '/friend-sites',
            name: 'FriendSitesView',
            component: () => import('../views/FriendSitesView.vue')
        },
        {
            path: '/changelog',
            name: 'ChangeLogView',
            component: () => import('../views/ChangeLogView.vue')
        },
        {
            path: '/maps',
            name: 'MapsView',
            component: () => import('../views/MapsView.vue')
        },
        {
            path: '/flag/:uid',
            name: 'FlagView',
            component: () => import('../views/FlagView.vue')
        },
        {
            path: '/profile',
            name: 'ProfileView',
            component: () => import('../views/ProfileView.vue')
        },
        {
            path: '/privacy-policy',
            name: 'PrivacyPolicyView',
            component: () => import('../views/PrivacyPolicyView.vue')
        },
        {
            path: '/feedback',
            name: 'FeedbackView',
            component: () => import('../views/FeedbackView.vue')
        },
        {
            path: '/faq',
            name: 'FaqView',
            component: () => import('../views/FaqView.vue')
        },
        {
            path: '/create_faq',
            name: 'CreateFaqView',
            component: () => import('../views/CreateFaqView.vue')
        },
        {
            path: '/edit_faq/:id',
            name: 'EditFaqView',
            component: () => import('../views/EditFaqView.vue')
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/404',
            name: '404Error',
            component: () => import('../views/404ErrorView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            redirect: '/404'
        }
    ]
});
export default router;
//# sourceMappingURL=index.js.map
