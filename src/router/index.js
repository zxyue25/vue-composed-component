import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import FlexFooter from '@/pages/flexFooter'
import TextScroll from '@/pages/textScroll'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/flex-footer',
      name: 'FlexFooter',
      component: FlexFooter
    },
    {
      path: '/text-scroll',
      name: 'TextScroll',
      component: TextScroll
    }
  ]
})
