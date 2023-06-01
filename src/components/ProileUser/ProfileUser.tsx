import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {iModel} from "../../models/Model";
import {iUser} from "../../models/User";
import React, {useEffect, useState} from "react";
import s from "./ProfileUser.module.css"
import find_icon from "../../public/find.png";
import {getOneUser} from "../../api/UserApi";
import {fetchUserModels} from "../../api/ModelApi";
import Carts from "../Gallery/Carts/Carts";
import {useUserStore} from "../../store/UserStore";
import {observer} from "mobx-react-lite";


const ProfileUser = observer( () => {
    let { id } = useParams();
    let navigate = useNavigate()

    const userStore = useUserStore();

    const [userToShow, setUserToShow] = useState<iUser>({} as iUser)
    const [modelsUserToShow, setModelsUserToShow] = useState<iModel[]>([]);

    useEffect(() => {
        async function fetchUser(userId:string) {
            const newUser = await getOneUser(userId);
            setUserToShow(newUser)
        }
        async function fetchModelsByUser(userId:string) {
            const models = await fetchUserModels(userId);
            setModelsUserToShow(models)
        }
        if (id) {
            fetchUser(id).catch(console.error)
            fetchModelsByUser(id).catch(console.error)
        } else {
            navigate('/landing')
        }

    }, []);

    let youAc = userToShow.id
    // if (userStore.user.id == userToShow.id) {
    //     youAc = true
    // }

    return (
        <div>
            <div className={s.bg_profile}></div>
            <div className={s.content}>
                <div className={s.cars_filters}>
                    <div className={s.search_block}>
                        <img src={find_icon} className={s.find_icon} alt=""/>
                        <input name="name" className={s.input_search}  />
                    </div>
                    <Carts cartsProf={true} models = {modelsUserToShow} ></Carts>
                </div>
                <div className={s.profile_info}>
                    <div className={s.user_block}>
                        <img src={userToShow.picture} alt=""/>
                        <div>{userToShow.username}</div>
                        <div className={s.about}>
                            <h2>Обо мне</h2>
                            {userToShow.about}
                            {userToShow.name}
                        </div>
                    </div>
                    {userStore.user.id == userToShow.id &&(
                        <NavLink to="/add"><button>Добавить модель</button></NavLink>
                    )}
                </div>
            </div>
            {/*<img src={users[idUser].picture} alt=""/>*/}
            {/*<span>{users[idUser].name}</span>*/}
            {/*{idUser}*/}
        </div>
    );
})
export default ProfileUser