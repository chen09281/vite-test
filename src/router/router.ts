import { RouteRecordRaw } from 'vue-router'

const routers: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'index',
        component: () => import('../App.vue'),
    },
]

export default routers