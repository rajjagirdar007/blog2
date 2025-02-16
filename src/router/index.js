import { createRouter, createWebHistory } from 'vue-router'
import ArticleList from '@/components/articles/ArticleList.vue'
import ArticleDetail from '@/components/articles/ArticleDetail.vue'
import ArticleForm from '@/components/articles/ArticleEditor.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: ArticleList
    },
    {
        path: '/article/:id',
        name: 'ArticleDetail',
        component: ArticleDetail,
        props: route => ({ articleId: route.params.id })
    },
    {
        path: '/articles/new',
        component: ArticleForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router