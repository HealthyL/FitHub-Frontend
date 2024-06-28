import http from "@/shared/services/http-common.js";

export class NutritionApiService{
    getNutritions() {
        return http.get('/nutrition');
    }

    getClassification() {
        return http.get('/classification');
    }
    //CRUD
    createNutrition(nutrition) {
        return http.post('/nutrition', nutrition);
    }

    updateNutrition(nutrition) {
        return http.put(`/nutrition/${nutrition.id}`, nutrition);
    }

    deleteNutrition(id) {
        return http.delete(`/nutrition/${id}`);
    }
}