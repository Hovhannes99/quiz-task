import { LoginPage, RegistrationPage } from "../../pages";
import TestComponent from "../../pages/route-quiz";


enum PUBLIC_PATHS {
    LOGIN = '/login',
    REGISTRATION = '/registration',
}

enum PRIVATE_PATHS {
    MAIN = '/',

}

export const publicRouter = [
    { component: RegistrationPage, path: PUBLIC_PATHS.REGISTRATION, index: false },
    { component: LoginPage, path: '*', },
    { component: LoginPage, path: PUBLIC_PATHS.LOGIN, }

]

export const privateRouter = [
    { component: TestComponent, path: PRIVATE_PATHS.MAIN, index: true },
    { component: TestComponent, path: '*' },

]