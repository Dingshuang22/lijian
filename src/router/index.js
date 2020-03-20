import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Classify from '@/pages/Classify.vue'
import Cart from '@/pages/Cart.vue'
import Mine from '@/pages/Mine.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:{name:'home'}
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/classify',
      name:'classify',
      component:Classify
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },
    {
      path:'/mine',
      name:'mine',
      component:Mine
    },
    {
      path:'*',
      name:'notFound',
      component:NotFound
    }
  ]
})
