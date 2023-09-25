import { IData } from '../../Types';

export const data: IData[] = [
    {
        type: "text",
        placeholder: "Enter Email",
        id: "email",
        name: "email",
        label: "email",
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
        type: "password",
        placeholder: "Enter Password",
        id: "psw",
        name: "password",
        label: "password",
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

    },
    {
        type: "password",
        placeholder: "Repeat Password",
        id: "psw-repeat",
        name: "pswrepeat",

        label: "Repeat Password",
        options: {
            required: {
                value: true,
                message: "This field is required"
            }, minLength: {
                value: 6,
                message: "minimum 6 symbols"
            },
            maxLength: {
                value: 10,
                message: "maximum 10 symbols"
            },


        },

    }


]