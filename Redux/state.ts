export interface iState {
  model_cart: Array<iModel>;
  users: Array<iUser>;
}


export interface iModel {
  id: number;
  name: string;
  categories: Array<string>;
  formats: Array<string>;
  licence: string;
  price: number;
  tags: Array<string>;
  link_photo: string;
  artist: number;
  description: string;
}
export interface iUser {
  id: number;
  name: string;
  mail: string;
  password: string;
  username: string,
  picture: string,
  basket: Array<number>,
  buy: Array<number>,
}

let state: iState = {
  model_cart: [
    {
      id: 1,
      name: "ferari",
      categories: ["Машины", "Люкс"],
      formats: ["3dx", "blend","jz"],
      licence: "CC0",
      price: 220,
      tags: ["car","realistic","red"],
      link_photo: "https://wallpapershome.ru/images/pages/pic_h/18437.jpg",
      artist: 3,
      description: "Эта трехмерная модель кота - высококачественный продукт, созданный профессиональным 3D-художником, который может быть приобретен на площадке по продаже 3D-моделей. Модель имеет детальную геометрию и отличное текстурирование , что делает ее идеальным выбором для игровых проектов, анимации или визуализации. Модель может быть экспортирована в различные форматы, такие как FBX, OBJ или STL, и может быть легко импортирована в различные 3D-программы. Благодаря своей универсальности, модель кота может быть использована в различных проектах и добавит профессиональный вид вашему творческому портфолио."

    },
    {
      id: 2,
      name: "audim2oi",
      categories: ["Машины", "Люкс"],
      formats: ["3dx", "blend"],
      licence: "CC0",
      price: 250,
      tags: ["car","realistic","different tags"],
      link_photo: "http://pristor.ru/wp-content/uploads/2018/12/Классные-картинки-и-обои-автомобиля-Audi-R8-подборка-25-фото-13.jpg",
      artist: 2,
      description: "описание",
    },
    {
      id: 3,
      name: "audim2oi",
      categories: ["Машины", "Люкс"],
      formats: ["3dx", "blend"],
      licence: "CC0",
      price: 250,
      tags: ["car","realistic","different tags"],
      link_photo: "http://pristor.ru/wp-content/uploads/2018/12/Классные-картинки-и-обои-автомобиля-Audi-R8-подборка-25-фото-13.jpg",
      artist: 2,
      description: "описание",
    },
    {
      id: 4,
      name: "audim2oi",
      categories: ["Машины", "Люкс"],
      formats: ["3dx", "blend"],
      licence: "CC0",
      price: 250,
      tags: ["car","realistic","different tags"],
      link_photo: "http://pristor.ru/wp-content/uploads/2018/12/Классные-картинки-и-обои-автомобиля-Audi-R8-подборка-25-фото-13.jpg",
      artist: 2,
      description: "описание",
    },
    {
      id: 5,
      name: "audim2fasfsdoi",
      categories: ["Машины", "Люкс"],
      formats: ["3dx", "blend"],
      licence: "CC0",
      price: 2520,
      tags: ["car","realistic","different tags"],
      link_photo: "http://pristor.ru/wp-content/uploads/2018/12/Классные-картинки-и-обои-автомобиля-Audi-R8-подборка-25-фото-13.jpg",
      artist: 2,
      description: "описание",
    },
    {
      id: 6,
      name: "САСИ",
      categories: ["Машины", "Люкс"],
      formats: ["3dx", "blend"],
      licence: "CC0",
      price: 2520,
      tags: ["car","realistic","different tags"],
      link_photo: "http://pristor.ru/wp-content/uploads/2018/12/Классные-картинки-и-обои-автомобиля-Audi-R8-подборка-25-фото-13.jpg",
      artist: 2,
      description: "описание",
    },
  ],

  users: [
    {
      id: 1,
      name: "Alexey Gerasimov",
      mail: "web-47@mail.ru",
      password: "testPass",
      username: "leha",
      picture: "https://otkritkis.com/wp-content/uploads/2022/06/rcc02.png",
      basket: [2,1,5],
      buy: [3],

    },
    {
      id: 2,
      name: "Danilov Dmitry",
      mail: "damilov@mail.ru",
      password: "testPass",
      username: "AdrenalinSuper",
      picture: "https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg",
      basket: [],
      buy: [],
    },
    {
      id: 3,
      name: "Vladislav Licheshkov",
      mail: "flagogaik@mail.ru",
      password: "testPass",
      username: "Vlagogaik",
      picture: "https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg",
      basket: [],
      buy: [],
    },
  ],

};
export default state;
