

export interface iModel {
    id: number;
    name: string;
    licence: string;
    link_photo: string;
    id_artist: number,
    description: string;
    categories: Array<string>;
    formats: Array<string>;
    tags: Array<string>;
    price: number;
    like_count: number;
    link_download: string;
    size: string;
}

