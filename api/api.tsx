import axios from 'axios';
import { getToken } from './storage';
var host = "http://1d82-170-79-48-77.ngrok.io";
var api = axios.create({
    baseURL: host + '/'
});
api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);
api.interceptors.request.use( async config => {
    const token = await getToken();
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export{
    api
};