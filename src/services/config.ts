import axios from "axios";

const _axios = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'content-type': 'application/json' },
});

export default _axios;