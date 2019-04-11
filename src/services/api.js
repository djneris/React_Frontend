import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-be.herokuapp.com',
});

export default api;