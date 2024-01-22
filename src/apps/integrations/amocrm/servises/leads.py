from apps.integrations.amocrm.connector import AmoCRMWrapper


class LeadsHandler:
    base_path = "/api/v4/leads"
    wrapper_request = AmoCRMWrapper()

    def get_by_id(self, id_: int):
        response = self.wrapper_request.get(
            f"{self.base_path}/{id_}"
        )
        return response.json()

    def get_all(self):
        response = self.wrapper_request.get(self.base_path)
        return response.json()

    def create_lead(self, data):
        response = self.wrapper_request.post(
            self.base_path,
            json=data,
        )
        return response

    def create_complex_lead(self, data):
        response = self.wrapper_request.post(
            f"{self.base_path}/complex",
            json=data,
        )
        return response
