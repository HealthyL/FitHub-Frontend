import http from "../../shared/services/http-common.js";

export class AuthenticationService {
    signIn(signInRequest) {
        return http.post('/users', signInRequest);
    }

    signUp(signUpRequest) {
        return http.post('/authentication/sign-up/', signUpRequest);
    }
    getObjectives(){
        return http.get('/objectives');
    }
    updateUser(id, data) {
        return http.put(`/users/${id}`, data);
    }
    getGenders() {
        return http.get('/genders');
    }

}