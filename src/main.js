import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import 'flowbite'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from '@fortawesome/free-solid-svg-icons';




createApp(App).use(router).mount('#app')



createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
library.add(faPhone);
library.add(faUserSecret)