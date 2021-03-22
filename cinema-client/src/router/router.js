import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // Room List
        {
          name: 'Room list',
          path: 'room-list',
          component: () => import('@/views/dashboard/pages/rooms/RoomList'),
        },
        // Cinema
        {
          name: 'Cinema',
          path: 'cinema/:id',
          component: () => import('@/views/dashboard/pages/rooms/cinema/Cinema'),
        },
      ],
    },
  ],
})
