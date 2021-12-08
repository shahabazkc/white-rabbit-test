import axios from 'axios';

// 'instance' of it
export const instance = axios.create({
    // .. where we make our configurations
    baseURL: 'http://localhost:5000/'
});

