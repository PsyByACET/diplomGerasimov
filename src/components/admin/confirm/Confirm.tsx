import React, {useEffect, useState} from "react";
import {iModel} from "../../../models/Model";
import {fetchModels} from "../../../api/ModelApi";
import {observer} from "mobx-react-lite";
import CartBasket from "../../ShopBasket/Carts/Cart/CartBasket";
import ConfirmItem from "./confirmItem/ConfirmItem";
import s from "../../ShopBasket/Carts/CartsBasket.module.css";


const Confirm = observer(() => {

    const [models, setModels] = useState<Array<iModel>>([]);

    useEffect(() => {
        fetchModels( "", "consideration").then(data => setModels(data))
    }, [])

    let cartsElements = models.map(m => <ConfirmItem
        key={m.id}
        model = {m}
        artist = {m.artist}
    />)


    return (
        <div className={s.carts}>
            {cartsElements}
        </div>

    );
})
export default Confirm