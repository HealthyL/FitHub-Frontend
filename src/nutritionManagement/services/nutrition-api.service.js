import http from "@/shared/services/http-common.js";

export class NutritionApiService{
    getNutritions() {
        return http.get('/nutritions');
    }

    getClassification() {
        return http.get('/classification');
    }
    //CRUD
    createNutrition(nutrition) {
        return http.post('/nutritions', nutrition);
    }

    updateNutrition(nutrition) {
        return http.put(`/nutritions/${nutrition.id}`, nutrition);
    }

    deleteNutrition(id) {
        return http.delete(`/nutritions/${id}`);
    }
}