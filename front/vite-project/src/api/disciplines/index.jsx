import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class DisciplinesService {
    static async getAll() {
        const response = await BaseService.getAll(API_ROUTES.disciplines, 100);
        return response;
    }

    static async getById(id) {
        const response = await BaseService.getById(API_ROUTES.disciplines, id);
        return response;
    }
}
