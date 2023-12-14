import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class AboutMeService {
    static async getAll(...params) {
        const response = await BaseService.getAll(API_ROUTES.about, ...params);
        return response;
    }
}
