import s from "./ModalModel.module.css"
import {iUser} from "../../models/User";
import {iModel} from "../../models/Model";
import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {loadAllUsers} from "../../api/UserRest";

const ModalModel = ({active,setActive,cart}:{active:boolean,setActive:React.Dispatch<React.SetStateAction<boolean>>,cart:iModel}) => {
    const tagsElement = cart.tags.map(t => <div className={s.tag}>{t}</div>);

    const [usersToShow, setUsersToShow] = useState<Array<iUser>>([]);
    useEffect(() => {
        async function fetchUsers() {
            const newUsers = await loadAllUsers();
            setUsersToShow(newUsers)
        }
        fetchUsers().catch(console.error)
    }, []);


    let path = "/user/" + cart.id_artist;
    let user = usersToShow[cart.id_artist-1];
    // let user usersToShow.map(u => u.id == cart.id_artist)

    console.log(usersToShow)
    return (
        <div className={s.modal + " " + `${active? s.active : "" }` } onClick={()=> closeCart()}>
            <div className={s.modal_content} onClick={e => e.stopPropagation()} >
                <div className={s.img_dis_comm}>
                    <div className={s.photo}>
                        <img src={cart.link_photo} alt=""/>
                    </div>
                    <div className={s.name_model}>
                        <span>{cart.name}</span>
                        <br/>
                        <span >{cart.categories}</span>
                    </div>
                    <NavLink to={path} className={s.artist}>
                        <img src={user.picture} alt=""/>
                        <span>{user.username}</span>
                    </NavLink>

                    <div className={s.description}>
                        {cart.description}
                    </div>
                    <div className={s.tags}>
                        {tagsElement}
                    </div>
                </div>
                <div className={s.payment}>
                    <div className={s.cart_price}>
                        <span>{cart.price}руб</span>
                        <button type='submit'>Купить</button>
                    </div>
                    <div className={s.cart_info}>
                        <div className={s.rate}>
                            wip
                        </div>
                        <div className={s.license}>
                            <span className={s.zag}>Лицензия</span>
                            <span>{cart.licence}</span>
                        </div>
                        <div className={s.formats}>
                            <span className={s.zag}>Форматы</span>
                            <br/>
                            <span>{cart.formats}</span>
                        </div>
                    </div>
                    <div className={s.btn_swap}>
                        Перейти к видеогайду
                        {/*<div>{artist.id} <span>{artist.username}</span></div>*/}

                        {usersToShow[1]?.id}

                    </div>
                </div>
            </div>
        </div>
    );

    function closeCart() {
        setActive(false);
        document.body.style.overflow="auto";
    }

}
export default ModalModel