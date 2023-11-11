import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class TeacherService {
    static async getAll(...params) {
        const response = await BaseService.getAll(API_ROUTES.teachers, ...params);
        return response;
    }

    static async getById(id) {
        const response = await BaseService.getById(API_ROUTES.teachers, id);
        return response;
    }
}
