import { createRouter, createWebHistory } from 'vue-router';
import ExplorePage from '@/views/ExplorePage.vue';

import SearchFilterPage from '../views/SearchFilterPage.vue';
import SignIn from '@/views/SignIn.vue';
import ActivityPage from '@/views/ActivityPage.vue';
import SignUp from '@/views/SignUp.vue';
import ActivityPageDraft from '@/views/ActivityPageDraft.vue'

const routes = [
    {
        path: '/',
        name: 'Explore Page',
        component: SignUp
    },

    {
        path: '/explore',
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
        path: '/sign-up',
        name: 'Sign Up Page',
        component: SignUp
    },

    {
        path: '/login',
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