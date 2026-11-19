import axios from 'axios';

const api = axios.create({
    baseURL: "https://backend-crm-7ec6.onrender.com/"
})
export default api;