import meetingEventService, { MeetingEvent } from "@services/meetingEvent.service";

export const getDataMeetingByContact = async (contactId: number): Promise<MeetingEvent[]> => {
    let meetings: MeetingEvent[] = ((await meetingEventService.getByContact(contactId as number)) as unknown) as MeetingEvent[];
    return meetings;
}

export const getDataMeetingByCompany = async (): Promise<MeetingEvent[]> => {
    const companyId: number = (localStorage.getItem('companyId') as unknown) as number;
    const meetings: MeetingEvent[] = ((await meetingEventService.getByCompany(companyId)) as unknown) as MeetingEvent[];
    return meetings;
}