import s from "./Header.module.css"
import basket_icon from "../../public/basket.svg";
import alarm_icon from "../../public/alarm.svg";
import user_icon from "../../public/user.svg";
import {NavLink, useNavigate} from "react-router-dom";
import React from "react";
import mainLogo from "../../public/main_logo.png";
import {useUserStore} from "../../store/UserStore";
import { observer } from "mobx-react-lite";
import {iUser} from "../../models/User";


const Header = observer(() => {

    let navigate = useNavigate()
    const userStore = useUserStore();
    const pathUser = "/user/"+userStore.user.id
    const role = userStore.user.role


    const onExitClick = () => {
        localStorage.removeItem("token")
        userStore.setUser({} as iUser)
        navigate("/landing")
    }

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
                    <NavLink to="/about" className={NavData => NavData.isActive ? s.active : s.item}>О нас </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/faq" className={NavData => NavData.isActive ? s.active : s.item}>FAQ </NavLink>
                </div>
                {userStore.user.role=="ADMIN" ?
                    <div className={s.item}>
                        <NavLink to="/confirm" className={NavData => NavData.isActive ? s.active : s.item}>Подтверждение</NavLink>
                    </div>
                    :
                    <></>
                }
            </nav>
            {!userStore.user.id ?
                <div className={s.auth_and_registration_btns}>
                    <NavLink to="/authorization" className={s.auth_btn}>
                        <div>Войти</div>
                    </NavLink>
                    <NavLink to="/registration" className={s.reg_btn}>Зарегистрироваться </NavLink>
                </div>
                :
                <div className={s.auth_panel}>
                    <div className={s.icons}>
                        <NavLink to={pathUser} > <img src={user_icon} alt=""/> </NavLink>
                        <NavLink to="/cancel" > <img src={alarm_icon} alt=""/> </NavLink>
                        <NavLink to="/shopbasket" > <img src={basket_icon} alt=""/> </NavLink>
                    </div>
                    <div className={s.auth_btn} onClick={onExitClick}>Выйти</div>
                </div>
            }

        </div>
    );
})
export default Header