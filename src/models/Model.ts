

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
    userId: number;
    categoryId: number;
    licenseId: number
}

