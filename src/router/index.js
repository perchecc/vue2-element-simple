import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import moduleA from "./modules/moduleA"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
]

export const modulesRoutes = [
    moduleA
]

const createRouter = () =>
    new VueRouter({
        scrollBehavior: () => ({ y: 0 }),
        routes: [...routes, ...modulesRoutes]
    })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
