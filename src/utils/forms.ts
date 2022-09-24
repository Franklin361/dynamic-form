export const forms =
{
    "login": [
        {
            "type": "text",
            "name": "name",
            "placeholder": "Full Name",
            "value": "",
            "validations": [
                {
                    "type": "minLength",
                    "value": 3,
                    "message": "Min. 3 characters",
                },
                {
                    "type": "required",
                },
            ],

        },
        {
            "type": "email",
            "name": "email",
            "placeholder": "example@example.com",

            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Email is required"
                },
                {
                    "type": "email",
                    "message": "Email no valid"
                }
            ],

        },
        {
            "type": "password",
            "name": "password",
            "placeholder": "************",

            "value": "",
            "validations": [
                {
                    "type": "required",
                    "message": "Password is required"
                }
            ],

        },
        {
            "type": "radio-group",
            "name": "gender",
            "label": "Gender: ",
            "value": "",
            "options": [
                {
                    "id": 1,
                    "value": "man",
                    "desc": "Man"
                },
                {
                    "id": 2,
                    "value": "woman",
                    "desc": "Woman"
                },
                {
                    "id": 3,
                    "value": "other",
                    "desc": "Other"
                },
            ],
            "validations": [
                {
                    "type": "required"
                }
            ]
        },
        {
            "type": "select",
            "name": "rol",
            "label": "Select an option: ",
            "value": "",
            "options": [
                {
                    "id": "admin",
                    "desc": "Admin"
                },
                {
                    "id": "user",
                    "desc": "User"
                },
                {
                    "id": "super-admin",
                    "desc": "Super Admin"
                }
            ],
            "validations": [
                {
                    "type": "required"
                }
            ]
        },

        {
            "type": "checkbox",
            "name": "terms",
            "typeValue": "boolean",
            "label": "Terms and Conditions",
            "value": false,
            "validations": [
                {
                    "type": "isTrue",
                    "message": "You must accept the terms!"
                }
            ]
        },
    ],
}