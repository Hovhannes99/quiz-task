import { RegisterOptions } from 'react-hook-form';

export interface Inputs {
    email: string;
    password: string;
    pswrepeat: string;
}

export interface IData {
    type: string,
    placeholder: string,
    id: string,
    name: keyof Inputs,
    label: string,
    options: RegisterOptions
}


export interface IQuestions  {
    id: number,
    content: string,
    answers: {
        id: number,
        text: string,
        correct: boolean
    }[],
}
