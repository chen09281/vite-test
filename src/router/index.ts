// 导入router要使用的方法
import { createRouter,createWebHistory } from "vue-router"

// 导入路由页面
import routes from './router'

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router