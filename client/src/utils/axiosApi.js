import axios from 'axios';

const instance = axios.create({
    baseURL: '/api',
    responseType: 'blob',
});

export default instance;