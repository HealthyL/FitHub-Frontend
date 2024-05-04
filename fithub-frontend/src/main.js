import './assets/main.css'
import { createApp } from 'vue'
// PrimeVue
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
 import 'primeicons/primeicons.css';

// PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import router from "@/router/index.js";

import App from './app.vue'
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from 'primevue/card';
import Menubar from 'primevue/menubar';
import Dropdown from 'primevue/dropdown';
import FloatLabel from 'primevue/floatlabel';
import InputNumber from 'primevue/inputnumber';
import ConfirmPopup from "primevue/confirmpopup";
import Divider from 'primevue/divider';



createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-card', Card)
    .component('pv-float-label', FloatLabel)
    .component('pv-confirm-pop-up',ConfirmPopup)
    .component('pv-input-number', InputNumber)
    .component('pv-menubar',Menubar)
    .component('pv-divider',Divider)
    .component('pv-dropdown',Dropdown)
    .mount('#app')
