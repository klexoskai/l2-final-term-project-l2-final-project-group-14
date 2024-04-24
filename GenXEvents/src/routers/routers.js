import { createRouter, createWebHistory } from 'vue-router';
import ExplorePage from '@/views/ExplorePage.vue';
import ActivityPageDraft from '@/views/ActivityPageDraft.vue';
import SearchFilterPage from '../views/SearchFilterPage.vue';
import SignIn from '@/views/SignIn.vue';

const routes = [
    {
        path: '/',
        name: 'Explore Page',
        component: ExplorePage
    },

    {
        path: '/activity-page',
        name: 'Activity Page',
        component: ActivityPageDraft
    },

    {
        path: '/landing-page',
        name: 'Landing Page'
        // Landing Page
    },

    {
        path: '/register-page',
        name: 'Register Page'
        // Register Page
    },

    {
        path: '/login-page',
        name: 'Login Page',
        component: SignIn
    },

    {
        path: '/filter-page',
        name: 'Search and Filter Page',
        component: SearchFilterPage
    },
    {
        path: '/favourites',
        name: 'Favourites Page'
        // Favourites Page
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

/* 
Components that require routes:

1. Landing page
2. Explore Page
3. Activity Page
4. Profile Page
5. Sign in and Register pages
6. Favourites page
7. Search and Filter Page
*/