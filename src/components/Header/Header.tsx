import s from "./Header.module.css"

import {NavLink} from "react-router-dom";
import React from "react";
import mainLogo from "../../public/main_logo.png";
import {useAuthStore} from "../../store/UserStore";
import { observer } from "mobx-react-lite";


const Header = observer(() => {

    const authStore = useAuthStore();
    // console.log(authStore.user)

    return (
        <div className={s.header}>
            <div className={s.logo}>
                <NavLink to="/landing"><img src={mainLogo} alt=""/></NavLink>
            </div>

            <nav className={s.navbar}>
                <div className={s.item}>
                    <NavLink to="/gallery" className={NavData => NavData.isActive ? s.active : s.item}>Каталог </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/shopbasket" className={NavData => NavData.isActive ? s.active : s.item}>ShopBasket </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/upl" className={NavData => NavData.isActive ? s.active : s.item}>upl </NavLink>
                </div>
            </nav>
            {!authStore.isAuth ?
                <div className={s.auth_and_registration_btns}>
                    <NavLink to="/authorization" className={s.auth_btn}>
                        <div>Войти</div>
                    </NavLink>
                    <NavLink to="/registration" className={s.reg_btn}>Зарегистрироваться </NavLink>
                </div>
                :
                <div className={s.auth_and_registration_btns}>
                    <NavLink to="/authorization" className={s.auth_btn}>
                        <div>BIHOD</div>
                    </NavLink>

                </div>
            }

        </div>
    );
})
export default Header