import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"
import {iModel} from "../models/Model";

export const registration = async ({mail, password, name, username}:{mail:string, password:string, name:string, username:string}) => {
    const { data } = await $host.post('api/registration', {mail, password, role:'ADMIN', name, username})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
// export const login = async ({mail, password, name, username}:{mail:string, password:string, name:string, username:string}) => {
//     const response = await $host.post('api/login', {mail, password, name, username})
// }
export const fetchLicense = async () => {
    const { data } = await $host.get('api/license/')
    return data
}
export const fetchModels = async () => {
    const { data } = await $host.get('api/model/')
    return data
}

export const createModel = async (model:any) => {

    const formData = new FormData();
    for (let key in model) {
        if (key === "tags") {
            for (let i = 0; i < model.tags.length; i++) {
                formData.append(key, model.tags[i]);
            }
        } else {
            formData.append(key, model[key]);
        }
    }
    console.log(model)
    const {data} = await $host.post('api/model', formData)
    return data
}

export const check = async () => {
    const { data } = await $authHost.post("api/registration");
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}