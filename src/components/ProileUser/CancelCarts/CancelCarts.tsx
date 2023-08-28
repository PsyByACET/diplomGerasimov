import React, {useEffect, useState} from "react";
import {iModel} from "../../../models/Model";
import {fetchModels, fetchUserModels, updateModel} from "../../../api/ModelApi";
import CancelItem from "./CancelItem/CanselItem";
import {useUserStore} from "../../../store/UserStore";
import s from "./CancelCarts.module.css"
import {observer} from "mobx-react-lite";


const CancelCarts = observer( () => {

    const userStore = useUserStore();

    const [models, setModels] = useState<Array<iModel>>([]);

    async function updateM(model:iModel, st:string) {
        await updateModel({
            id: model.id,
            status: st,
            status_des: model.status_des
        })
        fetchUserModels( {userId: userStore.user.id.toString() , status: "cancel"}).then(data => setModels(data))
    }



    useEffect(() => {
        fetchUserModels( {userId: userStore.user.id.toString() , status: "cancel"}).then(data => setModels(data))
    }, [])

    let cartsElements = models.map(m => <CancelItem
        key={m.id}
        model = {m}
        artist = {m.artist}
        updateM = {updateM}
    />)

    return (
        <div>
            <h1>Карточки товара не прошедшие</h1>
            <div className={s.carts}>
                {cartsElements}
            </div>
        </div>
    );
})
export default CancelCarts