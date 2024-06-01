import http from "../../shared/services/http-common.js";

export class RutineApiService {
  getAllRutines() {
    return http.get('/rutinas');
  }
}