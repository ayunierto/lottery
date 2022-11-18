import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';

import App from './components/App.vue';

// Router view
import RouterWeb from './router/index'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Iconos material design
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App)
.use(RouterWeb)
.use(vuetify)
.mount('#app')
