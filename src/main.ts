import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { WebSocketModel } from './utils/webSocket'

WebSocketModel.webSocket
createApp(App).use(store).use(router).mount('#app')
