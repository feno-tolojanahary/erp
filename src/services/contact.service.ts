import BaseService from "./base.service";
import { Company } from "@services/company.service";
import { Address } from "@services/address/addressState.service";
import { getData } from "./helper";
import http from './config';
class ContactService extends BaseService {
    
    constructor()
    {
        super('contacts')
    }

    @getData()
    create(data: any) {
        return http.post(`${this.path}/create`, data);
    }

    @getData()
    update(data: any) {
        return http.put(`${this.path}/update/${data?.id}`, data);
    }

    @getData()
    getById(id: string) {
        return http.get(`${this.path}/getById/${id}`);
    }
}

export interface Contact {
    id: number;
    name: string;

    jobPosition: string | null;
    phone: string | null;
    mobile: string | null;
    email: string | null;
    website: string | null;
    companyId: number | null;
    addressId?: number | null;
    tagId?: number | null;
    titleId?: number | null;
    createdBy: number;
    address?: Address,
    Company?: Company,
    imageName?: string | null;

    title?: any,
    tag?: any,
    
    createdAt?: Date;
    updatedAt?: Date;
}

export default new ContactService();