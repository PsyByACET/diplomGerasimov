import s from "./Gallery.module.css"
import find_icon from "../../public/find.png";
import React, {useEffect, useState} from "react";
import Filters from "./Filters/Filters";
import Carts from "./Carts/Carts";
import {iModel} from "../../models/Model";
import {iUser} from "../../models/User";

const Gallery = ({models, users}:{models:Array<iModel>, users:Array<iUser>}) => {

    return (
        <div>
            <div className={s.container}>
                <div className={s.search_block}>
                    <img src={find_icon} className={s.find_icon} alt=""/>
                    <input name="name" className={s.input_search}  />
                </div>

                <div className={s.filters}>
                    <Filters nameText="Категория" nameBlock="category" categories_list={["Живетные", "Машины", "Люди"]}></Filters>
                    <Filters nameText="Формат"  nameBlock="format" categories_list={["3dx", "blend", "hz"]}></Filters>
                    <Filters nameText="Лицензия"  nameBlock="licence" categories_list={["CC0", "CC1", "SASI"]}></Filters>

                </div>
                    <Carts cartsProf={false} carts = {models}></Carts>
            </div>
        </div>
    );
}

function testCon() {
    console.log("88")
}

export default Gallery