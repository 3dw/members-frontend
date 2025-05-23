import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SlidoMeetingView from '../views/SlidoMeetingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/match_time',
      name: 'MatchTimeView',
      component: () => import('../views/MatchTimeView.vue')
    },
    {
      path: '/bulletin_board',
      name: 'BulletinBoardView',
      component: () => import('../views/BulletinBoardView.vue')
    },
    {
      path: '/donate',
      name: 'DonateView',
      component: () => import('../views/DonateView.vue')
    },
    {
      path: '/donate_records',
      name: 'DonateRecordsView',
      component: () => import('../views/DonateRecordsView.vue')
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
      component: () => import('../views/AdminView.vue'),
      meta: {
        requiresAuth: true
      }
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
        path: '/slido',
        name: 'SlidoMeeting',
        component: SlidoMeetingView
    },
    {
        path: '/githubembeded',
        name: 'GithubEmbededView',
        component: () => import('../views/GithubEmbededView.vue')
    },
    {
        path: '/hello',
        name: 'HelloView',
        component: () => import('../views/HelloView.vue'),
        props: route => ({
            uid: route.params.uid,
            photoURL: route.params.photoURL,
            email: route.params.email
        })
    },
    {
      path: '/connection',
      name: 'ConnectionView',
      component: () => import('../views/ConnectionView.vue')
    },
    {
      path: '/notes',
      name: 'NotesView',
      component: () => import('../views/NotesView.vue')
    },
    {
      path: '/troubletree',
      name: 'TroubleTreeView',
      component: () => import('../views/TroubleTreeView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/404'
    }
  ]
})

export default router
