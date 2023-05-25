
import s from "./CartsBasket.module.css"
import {iUser} from "../../../models/User";
import {iModel} from "../../../models/Model";
import CartBasket from "./Cart/CartBasket"
import React from "react";


const CartsBasket = ({carts,users}:{carts:Array<iModel>,users:Array<iUser>}) => {
    let testMass = users[0].basket;
    const filterCarts = carts.filter(m => testMass.includes(m.id));
    let cartsElements = filterCarts.map(m => <CartBasket key={m.id} name={m.name} price={m.price} photo={m.link_photo} artist={users[m.userId-1]} tags={m.tags}/>)
    // let p = 0;
    // let price = filterCarts.map(m =>p=p+m.price);


    /// новый счёт итоговой цены
    let price = filterCarts.reduce((sum, cart) => sum + cart.price, 0);
    // alert(result); // 15

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
                        <span className={s.p}>{price}руб</span>
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