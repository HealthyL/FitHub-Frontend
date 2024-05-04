import {createRouter, createWebHistory} from "vue-router";
import configurationCardComponent from "@/dataManagement/pages/configuration-card.component.vue";
import stadisticsCardComponent from "@/dataManagement/pages/statistics-card.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/settings', component: configurationCardComponent, meta: { title: 'Configuration' }, },
        { path: '/statistics', component: stadisticsCardComponent, meta: { title: 'Statistics' }, },
        { path: '/',  redirect: '/settings' }
    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'FitHub';
    document.title = `${ baseTitle } | ${ to.meta["title"]}`;
    next();
});

export default router;
