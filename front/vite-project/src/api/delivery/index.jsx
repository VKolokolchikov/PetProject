import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class DeliveryService {
    static async getAll(...params) {
        const response = await BaseService.getAll(API_ROUTES.delivery, ...params);
        return response;
    }
}
