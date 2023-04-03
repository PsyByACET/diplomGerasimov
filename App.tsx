import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/Header/Header";
import { iState } from "./Redux/state";
import ShopBasket from "./components/ShopBasket/ShopBasket";
import Gallery from "./components/Gallery/Gallery";
import Authorization from "./components/Auth/Authorization/Authorization";
import Registration from "./components/Auth/Registration/Registration";
import Landing from "./components/Landing/Landing";
import ClearHeader from "./components/Header/ClearHeader";
import AddCart from "./components/ProileUser/AddCart/AddCart";



interface iApp {
  state: iState;
}

function App({ state }: iApp) {
    const location = useLocation();
    console.log(location);
    let con_head = <Header  />
    if (location.pathname==("/authorization")) {
        con_head = <ClearHeader />
    }
    if (location.pathname==("/registration")) {
        con_head = <ClearHeader />
    }

  return (
    <div className="App">
        {/*{location.pathname!=="/authoriztion" && <Header />}*/}
        {con_head}
      {/*<Navbar state={props.state.navbar} />*/}
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/landing/" element={<Landing />} />
          <Route path="/registration"  element={<Registration />}  />
          <Route path="/gallery" element={<Gallery models = {state.model_cart} users = {state.users}/>} />
          <Route path="/authorization"  element={<Authorization />}  />
          <Route path="/shopbasket/*" element={<ShopBasket models = {state.model_cart} users = {state.users}/>} />
            <Route path="/add/*" element={<AddCart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
