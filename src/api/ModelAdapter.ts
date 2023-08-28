import {iModel} from "../models/Model";
import {iBasketItems} from "../models/Basket_items";


export class ModelAdapter {
    static transformModelItem(modelItem: any): iModel {
        return {
            id: modelItem.id,
            name: modelItem.name,
            link_photo: modelItem.link_photo,
            description: modelItem.description,
            tags: modelItem.tags,
            price: modelItem.price,
            likes: modelItem.likes,
            link_download: modelItem.link_download,
            model3d: modelItem.model3d,
            size: modelItem.size,
            artist: modelItem.artist,
            status: modelItem.status,
            status_des: modelItem.status_des,
            license:  modelItem.license,
            category: modelItem.category,
            model_formats: modelItem.model_formats
        };
    }
    static transformModelArray(data: any): iModel[] {
        return data.map((item: any) => this.transformModelItem(item))
    }
    static transformBasketItem(userItem: any): iBasketItems {
        return {
            id: userItem.id,
            basketId: userItem.basketId,
            idmodel: userItem.idmodel,
        };
    }
    static transformBasketArray(data: any): iBasketItems[] {
        return data.map((item: any) => this.transformBasketItem(item))
    }



}