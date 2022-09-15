import BaseService from "./base.service";

class CompanyService extends BaseService {
    
    constructor()
    {
        super('companies')
    }

}

export interface Company {
    id: number,
    name: string,
    taxID?: string | null | undefined,
    phone?: string | null | undefined,
    mobile?: string | null | undefined,
    website?: string | null | undefined,
    addressId?: number,
    email: string,
    tagId: number,

    address?: any
}

export default new CompanyService();