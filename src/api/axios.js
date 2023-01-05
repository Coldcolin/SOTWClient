import axios from 'axios';
// const BASE_URL = 'https://localhost:3500/';
const BASE_URL = 'https://sotw-app.onrender.com';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});