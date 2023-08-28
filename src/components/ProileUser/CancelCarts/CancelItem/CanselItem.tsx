import {observer} from "mobx-react-lite";
import {iModel} from "../../../../models/Model";
import {iUser} from "../../../../models/User";
import s from "./CancelItem.module.css"
import ModalModel from "../../../ModalModel/ModalModel";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";



const CancelItem = observer(({model,artist,updateM}:{model:iModel,artist:iUser,updateM:(model:iModel, st:string)=>Promise<void>}) => {

    // const tagsElement = model.tags.map(t => <div className={s.tag}>{t}</div>);

    const [modalActive, setModalActive] = useState(false)



    function changeCartDisplay(status:boolean) {

        setModalActive(status);
        document.body.style.overflow=status?"hidden":"auto";
    }


    return (
        <div className={s.container}>
            <div onClick={()=> changeCartDisplay(true)} className={s.cart}>
                <img className={s.immg} src={process.env.REACT_APP_API_URL + "photoModel/" + model.link_photo} alt=""/>
                <div onClick={e => e.stopPropagation()} className={s.content}>
                    <div className={s.artist_and_tags}>
                        <div className={s.artist_and_delete}>
                            <div className={s.des}>
                                <textarea disabled={true}>{model.status_des}</textarea>
                            </div>
                        </div>
                        <div  className={s.tags}>
                            <NavLink to={"/add/"+model.id} className={s.auth_btn} >
                                <div>Редактировать</div>
                            </NavLink>
                        </div>
                    </div>
                    <div className={s.name_and_price}>
                        <span className={s.name}>{model.name}</span>
                        <span className={s.price}>{model.price}руб</span>
                    </div>
                </div>
            </div>
            {modalActive &&
                <div className={s.modal} onClick={() => changeCartDisplay(false)}>
                    <ModalModel cart={model} ></ModalModel>
                </div>
            }
        </div>
    );
})
export default CancelItem