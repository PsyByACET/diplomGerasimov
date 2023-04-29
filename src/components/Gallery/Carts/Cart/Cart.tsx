import s from "./Cart.module.css"
import React, {useEffect, useState} from "react";
import ModalModel from "../../../ModalModel/ModalModel";
import {iModel} from "../../../../models/Model";
import {iUser} from "../../../../models/User";
import {loadAllUsers} from "../../../../api/UserRest";
const Cart = ({cart}:{cart:iModel}) => {

    const [modalActive, setModalActive] = useState(false)
    // const [usersToShow, setUsersToShow] = useState<Array<iUser>>([]);

    // useEffect(() => {
    //     async function fetchUsers() {
    //         const newUsers = await loadAllUsers();
    //         setUsersToShow(newUsers)
    //     }
    //     fetchUsers().catch(console.error)
    // }, []);


    return (
        <div>
            <div onClick={()=> openCart()}  className={s.cart}>
                <img className={s.immg} src={cart.link_photo} alt=""/>
                <div className={s.name_and_price}>
                    <span className={s.name}>{cart.name}</span>
                    <span className={s.name}>{cart.id_artist}</span>
                    <span className={s.price}>{cart.price}руб</span>
                </div>
            </div>
            <ModalModel cart={cart} active={modalActive} setActive={setModalActive}></ModalModel>
        </div>
    );

    function openCart() {
        setModalActive(true);
        document.body.style.overflow="hidden"
    }


}
export default Cart