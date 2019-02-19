import Vue from 'vue'
import Router from 'vue-router'
import Index from '../page/index'
import Denglu from '../page/denglu'
import Zhuce from '../page/zhuce'
import Ziye2 from '../page/ziye2'
import Ziye3 from '../page/ziye3'
import Ziye4 from '../page/ziye4'
import Ziye5 from '../page/ziye5'
import Sp1 from '../page/sp1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Denglu',
      name: 'Denglu',
      component: Denglu
    },
    {
      path: '/Zhuce',
      name: 'Zhuce',
      component: Zhuce
    },
    {
      path: '/Ziye2',
      name: 'Ziye2',
      component: Ziye2
    },
    {
      path: '/Ziye3',
      name: 'Ziye3',
      component: Ziye3
    },
    {
      path: '/Ziye4',
      name: 'Ziye4',
      component: Ziye4
    },
    {
      path: '/Ziye5',
      name: 'Ziye5',
      component: Ziye5
    }
    ,
    {
      path: '/Sp1',
      name: 'Sp1',
      component: Sp1
    }
  ]
})
