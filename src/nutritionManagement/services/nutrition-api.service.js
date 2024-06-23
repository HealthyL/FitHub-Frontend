import axios from "axios";

const http = axios.create({
    baseURL: 'https://my-json-server.typicode.com/HealthyL/Datos-healty-',
});
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

    // Eliminar un desayuno por ID
    deleteDesayuno(id) {
        return http.delete(`/desayunos/${id}`);
    }

    // Actualizar un desayuno por ID
    updateDesayuno(id, nutrition) {
        return http.put(`/desayunos/${id}`, nutrition);
    }
    addDesayuno(nutrition) {
        return http.post('/desayunos', nutrition);
    }

    // Agregar un almuerzo nuevo
    addAlmuerzo(nutrition) {
        return http.post('/almuerzos', nutrition);
    }
    updateAlmuerzo(id, nutrition) {
        return http.put(`/almuerzos/${id}`, nutrition);
    }

    // Eliminar una cena por ID
    deleteCena(id) {
        return http.delete(`/cenas/${id}`);
    }

    // Actualizar una cena por ID
    updateCena(id, nutrition) {
        return http.put(`/cenas/${id}`, nutrition);
    }
    addCena(nutrition) {
        return http.post('/cenas', nutrition);
    }
}