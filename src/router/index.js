import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from '@/components/articles/ArticleList.vue'
import ArticleDetail from '@/components/articles/ArticleDetail.vue'
import ArticleForm from '@/components/articles/ArticleEditor.vue'

const routes = [{
        path: '/blog',
        name: 'Home',
        component: ArticleList
    },
    {
        path: '/blog/:id',
        name: 'ArticleDetail',
        component: ArticleDetail,
        props: route => ({ articleId: route.params.id })
    },
    {
        path: '/blog/new',
        component: ArticleForm
    },
    {
        path: '/blog/about',
        name: 'About',
        component: () =>
            import ('@/views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router