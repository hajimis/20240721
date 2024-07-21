import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import dMain from "./components/D-main.vue"
import 'element-plus/dist/index.css'
const app = createApp(App)
app.component("DMain",dMain);

app.use(router).mount('#app')
