import Vue from 'vue'

import 'normalize.css/normalize.css'// CSS重置库，统一不同浏览器的默认样式

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // Element UI + 中文：将界面文字设为中文（比如日期选择器、分页器的文本）
import VCharts from 'v-charts' // 基于Vue的图表库 封装了ECharts，更方便在Vue中使用图表

import '@/styles/index.scss' // 项目全局自定义样式（SCSS）

import App from './App'
import router from './router'
import store from './store'

import '@/icons' // icon 一般会配合 svg-sprite-loader 实现按需引入的SVG图标系统

// permission：核心的权限控制逻辑，包含：
// 路由守卫（router.beforeEach）：判断是否登录、是否有权限访问某页面
// 动态路由生成：根据用户角色动态添加可访问的路由表
import '@/permission' // permission control

Vue.use(ElementUI, { locale })
Vue.use(VCharts)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)  // render函数比template更高效
}).$mount('#app')

// 与上面等价
// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App }
// })
