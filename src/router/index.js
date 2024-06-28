import {createRouter, createWebHistory} from "vue-router";
import PageNotFoundComponent from "@/public/pages/page-not-found.component.vue";
import accountManagementComponent from "@/accountManagement/pages/account-management.component.vue";
import exercisesCardListComponent from "@/rutineManagement/pages/exercises-card-list.component.vue";
import productsCardListComponent from "@/productsManagement/pages/products-card-list.component.vue";
import subscriptionManagementComponent from "@/subscription/pages/subscription-management.component.vue";
import paymentGatewayComponent from "@/subscription/pages/payment-gateway.component.vue";
import nutritionsCardListComponent from "@/nutritionManagement/pages/nutritions-card-list.component.vue";
import SignInComponent from "@/iam/pages/sign-in.component.vue";
import SignUpComponent from "@/iam/pages/sign-up.component.vue";
import {authenticationGuard} from "@/iam/services/authentication.guard.js";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/my-account', component: accountManagementComponent, meta: { title: 'Account Management' }, },
        { path: '/exercises', component: exercisesCardListComponent, meta: { title: 'Exercise Card List' }, },
        { path: '/nutritions', component: nutritionsCardListComponent, meta: { title: 'Nutrition Card List' }, },
        { path: '/products', component: productsCardListComponent, meta: { title: 'Products Card List' }, },
        { path: '/subscription-management', component: subscriptionManagementComponent, meta: { title: 'Subscription Management' } },
        { path: '/payment-gateway', component: paymentGatewayComponent, meta: { title: 'Payment Gateway' } },
        { path: '/sign-in', name: 'sign-in', component: SignInComponent, meta: { title: 'Sign In' } },
        { path: '/sign-up', name: 'sign-up', component: SignUpComponent, meta: { title: 'Sign Up' } },
        { path: '/',  redirect: '/my-account' },
        { path: '/:pathMatch(.*)*', component: PageNotFoundComponent},

    ]
});

router.beforeEach((to, from, next) => {
    let baseTitle = 'FitHub';
    document.title = `${ baseTitle } | ${to.meta["title"]}`;
    authenticationGuard(to, from, next);
});

export default router;

