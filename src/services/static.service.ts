import http from "./config"
import { getData } from "./helper";

export default class StaticService {

    @getData()
    getAll(path: string) {
        return http.get(`/${path}`);
    }
    
}