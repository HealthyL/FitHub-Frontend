import {createRouter, createWebHistory} from "vue-router";
import configurationCardComponent from "@/dataManagement/pages/configuration-card.component.vue";
import stadisticsCardComponent from "@/dataManagement/pages/statistics-card.component.vue";
import PageNotFoundComponent from "@/public/pages/page-not-found.component.vue";
import nutritionCardListComponent from "@/nutritionManagement/pages/nutrition-card-list.component.vue";
import accountManagementComponent from "@/accountManagement/pages/account-management.component.vue";
import rutineCardListComponent from "@/rutineManagement/pages/rutine-card-list.component.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/my-account', component: accountManagementComponent, meta: { title: 'Account Management' }, },
        { path: '/rutine', component: rutineCardListComponent, meta: { title: 'Rutine Card List' }, },
        { path: '/nutrition', component: nutritionCardListComponent, meta: { title: 'Nutrition Card List' }, },
        { path: '/settings', component: configurationCardComponent, meta: { title: 'Configuration' }, },
        { path: '/statistics', component: stadisticsCardComponent, meta: { title: 'Statistics' }, },
        { path: '/',  redirect: '/settings' },
        { path: '/:pathMatch(.*)*', component: PageNotFoundComponent},

    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'FitHub';
    document.title = `${ baseTitle } | ${ to.meta["title"]}`;
    next();
});

export default router;
