import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// const $ = require('jquery');
// window.$ = $;

// window.$ = window.jQuery = require('jquery');

// import "popper.js"
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

const app = createApp(App).use(store).use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
