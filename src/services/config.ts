import axios from "axios";

const _axios = axios.create({
    baseURL: 'http://localhost:8000',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
});

export default _axios;