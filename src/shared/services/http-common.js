import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const http=axios.create({
    baseURL: API_BASE_URL,header:{ //header aplica para todos los proyectos que usan json
        'Content-type':'application/json',
    }
})
export default http;