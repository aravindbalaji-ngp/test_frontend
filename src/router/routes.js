import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../views/HomePage.vue'
import CrudPage from '../views/CrudPage.vue'
import UpdatePage from '../views/UpdatePage.vue'
import CartPage from '../views/CartPage.vue'
import SignupPage from '../views/SignupPage.vue'
import LoginPage from '../views/LoginPage.vue'
import AccountPage from '../views/AccountPage.vue'
import axios from 'axios';



Vue.use(VueRouter)

const routes = [
    {path:'/',name:'Home',component:HomePage},
    {path:'/create',name:'Crud',component:CrudPage},
    {path:'/update/:id',name:'Update',component:UpdatePage},
    {path:'/signup',name:'Signup',meta:{layout: 'blank'},component:SignupPage},
    {path:'/login',name:'Login',meta:{layout: 'blank'},component:LoginPage},
    {path:'/cart',name:'Cart',component:CartPage},
    {path:'/account',name:'Account',component: AccountPage},

    {path:'*',redirect: '/'},   
]


const router = new VueRouter({
    mode:"history",
    routes
})

// router.beforeEach((to,from,next)=>{
//     if(localStorage.getItem('auth') === true)
//     next()
//     else
//     router.push('/signup')
    
// })




axios.defaults.baseURL= 'http://127.0.0.1:3333/'


export default router