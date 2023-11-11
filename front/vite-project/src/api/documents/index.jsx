import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class DocumentsService {
    static async getAll(...params) {
        const response = await BaseService.getAll(API_ROUTES.documents, ...params);
        return response;
    }
}