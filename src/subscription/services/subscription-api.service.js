import http from "../../shared/services/http-common.js";

export class SubscriptionApiService {
    getAllPlans() {
        return http.get('/plans');
    }
}