
export interface InputProps {
    type: 'text' | 'radio-group' | 'email' | 'password' | 'select' | 'checkbox'
    name: string
    value: string | number | boolean
    validations: Validation[]
    placeholder?: string
    typeValue?: 'string' | 'boolean'
    label?: string
    options?: Opt[]
}

export interface Opt {
    value: string | number
    desc: string
}

export interface Validation {
    type: 'required' | 'isEmail' | 'minLength' | 'isTrue'
    value?: string | number | boolean
    message: string
}

export const forms: { [x: string]: InputProps[] } =
{
    login: [
        {
            type: "text",
            name: "name",
            placeholder: "Full Name",
            value: "",
            validations: [
                {
                    type: "minLength",
                    value: 3,
                    message: "Min. 3 characters",
                },
                {
                    type: "required",
                    message: "Full Name is required"
                },
            ],

        },
        {
            type: "email",
            name: "email",
            placeholder: "E-mail",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Email is required"
                },
                {
                    type: "isEmail",
                    message: "Email no valid"
                }
            ],

        },
        {
            type: "password",
            name: "password",
            placeholder: "Password",
            value: "",
            validations: [
                {
                    type: "required",
                    message: "Password is required"
                }
            ],

        },
        {
            type: "select",
            name: "rol",
            label: "Select an option: ",
            value: "",
            options: [
                {
                    value: "admin",
                    desc: "Admin",
                },
                {
                    value: "user",
                    desc: "User"
                },
                {
                    value: "super-admin",
                    desc: "Super Admin"
                }
            ],
            validations: [
                {
                    type: "required",
                    message: "Rol is required"
                }
            ]
        },
        {
            type: "radio-group",
            name: "gender",
            label: "Gender: ",
            value: "",
            options: [
                {
                    value: 'man',
                    desc: "Man"
                },
                {

                    value: "woman",
                    desc: "Woman"
                },
                {

                    value: "other",
                    desc: "Other"
                },
            ],
            validations: [
                {
                    type: "required",
                    message: "Gender is required"
                }
            ]
        },
        {
            type: "checkbox",
            name: "terms",
            typeValue: "boolean",
            label: "Terms and Conditions",
            value: false,
            validations: [
                {
                    type: "isTrue",
                    message: "Accept the terms!"
                }
            ]
        },
    ],
}