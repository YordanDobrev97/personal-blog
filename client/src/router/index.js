import { createRouter, createWebHistory } from 'vue-router'
import About from '@/components/About.vue'
import Portfolio from '@/components/Portfolio.vue'
import Services from '@/components/Services.vue'
import Blog from '@/components/Blog.vue'
import Contact from '@/components/Contact.vue'

const router = createRouter({
    routes: [
        {
            path: '/',
            name: 'about',
            component: About,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio
        },
        {
            path: '/services',
            name: 'services',
            component: Services
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        }
    ],
    history: createWebHistory()
})

export default router;