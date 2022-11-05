import contactService, { Contact } from '@services/contact.service';


export const getDataContact = async (contactId: string | undefined) => {
    if (!contactId) return {};
    const contact: Contact = ((await contactService.getById(contactId as string)) as unknown) as Contact;
    return {
        contact,
        company: contact.Company,
        address: contact.address
    }
}