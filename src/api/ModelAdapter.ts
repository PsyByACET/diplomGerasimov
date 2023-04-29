import {iModel} from "../models/Model";


export class ModelAdapter {
    static transform(modelItem: any): iModel {
        return {
            id: modelItem.id,
            name: modelItem.name,
            licence: modelItem.license,
            link_photo: modelItem.link_photo,
            id_artist: modelItem.id_artist,
            description: modelItem.description,
            categories: modelItem.categories,
            formats: modelItem.formats,
            tags: modelItem.tags,
            price: modelItem.price,
            like_count: modelItem.like_count,
            link_download: modelItem.link_download,
            size: modelItem.size,
        };
    }
    static transformArray(data: any): iModel[] {
        return data.data.map((item: any) => this.transform(item))
    }


}