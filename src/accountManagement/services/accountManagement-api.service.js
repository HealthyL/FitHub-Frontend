import http from "@/shared/services/http-common.js";

export class AccountManagementApiService{
    getDataUsers() {
        return http.get('/users');
    }
    getObjectives(){
        return http.get('/objectives');
    }
    updateUser(id, data) {
        return http.put(`/users/${id}`, data);
    }
}