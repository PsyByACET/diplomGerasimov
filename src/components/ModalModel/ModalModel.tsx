import s from "./ModalModel.module.css"
import {iUser} from "../../models/User";
import {iModel} from "../../models/Model";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {loadAllUsers} from "../../api/UserRest";
import CanvasModel from "../Landing/CanvasModel";
import {observer} from "mobx-react-lite";
import ModelStore from "../../store/ModelStore";

const ModalModel = observer( ({active,setActive,cart}:{active:boolean,setActive:React.Dispatch<React.SetStateAction<boolean>>,cart:iModel}) => {
    const tagsElement = cart.tags.map(t => <div key={t} className={s.tag}>{t}</div>);
    const [usersToShow, setUsersToShow] = useState<Array<iUser>>([]);
    let l = ModelStore.licenses

    useEffect(() => {
        async function fetchUsers() {
            const newUsers = await loadAllUsers();
            setUsersToShow(newUsers)
        }
        fetchUsers().catch(console.error)
    }, []);

    let pathLink = "http://localhost:5001/rar/" + cart.link_download

    let path = "/user/" + cart.userId;
    let user = usersToShow[cart.userId-1];
    // let user usersToShow.map(u => u.id == cart.id_artist)

    return (

            <div className={s.modal_content} onClick={e => e.stopPropagation()} >
                <div className={s.img_dis_comm}>
                    <div className={s.photo}>
                        <CanvasModel cart={cart} />
                    </div>
                    <div className={s.name_model}>
                        <span>{cart.name}</span>
                        <br/>
                        <span >{cart.categoryId}</span>
                    </div>
                    {/*<NavLink to={path} className={s.artist}>*/}
                    {/*    <img src={user.picture} alt=""/>*/}
                    {/*    <span>{user.username}</span>*/}
                    {/*</NavLink>*/}

                    <div className={s.description}>
                        {cart.description}
                    </div>
                    <div className={s.tags}>
                        {tagsElement}
                    </div>
                </div>

                <div className={s.payment}>
                    {cart.price === 0 ?(
                        <div className={s.cart_price}>
                            <span>Бесплатно</span>
                            <a href={pathLink}><button type='submit'>Скачать</button></a>
                        </div>
                    ):
                        <div className={s.cart_price}>
                            <span>{cart.price} руб</span>
                            <a href={pathLink}><button type='submit'>Купить</button></a>
                        </div>
                    }

                    <div className={s.cart_info}>
                        <div className={s.rate}>
                            wip
                        </div>
                        <div className={s.license}>
                            <span className={s.zag}>Лицензия</span>
                            <span>{l[cart.licenseId-1].name}</span>
                        </div>
                        <div className={s.formats}>
                            <span className={s.zag}>Форматы</span>
                            <br/>
                            <span>ds</span>
                        </div>
                    </div>
                    <div className={s.btn_swap}>
                        Перейти к видеогайду
                        {/*<div>{artist.id} <span>{artist.username}</span></div>*/}

                        {usersToShow[1]?.id}

                    </div>
                </div>
            </div>

    );



})
export default ModalModel