import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI'
import toolsUI from '@/components/kanban/UI'
import chatUI from '@/components/chat/UI'

const app = createApp(App)
components.forEach(component => {
    app.component(component.name, component)
});
toolsUI.forEach(component => {
    app.component(component.name, component)
});
chatUI.forEach(component => {
    app.component(component.name, component)
});

app
    .use(store)
    .use(router)
    .mount('#app')


