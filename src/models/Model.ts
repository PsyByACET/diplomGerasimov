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
    status: string;
    status_des: string,
    artist: iUser;
    category: iCategory;
    license: iLicense
    model_formats: iModelFormats[]
}

export interface iModelFormats {
    id: number,
    modelId: number,
    format_models: iFormatModel[]
}
export interface iFormatModel {
    id: number,
    modelFormatId: number,
    formatId: number,
    idformat: IIdFormat
}
export interface IIdFormat {
    id: number
    name: string
}

export interface iLicense {
    id: number;
    name: string;
}

export interface iCategory {
    id: number;
    name: string;
}

export interface iFormat{
    id: number;
    name: string;
}

