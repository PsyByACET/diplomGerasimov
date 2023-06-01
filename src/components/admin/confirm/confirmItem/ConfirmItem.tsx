import {observer} from "mobx-react-lite";
import {iModel} from "../../../../models/Model";
import {iUser} from "../../../../models/User";
import s from "./ConfirmItem.module.css"
import ModalModel from "../../../ModalModel/ModalModel";
import {useState} from "react";


const ConfirmItem = observer(({model,artist}:{model:iModel,artist:iUser}) => {

    const tagsElement = model.tags.map(t => <div className={s.tag}>{t}</div>);

    const [modalActive, setModalActive] = useState(false)

    function changeCartDisplay(status:boolean) {
        // console.log(modalActive)
        console.log(status)
        setModalActive(status);
        document.body.style.overflow=status?"hidden":"auto";
    }

    return (
        <>
            <div onClick={()=> changeCartDisplay(true)} className={s.cart}>
                <img className={s.immg} src={process.env.REACT_APP_API_URL + "photoModel/" + model.link_photo} alt=""/>
                <div className={s.content}>
                    <div className={s.artist_and_tags}>
                        <div className={s.artist_and_delete}>
                            <div className={s.artist}>
                                <img src={artist.picture} alt=""/>
                                <span>{artist.username}</span>
                            </div>
                        </div>
                        <div className={s.tags}>
                            {tagsElement}
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
        </>
    );
})
export default ConfirmItem