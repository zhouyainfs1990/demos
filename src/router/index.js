import Vue from 'vue'
import Router from 'vue-router'
// @ src 文件夹
import HelloWorld from '@/components/HelloWorld'

// 启用路由系统
Vue.use(Router)

// 生成全局路由器实例对象
let router = new Router({
  // 配置路由
  routes: [
    // 每一个对象就是一组路由
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

export default router;
