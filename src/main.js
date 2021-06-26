import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Fieldset from 'primevue/fieldset';
// import Divider from "primevue/divider";
import Splitter from 'primevue/splitter';
import SplitterPanel from 'primevue/splitterpanel';
import Tooltip from 'primevue/tooltip';

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

import "primeflex/primeflex.css";

import "../hover.css";
import "../buzz.css";

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
app.component("Fieldset", Fieldset);
// app.component("Divider", Divider);
app.component("Splitter", Splitter);
app.component("SplitterPanel", SplitterPanel);
app.component("Tooltip", Tooltip);
app.component("font-awesome-icon", FontAwesomeIcon);

app.directive('tooltip', Tooltip);

app.mount("#app");
