import BaseService from "../base.service";

class AddressStateService extends BaseService {
    constructor() 
    {
        super('address-states')
    }
}

export default new AddressStateService();