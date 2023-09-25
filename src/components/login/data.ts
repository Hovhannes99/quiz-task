import { IData } from './../../Types';



export const data: IData[] = [
    {
        label: "email",
        type: "text",
        placeholder: "Enter Username",
        name: "email",
        id: "email",
        options: {
            required: {
                value: true,
                message: "This field is required"
            }, minLength: {
                value: 5,
                message: "Minimum 5 symbols"
            },
            pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Input correct email"
            }
        }
    },
    {
        label: "Password",
        type: "password",
        placeholder: "Enter Password",
        name: "password",
        id: 'Password',
        options: {
            required: {
                value: true,
                message: "This field is required"
            },
            minLength: {
                value: 6,
                message: "Minimum 6 symbols"
            },
            maxLength: {
                value: 10,
                message: "Maximum 10 symbols"
            },

        },
    }
]   