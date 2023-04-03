import s from "./ModalModel.module.css"
import {iModel, iUser} from "../../Redux/state";
import React from "react";

const ModalModel = ({active,setActive,cart,artist}:{active:boolean,setActive:React.Dispatch<React.SetStateAction<boolean>>,cart:iModel,artist:iUser}) => {
    const tagsElement = cart.tags.map(t => <div className={s.tag}>{t}</div>);
    console.log(active)
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
                    <div className={s.artist}>
                        <img src={artist.picture} alt=""/>
                        <span>{artist.username}</span>
                    </div>
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