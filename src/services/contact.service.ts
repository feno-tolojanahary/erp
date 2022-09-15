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
    createdBy: number;
    address?: Address,
    Company?: Company,
    
    createdAt?: Date;
    updatedAt?: Date;
}

export default new ContactService();