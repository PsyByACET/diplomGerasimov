import {useLocation} from "react-router-dom";
import {iModel} from "../../models/Model";
import {iUser} from "../../models/User";
import React from "react";
import s from "./ProfileUser.module.css"
import find_icon from "../../public/find.png";
import Carts from "../Gallery/Carts/Carts";

const ProfileUser = ({users,models}:{users:Array<iUser>,models:Array<iModel>, }) => {

    let idUser = Number(useLocation().pathname.slice(6))-1

    return (
        <div>
            <div className={s.bg_profile}></div>
            <div className={s.content}>
                <div className={s.cars_filters}>
                    <div className={s.search_block}>
                        <img src={find_icon} className={s.find_icon} alt=""/>
                        <input name="name" className={s.input_search}  />
                    </div>
                    <Carts cartsProf={true} carts = {models} ></Carts>
                </div>
                <div className={s.profile_info}>
                    <div className={s.user_block}>
                        <img src={users[idUser].picture} alt=""/>
                        <div>{users[idUser].username}</div>
                        <div className={s.about}>
                            <h2>Обо мне</h2>
                            {users[idUser].about}
                        </div>
                    </div>
                </div>
            </div>
            {/*<img src={users[idUser].picture} alt=""/>*/}
            {/*<span>{users[idUser].name}</span>*/}
            {/*{idUser}*/}
        </div>
    );
}
export default ProfileUser