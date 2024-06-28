import http from "@/shared/services/http-common.js";

export class ProductApiService {
    getProducts() {
        return http.get('/products');
    }
    getCategory(){
        return http.get('/categories');
    }
}