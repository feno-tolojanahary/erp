
export const CONTACT_PATH = "/contact";
export const CONTACT_CREATE_PATH = "/contact/create";
export const CONTACT_EDIT_PATH = "/contact/edit/:id";
export const CONTACT_DETAILS_PATH = "/contact/details/:id";

export const getPath = (path: string, param: string, paramName: string = "id"): string => {
    return path.replace(`:${paramName}`, param);
}