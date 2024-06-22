import { createApp } from 'vue'
// PrimeVue
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css';
 import 'primeicons/primeicons.css';
import 'primevue/resources/primevue.min.css';

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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import SelectButton from "primevue/selectbutton";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";


import '@fortawesome/fontawesome-free/css/all.css'

import i18n from "@/i18n.js";
import Sidebar from "primevue/sidebar";
import Password from "primevue/password";


createApp(App)
    .use(PrimeVue, { ripple : true })
    .use(i18n)
    .use(router)
    .component('pv-input-text', InputText)
    .component('pv-float-label', FloatLabel)
    .component('pv-textarea', Textarea)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-password', Password)
    .component('pv-card', Card)
    .component('pv-float-label', FloatLabel)
    .component('pv-confirm-pop-up',ConfirmPopup)
    .component('pv-input-number', InputNumber)
    .component('pv-menubar',Menubar)
    .component('pv-data-table',DataTable)
    .component('pv-column',Column)
    .component('pv-sidebar',Sidebar)
    .component('pv-select-button', SelectButton)
    .component('pv-divider',Divider)
    .component('pv-dropdown',Dropdown)
    .component('pv-calendar',Calendar)
    .mount('#app')
