import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const registration = async ({mail, password, name, username}:{mail:string, password:string, name:string, username:string}) => {
    const { data } = await $host.post('api/registration', {mail, password, role:'ADMIN', name, username})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
// export const login = async ({mail, password, name, username}:{mail:string, password:string, name:string, username:string}) => {
//     const response = await $host.post('api/login', {mail, password, name, username})
// }
export const login = async ({mail, password}:{mail:string, password:string}) => {
    const { data } = await $host.post("api/login", { mail, password });
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    const { data } = await $authHost.post("api/registration");
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}