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
    getByCompany(companyId: number) {
        return http.get(`${this.path}/${companyId}`);
    }


    @getData()
    create(data: any) {
        return http.post(`${this.path}/`, data);
    }

    @getData()
    update(data: any) {
        return http.put(`${this.path}/${data?.id}`, data);
    }

    @getData()
    delete(id: string) {
        return http.delete(`${this.path}/${id}`);
    }
}