export interface iUser {
    id: number;
    name: string;
    mail: string;
    password: string;
    username: string,
    picture: string,
    basket: Array<number>,
    buy: Array<number>,
    likes: number,
    about: string,
}