import s from "./Cart.module.css"
import React, {useState} from "react";
import ModalModel from "../../../ModalModel/ModalModel";
import {iModel, iUser} from "../../../../Redux/state";
const Cart = ({cart,artist}:{cart:iModel,artist:iUser}) => {

    const [modalActive, setModalActive] = useState(false)
    let tet = "lock"+s
    return (
        <div>
            <div onClick={()=> openCart()}  className={s.cart}>
                <img className={s.immg} src={cart.link_photo} alt=""/>
                <div className={s.name_and_price}>
                    <span className={s.name}>{cart.name}</span>
                    <span className={s.price}>{cart.price}руб</span>
                </div>
            </div>
            <ModalModel cart={cart} artist = {artist} active={modalActive} setActive={setModalActive}></ModalModel>
        </div>
    );

    function openCart() {
        setModalActive(true);
        document.body.style.overflow="hidden"
    }


}
export default Cart