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
            path: '/maps',
            name: 'MapsView',
            component: () => import('../views/MapsView.vue')
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
        }
    ]
});
export default router;
//# sourceMappingURL=index.js.map