import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './components/App.vue';
import RouterWeb from './router/index'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
})
app.use(RouterWeb);
app.use(vuetify)
app.mount('#app');