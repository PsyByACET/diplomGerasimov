import {iUser} from "./User";


export interface iModel {
    id: number;
    name: string;
    link_photo: string;
    description: string;
    tags: Array<string>;
    price: number;
    likes: number;
    link_download: string;
    model3d: string;
    size: number;
    artist: iUser;
    categoryId: number;
    license: iLicense
}

export interface iLicense {
    id: number;
    name: string;
}

