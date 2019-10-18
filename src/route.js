
import Router from 'vue-router'
import Vue from 'vue'
const page1 = ()=>import('./component/page1.vue')
const page2 = ()=>import('./component/page2.vue')

Vue.use(Router)
export default new Router({
  routes:[
    {
      path:'/page1',
      name:'page1',
      component:page1
    },
    {
      path:'/page2',
      name:'page2',
      component:page2
    },
    {
      path:'**/',
      redirect:'/page1'
    }
  ]
})