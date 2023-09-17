import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importe o arquivo do router

const app = createApp(App);

// Use o router antes de montar o aplicativo
app.use(router);

app.mount('#app');
