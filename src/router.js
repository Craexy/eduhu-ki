import { createRouter, createWebHistory } from "vue-router"

const routeInfos = [
    {
        path : "/",
        component: () => import('@/components/StartSeite.vue') 
    },
    {
        path: '/unterrichtsplaner',
        component: () => import('@/components/UnterrichtsPlaner.vue') 
    },
    {
        path: '/elternbrief',
        component: () => import('@/components/ElternBrief.vue') 
    },
    {
        path: '/korrigieren',
        component: () => import('@/components/KorrigierAutomat.vue')
    }
]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes : routeInfos
})

export default router;
