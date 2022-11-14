import BaseService from "./base.service";

class MeetingEventService extends BaseService {
    constructor()
    {
        super('meeting-events');
    }
}

export default new MeetingEventService();