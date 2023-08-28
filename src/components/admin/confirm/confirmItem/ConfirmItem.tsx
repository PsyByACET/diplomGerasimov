import {observer} from "mobx-react-lite";
import {iModel} from "../../../../models/Model";
import {iUser} from "../../../../models/User";
import s from "./ConfirmItem.module.css"
import ModalModel from "../../../ModalModel/ModalModel";
import React, {useState} from "react";



const ConfirmItem = observer(({model,artist,updateM}:{model:iModel,artist:iUser,updateM:(model:iModel, st:string, des:string)=>Promise<void>}) => {

    // const tagsElement = model.tags.map(t => <div className={s.tag}>{t}</div>);

    const [des, setDes] = useState<string>("");

    const [modalActive, setModalActive] = useState(false)

    let pathLink = "http://localhost:5001/rar/" + model.link_download


    function changeCartDisplay(status:boolean) {

        setModalActive(status);
        document.body.style.overflow=status?"hidden":"auto";
    }

    return (
        <div className={s.container}>
            <div onClick={()=> changeCartDisplay(true)} className={s.cart}>
                <img className={s.immg} src={process.env.REACT_APP_API_URL + "photoModel/" + model.link_photo} alt=""/>
                <div onClick={e => e.stopPropagation()} className={s.content}>
                    <div onClick={e => e.stopPropagation()}  className={s.artist_and_tags}>
                        <div className={s.desAndDownload}>
                            <textarea value={des} onChange={e => setDes(e.target.value)} name='des'  placeholder='Причина отклонения'/>

                        </div>
                        <div className={s.buttons}>
                            {/*{tagsElement}*/}
                            <div className={s.buttonsAccept}>
                                <button onClick={()=> updateM(model, "public", des)}>Одобрить</button>
                                <button onClick={()=> updateM(model, "cancel", des)}>Отклонить</button>
                            </div>
                            <a onClick={e => e.stopPropagation()}  href={pathLink}><button  className={s.downloadButton} type='submit'>Скачать</button></a>
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
export default ConfirmItem