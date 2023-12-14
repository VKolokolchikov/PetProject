import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class FAQService {

    static async getReasons() {
        const response = await BaseService.getBySlug(API_ROUTES.faq, "reason");
        return response;
    }
     static async getQuestion() {
        const response = await BaseService.getBySlug(API_ROUTES.faq, "question");
        return response;
    }

    static async getFaqDataBySlug(slug) {
        const METHOD_MAP = {
            "reason": FAQService.getReasons,
            "question": FAQService.getQuestion
        };
        return await METHOD_MAP[slug]()
    }
}
