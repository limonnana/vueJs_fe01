import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/login.vue'
import Secure from '@/views/secure.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
          name: "login"
      }
  },
  {
      path: "/login",
      name: "login",
      component: Login
  },
  {
      path: "/secure",
      name: "secure",
      component: Secure
  }
  ]
})
