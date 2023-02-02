import MainPage from "@/pages/MainPage";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import About from "@/pages/About";
import PostsPage from "@/pages/PostsPage";
import PostIdPage from "@/pages/PostIdPage";
import StorePostsPage from "@/pages/StorePostsPage";
import compositionPostsPage from "@/pages/CompositionPostsPage";


const routes = [
     {
         path: '/',
         component: MainPage
     },
    {
         path: '/posts',
         component: PostsPage
     },
    {
         path: '/about',
         component: About
     },
    {
         path: '/posts/:id',
         component: PostIdPage
     },
    {
         path: '/store',
         component: StorePostsPage
     },
    {
         path: '/composition',
         component: compositionPostsPage
     }
 ]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router