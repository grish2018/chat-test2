import Vue from 'vue'
import VueRouter from 'vue-router'
import Messages from '@/views/Messages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    name: 'messages',
    component: Messages
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
