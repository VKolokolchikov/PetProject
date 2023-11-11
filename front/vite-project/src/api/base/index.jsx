import axios from "axios";
import cookie from "react-cookies";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";

export default class BaseService {
    static async getAll(url, params) {
        const query_params = params ? params : {}
        const response = await axios.get(url, {
            params: {
                ...query_params
            }
        })
        return response;
    }

    static async getById(url, id) {
        const response = await axios.get(url + id)
        return response;
    }

    static sendData(url, data, contentType='application/json') {
        const response = axios.post(
            url, data,
            {headers: {
                    "Content-Type": contentType,
                    "X-CSRFTOKEN": cookie.load("csrftoken"),
                }},
            )
        return response
    }
}
