import React, {useEffect, useState} from "react";
import {iModel} from "../../../models/Model";
import {deleteBasketItem, fetchModels, updateModel} from "../../../api/ModelApi";
import {observer} from "mobx-react-lite";
import ConfirmItem from "./confirmItem/ConfirmItem";
import s from "../../ShopBasket/Carts/CartsBasket.module.css";


const Confirm = observer(() => {

    const [models, setModels] = useState<Array<iModel>>([]);

    async function updateM(model:iModel, st:string, des:string) {
        await updateModel({
            id: model.id,
            status: st,
            status_des: des
        })
        fetchModels({status: "consideration"}).then(data => setModels(data))
    }




    useEffect(() => {
        fetchModels({status: "consideration"}).then(data => setModels(data))
    }, [])

    let cartsElements = models.map(m => <ConfirmItem
        key={m.id}
        model = {m}
        artist = {m.artist}
        updateM = {updateM}
    />)


    return (

        <div>
            <h1>Подтверждение публицации</h1>
            <div className={s.carts}>
                {cartsElements}
            </div>
        </div>

    );
})
export default Confirm