import Cart from "./Cart/Cart";
import {iModel, iUser} from "../../../Redux/state";
import s from "./Carts.module.css"
import React, {useState} from "react";
import ModalModel from "../../ModalModel/ModalModel";

const Carts = ({carts,users}:{carts:Array<iModel>,users:Array<iUser>}) => {

    let cartsElements = carts.map(m => <Cart cart={m} artist = {users[m.artist-1]}/>)

    return (

        <div className={s.carts}>
            {cartsElements}
        </div>

    );
}
export default Carts