import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes/router'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#EAB464',
              secondary: '#646E78',
              accent: '#A7754D',
              background1: '#8D98A7',
              background2: '#DCCCBB',
            },
          },
        },
    },
})

app.use(router)
app.use(vuetify)
app.mount('#app')
