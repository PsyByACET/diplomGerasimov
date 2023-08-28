import s from "./Gallery.module.css"
import find_icon from "../../public/find.png";
import React, {useEffect, useState} from "react";
import Filters from "./Filters/Filters";
import Carts from "./Carts/Carts";
import {iLicense, iModel} from "../../models/Model";
import {observer} from "mobx-react-lite";
import {fetchModels} from "../../api/ModelApi";
import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {useModelStore} from "../../store/ModelStore";


const Gallery = observer(() => {

    const [sort, setSort] = useState<string>("alphabetup");
    const [search, setSearch] = useState<string>("");
    const [models, setModels] = useState<Array<iModel>>([]);
    const [deleteFilter, setDeleteFilter] = useState(false);
    const searchParams = new URLSearchParams(window.location.search);



    const location = useLocation();
    const modelStore = useModelStore()
    let navigate = useNavigate()
    const urlParams = new URLSearchParams(window.location.search);



    useEffect(() => {
        const licence = searchParams.getAll('licence');
        const category = searchParams.getAll('category');
        const format = searchParams.getAll('format');

        fetchModels({
            search: search,
            status: "public",
            categoryId:category||undefined,
            licenseId:licence||undefined,
            formatId:format||undefined,
            sort:sort
        }).then(data => setModels(data))

    }, [location.search, sort])



    const filterDelete = () => {
        navigate("/gallery")
    }
    const onSortAlphabet = () => {
        if (sort==="alphabetup"){
            setSort("alphabetdown")
        } else {
            setSort("alphabetup")
        }

    }
    const onSortPrice = () => {
        if (sort==="priceup"){
            setSort("pricedown")
        } else {
            setSort("priceup")
        }
    }

    const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        fetchModels({ search: search, status: "public"}).then(data => setModels(data))
    }

    return (
        <div>
            <div className={s.container}>
                <div>
                    <form className={s.search_block} action="" onSubmit={onSearchSubmit}>
                        <img src={find_icon} className={s.find_icon} alt=""/>
                        <input type="text" value={search} onChange={e => setSearch(e.target.value)} name="name" className={s.input_search}  />
                    </form>
                </div>

                <div className={s.filter_block}>
                    <div className={s.filters}>
                        <Filters nameText="Категория" nameBlock="category" categories_list={modelStore.categories}></Filters>
                        <Filters nameText="Формат"  nameBlock="format" categories_list={modelStore.formats}></Filters>
                        <Filters nameText="Лицензия"  nameBlock="licence" categories_list={modelStore.licenses}></Filters>
                        <div className={s.sort} onClick={onSortAlphabet}>по алфавиту
                            {sort=="alphabetup"?(
                                    <span> ↑</span>
                                ):
                                <></>
                            }
                            {sort=="alphabetdown"?(
                                    <span> ↓</span>
                                ):
                                <></>
                            }
                        </div>
                        <div className={s.sort}  onClick={onSortPrice}>по цене
                            {sort=="priceup"?(
                                    <span> ↑</span>
                                ):
                                <></>
                            }
                            {sort=="pricedown"?(
                                    <span> ↓</span>
                                ):
                                <></>
                            }</div>
                    </div>
                    {location.search?(
                            <button className={s.filter_button} onClick={filterDelete} > очистить</button>
                        ):
                        <></>
                    }
                </div>
                    <Carts cartsProf={false} models = {models} ></Carts>
            </div>
        </div>
    );
})


export default Gallery