import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

// main.js的作用是入口文件
// 职责1：创建一个根实例
// 职责2：负责全局范围的依赖导入
