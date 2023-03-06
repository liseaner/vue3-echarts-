import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
// createApp(App).mount('#app')

// 引用插件
import "lib-flexible/flexible.js"

const app = createApp(App)
app.use(router).use(store)
app.mount('#app')