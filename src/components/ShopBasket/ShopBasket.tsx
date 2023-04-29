import s from "./ShopBasket.module.css"
import React from "react";
import {iModel} from "../../models/Model";
import {iUser} from "../../models/User";
import CartsBasket from "./Carts/CartsBasket";

const ShopBasket = ({models,users}:{models:Array<iModel>,users:Array<iUser>}) => {



    return (
        <div>
            <div >
                <div className={s.carts}>
                    <CartsBasket carts = {models} users={users}></CartsBasket>
                </div>
            </div>
        </div>
    );
}
export default ShopBasket