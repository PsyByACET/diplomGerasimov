import s from "./Header.module.css"

import {NavLink} from "react-router-dom";
import React from "react";
import mainLogo from "../../public/main_logo.png";


const Header = () => {
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
                    <NavLink to="/registration" className={NavData => NavData.isActive ? s.active : s.item}>Registration </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/authorization" className={NavData => NavData.isActive ? s.active : s.item}>Authorization </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/shopbasket" className={NavData => NavData.isActive ? s.active : s.item}>ShopBasket </NavLink>
                </div>
            </nav>

            <div className={s.auth_and_registration_btns}>

                    <NavLink to="/landing" className={s.auth_btn}> <div>Войти</div> </NavLink>
                    <NavLink to="/landing" className={s.reg_btn}>Зарегистрироваться </NavLink>

            </div>

        </div>
    );
}
export default Header