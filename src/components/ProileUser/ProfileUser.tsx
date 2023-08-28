import {NavLink, useLocation, useNavigate, useParams} from "react-router-dom";
import {iModel} from "../../models/Model";
import {iUser} from "../../models/User";
import React, {useEffect, useState} from "react";
import s from "./ProfileUser.module.css"
import find_icon from "../../public/find.png";
import {getOneUser, updateUser} from "../../api/UserApi";
import {createModel, fetchUserModels} from "../../api/ModelApi";
import Carts from "../Gallery/Carts/Carts";
import {useUserStore} from "../../store/UserStore";
import {observer} from "mobx-react-lite";


const ProfileUser = observer( () => {
    let { id } = useParams();
    let navigate = useNavigate()

    const userStore = useUserStore();

    const [userToShow, setUserToShow] = useState<iUser>({} as iUser)
    const [modelsUserToShow, setModelsUserToShow] = useState<iModel[]>([]);

    const uName = userToShow.username

    const [username, setUsername] = useState<string>();
    const [about, setAbout] = useState<string>();
    const [te, setTe] = useState<boolean>(false);

    const [filePhoto, setFilePhoto] = useState<Array<File>>([])

    const selectFile = (e:any) => {
        setFilePhoto(e.target.files[0])
    }

    const updateU = async (bool:boolean) => {
        if (filePhoto.length === 0) {

            await updateUser({
                id: userToShow.id,
                username: username,
                picture: filePhoto,
                about: about
            })
        } else {

            await updateUser({
                id: userToShow.id,
                username: username,
                picture: filePhoto,
                about: about
            })
        }

        setTe(bool)
        if (id) {
            fetchUser(id).catch(console.error)
        } else {
            navigate('/landing')
        }
    }


    const ttClick = (bool:boolean) => {
        setTe(bool)
    }

    async function fetchUser(userId:string) {
        const newUser = await getOneUser(userId);
        setUserToShow(newUser)
        setUsername(newUser.username)
        setAbout(newUser.about)
    }
    async function fetchModelsByUser(userId:string) {
        const models = await fetchUserModels({userId: userId, status: "public",});
        setModelsUserToShow(models)
    }


    useEffect(() => {
        if (id) {
            fetchUser(id).catch(console.error)
            fetchModelsByUser(id).catch(console.error)
        } else {
            navigate('/landing')
        }

    }, []);
    let path = process.env.REACT_APP_API_URL + "photoUser/"

    return (
        <div>
            <div className={s.bg_profile}></div>
            <div className={s.content}>
                <div className={s.cars_filters}>
                    <Carts cartsProf={true} models = {modelsUserToShow} ></Carts>
                </div>
                <div className={s.profile_info}>
                    <div className={s.user_block}>
                        <div className={s.imgName}>
                            {te? (
                                <div>
                                    <label htmlFor="imageInput" className={s.customFileUpload}>
                                        <div className={s.dow} >
                                            Загрузить фото
                                        </div>
                                    </label>
                                    <input onChange={selectFile} id="imageInput" accept="image/png, image/jpeg, imgage/jpg" name='price' type='file' placeholder='Цена'/>
                                </div>
                            ):(
                                <img src={path + userToShow.picture} alt=""/>
                            )}

                            <div className={s.username}>
                                {te? (
                                    <input maxLength={24} value={username} onChange={e => setUsername(e.target.value)} name='name' type='text' placeholder='Название'/>
                                ):(
                                    <div>{userToShow.username}</div>
                                )}
                            </div>
                        </div>
                        <div className={s.about}>
                            <h2>Обо мне</h2>
                            {te? (
                                <textarea value={about} onChange={e => setAbout(e.target.value)} name='name'     placeholder='Название'/>
                            ):(
                                <span>{userToShow.about}</span>
                            )}
                        </div>
                    </div>
                    {userStore.user.id == userToShow.id &&(
                        <div>
                            <NavLink to="/add"><button>Добавить модель</button></NavLink>
                            {te? (
                                <button onClick={()=> updateU(false)}>Сохранить</button>
                            ):(
                                <button onClick={()=> ttClick(true)}>Редактировать профиль</button>
                            )}


                        </div>
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