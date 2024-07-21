import { createApp } from "vue";
import router from "@/router";
import "@styles/style.scss";
import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
