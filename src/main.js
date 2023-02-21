import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// 加载Vant核心组件库
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'
// 加载全局样式
import './styles/index.less'
// 动态设置rem 基准值
import 'amfe-flexible'

createApp(App).use(Vant).use(store).use(router).mount('#app')
