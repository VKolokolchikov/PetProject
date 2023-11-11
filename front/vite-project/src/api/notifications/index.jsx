import API_ROUTES from "../apiRoutes.js"

import BaseService from "../base/index.jsx";


export default class NotificationsService {
    static sendData(data, setSuccess, setError) {
        BaseService.sendData(API_ROUTES.notifications, data)
            .then(response => {
                setSuccess(true)
                })
            .catch(error => {
                let errorData = {data: {}, message: error.message}
                if (error.response) {
                    errorData.data = error.response.data
                }
                setError({...errorData})
            }).finally(() => {
            })
    }
}