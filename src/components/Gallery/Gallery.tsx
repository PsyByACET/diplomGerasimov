import s from "./Gallery.module.css"
import find_icon from "../../public/find.png";
import React, {useEffect, useState} from "react";
import Filters from "./Filters/Filters";
import Carts from "./Carts/Carts";
import {iModel} from "../../models/Model";
import {observer} from "mobx-react-lite";
import {fetchModels} from "../../api/ModelApi";


const Gallery = observer(() => {

    const [search, setSearch] = useState<string>("");
    const [models, setModels] = useState<Array<iModel>>([]);

    useEffect(() => {
        fetchModels( "", "public").then(data => setModels(data))
    }, [])

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetchModels(search, "public").then(data => setModels(data))
    }



    return (
        <div>
            <div className={s.container}>
                <div className={s.search_block}>
                    <img src={find_icon} className={s.find_icon} alt=""/>
                    <form action="" onSubmit={onSearchSubmit}>
                        <input type="text" value={search} onChange={e => setSearch(e.target.value)} name="name" className={s.input_search}  />
                    </form>
                </div>

                <div className={s.filters}>
                    <Filters nameText="Категория" nameBlock="category" categories_list={["Живетные", "Машины", "Люди"]}></Filters>
                    <Filters nameText="Формат"  nameBlock="format" categories_list={["3dx", "blend", "hz"]}></Filters>
                    <Filters nameText="Лицензия"  nameBlock="licence" categories_list={["CC0", "CC1", "SASI"]}></Filters>

                </div>
                    <Carts cartsProf={false} models = {models} ></Carts>
            </div>
        </div>
    );
})


export default Gallery