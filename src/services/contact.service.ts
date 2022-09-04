import BaseService from "./base.service";

class ContactService extends BaseService {
    
    constructor()
    {
        super('contacts')
    }

}

export default new ContactService();