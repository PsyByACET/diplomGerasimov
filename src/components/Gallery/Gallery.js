import s from "./Gallery.module.css"
import find_icon from "../../public/find.png";
import React, {useState} from "react";
import classNames from "classnames/bind";
import Filtres from "./Filtres/Filtres";

const Gallery = (props) => {

    console.log(props.state.category);
    // let classname = classNames(s.dropdown_menu, `${open? s.active : s.inactive }`);

    return (
        <div>
            <div className={s.container}>
                <div className={s.search_block}>
                    <img src={find_icon} className={s.find_icon} alt=""/>
                    <input name="name" className={s.input_search} autocomplete="off" />
                </div>
                {/*<h1>{props.state.category.name[1]}</h1>*/}
                <div className={s.filtres}>
                    <Filtres nameBlock={s.category}></Filtres>
                </div>
            </div>
        </div>
    );
}


function getClassName(props) {
    return {

    }
}

export default Gallery