import s from "./AddCart.module.css"
import React from "react";
const AddCart = () => {
    return (
        <div>

            <div className={s.add_cart_block}>
                <div className={s.name_and_price}>
                    <input name='name' type='text' placeholder='Название'/>
                    <input name='price' type='number' placeholder='Цена'/>
                </div>
                <textarea className={s.desc} name='Description'  placeholder='Описание'/>
            </div>

        </div>
    );
}
export default AddCart