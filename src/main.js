import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Importe o arquivo do router
import { VueQueryPlugin } from "@tanstack/vue-query";
import { createPinia } from "pinia";

const app = createApp(App);

const pinia = createPinia();

// Use o router antes de montar o aplicativo
app.use(router);
app.use(VueQueryPlugin);
app.use(pinia);

app.mount("#app");
