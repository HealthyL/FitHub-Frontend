import http from "../../shared/services/http-common.js";

export class NutritionApiService{
    getAllDesayunos() {
        return http.get('/desayunos');
    }
    getAllAlmuerzos() {
        return http.get('/almuerzos');
    }
    getAllCenas(){
        return http.get('/cenas');
    }
}