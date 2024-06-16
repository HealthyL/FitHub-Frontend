import {createRouter, createWebHistory} from "vue-router";
import configurationCardComponent from "@/dataManagement/pages/configuration-card.component.vue";
import PageNotFoundComponent from "@/public/pages/page-not-found.component.vue";
import accountManagementComponent from "@/accountManagement/pages/account-management.component.vue";
import rutineCardListComponent from "@/rutineManagement/pages/rutine-card-list.component.vue";
import productsCardListComponent from "@/productsManagement/pages/products-card-list.component.vue";
import nutritionListComponent from "@/nutritionManagement/components/nutrition-list.component.vue";
import subscriptionManagementComponent from "@/subscription/pages/subscription-management.component.vue";
import paymentGatewayComponent from "@/subscription/pages/payment-gateway.component.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/my-account', component: accountManagementComponent, meta: { title: 'Account Management' }, },
        { path: '/rutine', component: rutineCardListComponent, meta: { title: 'Rutine Card List' }, },
        { path: '/nutritionManagement', component: nutritionListComponent, meta: { title: 'Nutrition Card List' }, },
        { path: '/products', component: productsCardListComponent, meta: { title: 'Products Card List' }, },
        { path: '/settings', component: configurationCardComponent, meta: { title: 'Configuration' }, },
        { path: '/subscription-management', component: subscriptionManagementComponent, meta: { title: 'Subscription Management' } },
        { path: '/payment-gateway', component: paymentGatewayComponent, meta: { title: 'Payment Gateway' } },
        { path: '/',  redirect: '/my-account' },
        { path: '/:pathMatch(.*)*', component: PageNotFoundComponent},

    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'FitHub';
    document.title = `${ baseTitle } | ${ to.meta["title"]}`;
    next();
});

export default router;
