import http from "@/shared/services/http-common.js";

export class ExerciseApiService {
    getExercises() {
        return http.get('/exercises');
    }
    getRutine(){
        return http.get('/rutines');
    }
}