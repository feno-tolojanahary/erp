import BaseService from "../base.service";

class AddressStateService extends BaseService {
    constructor() 
    {
        super('address-states')
    }
}
export interface Address {
    id: number,
    street: string,
    street2?: string,
    city: string,
    zip?: string,
    typeId: number,
    stateId: number,
    country: string,
    targetId: number,
    targetType: string,
    type?: any,
    state?: any
}

export default new AddressStateService();