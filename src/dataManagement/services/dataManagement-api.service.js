import http from "../../shared/services/http-common.js";

export class DataManagementApiService {
    getDataUsers() {
        return http.get('/users');
    }
    getObjectives(){
        return http.get('/objectives');
    }
    updateUserData(userId, userData) {
        return http.put(`/users/${userId}`, userData);
    }
}