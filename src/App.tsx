import React, {useEffect} from "react";
import "./App.css";
import {Route, Routes, useLocation, Navigate} from "react-router-dom";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import Authorization from "./components/Auth/Authorization/Authorization";
import Registration from "./components/Auth/Registration/Registration";
import Landing from "./components/Landing/Landing";
import ClearHeader from "./components/Header/ClearHeader";
import AddCart from "./components/ProileUser/AddCart/AddCart";
import ProfileUser from "./components/ProileUser/ProfileUser";
import TestDow from "./components/testDow";
import {loadAllModel} from "./api/ModelRest";
import {useModelStore} from "./store/ModelStore";
import {fetchLicense, fetchModels} from "./api/ModelApi";




const isAuth = false

const App = () => {

    const ModelStore = useModelStore();
    useEffect(() => {
        fetchLicense().then(data => ModelStore.setLicenses(data))
        fetchModels().then(data => ModelStore.setModels(data))

    }, [])



    const location = useLocation();
    let con_head = <Header  />
    if (location.pathname==("/authorization")) {
        con_head = <ClearHeader />
    }
    if (location.pathname==("/registration")) {
        con_head = <ClearHeader />
    }
    document.body.style.overflow="auto";



  return (
    <div className="App">
        {/*{location.pathname!=="/authoriztion" && <Header />}*/}
        {con_head}
      {/*<Navbar state={props.state.navbar} />*/}

      <div className="app-wrapper-content">
        <Routes>
            <Route path="/landing/" element={<Landing />} />
            <Route path="/registration"  element={<Registration />}  />
            <Route path="/gallery" element={<Gallery models = {ModelStore.models} />} />
            {/*users = {state.users}*/}
            <Route path="/authorization"  element={<Authorization />}  />
            <Route path="/upl"  element={<TestDow />}  />
            {isAuth && (
                    // <Route path="/shopbasket/*" element={<ShopBasket models = {state.models_carts} users = {state.users}/>} />
                <Route path="/registration"  element={<Registration />}  />
            )}

            {/*<Route path="/user/*" element={<ProfileUser models = {state.models_carts} users={state.users}/>} />*/}
            <Route path="/add/*" element={<AddCart />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
