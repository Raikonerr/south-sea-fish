import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
import JwPagination from 'jw-vue-pagination';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
// import 'flowbite' // flowbite is a global variable
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faUserSecret } from '@fortawesome/free-solid-svg-icons';



const app = createApp(App)

createApp(App).use(router).use(store).mount('#app')

app.use(VueSweetalert2);



createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
// library.add(faPhone);
// library.add(faUserSecret)


vue.use(flowbite);

Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})