
import s from "./CartsBasket.module.css"
import {iModel, iUser} from "../../../Redux/state";
import CartBasket from "./Cart/CartBasket"
import React from "react";


const CartsBasket = ({carts,users}:{carts:Array<iModel>,users:Array<iUser>}) => {
    let testMass = users[0].basket;
    console.log(testMass);
    const filterCarts = carts.filter(m => testMass.includes(m.id));
    let cartsElements = filterCarts.map(m => <CartBasket name={m.name} price={m.price} photo={m.link_photo} artist={users[m.artist-1]} tags={m.tags}/>)
    let p = 0;
    let price = filterCarts.map(m =>p=p+m.price);

    return (
        <div className={s.container}>
            <div className={s.carts}>
                {cartsElements}
            </div>
            <div className={s.payment_and_btn}>
                <div className={s.payment}>
                    <div className={s.info}>
                        <h2>Информация о покупке</h2>
                        <span>После оплаты, вы сможете загрулить файлы или смотреть видеоурок со страницы товара или с вашей библиотеки покупок</span>
                    </div>
                    <div className={s.price}>
                        <span>Цена</span>
                        <span className={s.p}>{p}руб</span>
                    </div>
                </div>
                <div>
                    <button onClick={()=> testConsole()} type='submit'>Купить</button>
                </div>
            </div>
        </div>

    );

    function testConsole () {
        console.log('test')
    }
}
export default CartsBasket