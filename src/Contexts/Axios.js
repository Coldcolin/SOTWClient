import axios from "axios"

export const instance = axios.create({
    baseURL: 'http://localhost:4400/api/',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'} 
});