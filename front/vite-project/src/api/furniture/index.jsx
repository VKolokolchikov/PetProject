import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class FurnitureService {
    static async getElement(slug, id) {
        const url = `${API_ROUTES.furniture}${slug}/`
        const response = await BaseService.getById(url, id);
        return response;
    }

    static async getBySlug(slug) {
        const response = await BaseService.getBySlug(API_ROUTES.furniture, slug);
        return response;
    }
    static async getAllTypes() {
        const response = await BaseService.getAll(API_ROUTES.furnitureTypes)
        return response;
    }
}
