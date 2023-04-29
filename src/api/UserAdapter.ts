
import {iModel} from "../models/Model";
import {iUser} from "../models/User";



export class UserAdapter {
    static transform(userItem: any): iUser {
        return {
            id: userItem.id,
            name: userItem.name,
            mail: userItem.mail,
            password: userItem.password,
            username: userItem.username,
            picture: userItem.picture,
            basket: userItem.basket,
            buy: userItem.buy,
            likes: userItem.likes,
            about: userItem.about
        };
    }
    static transformArray(data: any): iUser[] {
        return data.data.map((item: any) => this.transform(item))
    }

}