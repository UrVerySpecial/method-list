import Vue from 'vue'
import Router from 'vue-router'
import ItemList from '@/components/Top'

import AdminMenu from '@/components/admin'

import NewItem from '@/components/item/new'
import EditItem from '@/components/item/edit'
// import ItemList from '@/components/item/list'

import NewMethod from '@/components/method/new'
import Method from '@/components/method/detail'
import MethodList from '@/components/method/list'
// import NewMethod from '@/components/method/new'
// import EditMethod from '@/components/method/edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/method/:id',
      name: 'Method',
      component: Method
    },
    {
      path: '/admin',
      name: 'admin',
      component: {template: '<div><h1>Admin Menu</h1><router-view></router-view></div>'},
      children: [
        {
          path: 'menu',
          name: 'AdminMenu',
          component: AdminMenu
        },
        {
          path: 'newItem',
          name: 'NewItem',
          component: NewItem
        },
        {
          path: 'item/:id',
          name: 'EditItem',
          component: EditItem
        },
        {
          path: 'newMethod',
          name: 'NewMethod',
          component: NewMethod
        },
        {
          path: 'methods',
          name: 'MethodList',
          component: MethodList
        }
      ]
    }
  ]
})
