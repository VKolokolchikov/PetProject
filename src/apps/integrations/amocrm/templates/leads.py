def prepare_lead_data(
        title: str,
        name: str,
        phone: str
):
    return [
        {
            "name": title,
            "created_by": 0,
            "_embedded": {
                "contacts": [
                    {
                        "first_name": name,
                        "custom_fields_values": [
                            {
                                "field_code": "PHONE",
                                "values": [
                                    {
                                        "enum_code": "WORK",
                                        "value": phone
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    ]
