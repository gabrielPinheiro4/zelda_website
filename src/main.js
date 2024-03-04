import { createApp} from 'vue'
import Lenis from '@studio-freight/lenis'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.config.globalProperties.api = 'https://zelda.fanapis.com/api'

const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)