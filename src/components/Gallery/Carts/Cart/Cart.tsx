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

    function changeCartDisplay(status:boolean) {
        setModalActive(status);
        document.body.style.overflow=status?"hidden":"auto";
    }

    return (
        <div>
            <div onClick={()=> changeCartDisplay(true)}  className={s.cart}>
                <img className={s.immg} src={process.env.REACT_APP_API_URL + "photoModel/" + cart.link_photo} alt=""/>
                <div className={s.name_and_price}>
                    <span className={s.name}>{cart.name}</span>
                    <span className={s.name}>{cart.userId}</span>
                    <span className={s.price}>{cart.price}руб</span>

                </div>
            </div>

            {modalActive &&
                <div className={s.modal} onClick={() => changeCartDisplay(false)}>
                    <ModalModel cart={cart} active={modalActive} setActive={setModalActive}></ModalModel>
                </div>
            }
        </div>
    );




}
export default Cart