import {iModel} from "../models/Model";


export class ModelAdapter {
    static transform(modelItem: any): iModel {
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
            userId: modelItem.userId,
            categoryId: modelItem.categoryId,
            licenseId:  modelItem.licenseId
        };
    }
    static transformArray(data: any): iModel[] {
        return data.data.map((item: any) => this.transform(item))
    }


}