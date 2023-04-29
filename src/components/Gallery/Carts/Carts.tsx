import Cart from "./Cart/Cart";
import {iModel} from "../../../models/Model";
import {iUser} from "../../../models/User";
import s from "./Carts.module.css"
import React, {useEffect, useState} from "react";
import axios from "axios";
import ModalModel from "../../ModalModel/ModalModel";
import CartBasket from "../../ShopBasket/Carts/Cart/CartBasket";
import {loadAllModel} from "../../../api/ModelRest";
import {loadAllUsers} from "../../../api/UserRest";




// const [modelsToShow, setModelsToShow] = useState<iModelArray>({
//     models_carts: [],
// });
// useEffect(() => {
//     axios.get("/api/data").then(response => setData(response.data)).catch(error => console.log(error));
// }, []);

// useEffect(() => {
//     setModelsToShow(searchStore.booksArray);
// }, [searchStore.booksArray]);


const productsData =  loadAllModel();
console.log(productsData)



const Carts = ({cartsProf,carts}:{cartsProf:boolean, carts:Array<iModel>}) => {

    const [modelsToShow, setModelsToShow] = useState<Array<iModel>>([]);
    const [usersToShow, setUsersToShow] = useState<Array<iUser>>([]);


    useEffect(() => {
        async function fetchModels() {
            // const fetchData = async () => {
            //     const result = await axios.get("http://localhost:5001/api/models");
            //     setModelsToShow(result.data);
            // };
            const newModels = await loadAllModel();

            setModelsToShow(newModels)
        }
        fetchModels().catch(console.error)
    }, []);

    useEffect(() => {
        async function fetchUsers() {
            const newUsers = await loadAllUsers();
            setUsersToShow(newUsers)
        }
        fetchUsers().catch(console.error)
    }, []);


    // console.log(data[1])
    // let cartsElements = carts.map(m => <Cart cart={m} artist = {users[m.id_artist-1]}/>)
    // let cartsElements = carts?.map(m => <Cart cart={m} artist = {users[m.id_artist-1]}/>)
    // let cartsElementsMain = modelsToShow.map(m=> <Cart cart={m} artist = {users[m.id_artist-1]}/>)
    let cartsElementsMain = modelsToShow.map(m=> <Cart cart={m} />)
    let userElementsMain = usersToShow.map(m=> <div>{m.name}</div>)
    return (


        <div className={(cartsProf ? s.cartsProf: s.cartsGal)}>
            {cartsElementsMain}
       </div>

    );
}
export default Carts