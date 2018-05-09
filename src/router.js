import Vue from 'vue'
import Router from 'vue-router'
import List from './components/List.vue'
import Form from './components/Form.vue'
import Hello from './components/Hello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: List
    },
    {
      path: '/contact/new',
      name: 'newcontact',
      component: Form
    },
    {
      path: '/contact/:id',
      name: 'contact',
      component: Form
    }
  ]
})