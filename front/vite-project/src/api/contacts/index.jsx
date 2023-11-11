import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class ContactService {
    static async getAll(...params) {
        const response = await BaseService.getAll(API_ROUTES.contacts, ...params);
        return response;
    }
}