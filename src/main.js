import Vue from 'vue'
import App from './App.vue'

//引入庞门正道字体
import '@/assets/font/font-pangmenzhengdao.css'
import Element from 'element-ui'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
