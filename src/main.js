import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Panel from "primevue/panel";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "primeflex/primeflex.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas);
library.add(fab);
library.add(far);

import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

// const app = createApp(App).use(store).use(router).use(ElementPlus);
const app = createApp(App).use(store).use(router).use(PrimeVue);

app.component("Button", Button);
app.component("Panel", Panel);
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
