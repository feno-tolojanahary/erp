import BaseService from "./base.service";

class CompanyService extends BaseService {
    
    constructor()
    {
        super('companies')
    }

}

export default new CompanyService();