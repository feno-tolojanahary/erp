import http from "./config"
import { getData } from "./helper";

export default class BaseService {
    path: string;

    constructor(path: string) {
        this.path = path;
    }

    @getData()
    getAll() {
        return http.get(`${this.path}/`);
    }

    @getData()
    create() {
        return http.post(`${this.path}/`);
    }

    @getData()
    update(id: string) {
        return http.put(`${this.path}/${id}`);
    }

    @getData()
    delete(id: string) {
        return http.delete(`${this.path}/${id}`);
    }
}