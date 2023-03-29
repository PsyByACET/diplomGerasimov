import Header from "./components/Header/Header";
import './App.css';


import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing/Landing";
import Registration from "./components/Auth/Registration/Registration";
import Authorization from "./components/Auth/Authorization/Authorization";
import ShopBasket from "./components/ShopBasket/ShopBasket";
import Gallery from "./components/Gallery/Gallery";

const App = (props) => {
    // console.log("sadasdsadasdasdasdasdadasdsa");
    // console.log(props.state.filtres);
  return (

      <div className="app-wrapper">
        <Header />
        {/*<Navbar state={props.state.navbar} />*/}


        <div class='app-wrapper-content'>
          <Routes>
              <Route path="/landing/" element={<Landing state={props.state.dialogsPage}/>} />
            {/*<Route path="/profile"  element={<Profile state={props.state.profilePage} />} />*/}
              <Route path="/registration"  element={<Registration />}  />
              <Route path="/gallery"  element={<Gallery state={props.state.filtres} />}  />
              <Route path="/authorization"  element={<Authorization />}  />
              <Route path="/shopbasket/*"  element={<ShopBasket />}  />

                {/*<Route path="/music"  element={<Music />} />*/}
            {/*<Route path="/settings"  element={<Settings />} />*/}
          </Routes>
        </div>
      </div>

  );
}
export default App;
