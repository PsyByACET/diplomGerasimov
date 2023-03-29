import s from "./Filtres.module.css";
import React, {useState} from "react";


const Filtres = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={props.nameBlock}>
            <span>Категория</span>
            <div className={s.category_trigger} onClick={()=>{setOpen(!open)}}>

                Все категрии
            </div>
            <div className={s.dropdown_menu + " " + `${open? s.active : s.inactive }`}>
                <ul>
                    <DropdownItem category={'sd'}/>
                    <DropdownItem category={"sddssds"}/>
                    <DropdownItem category={"sdsdads"}/>
                    <DropdownItem category={"sdsxxxds"}/>
                </ul>
            </div>
        </div>
    );
}

function DropdownItem(props) {
    return(
        <li className={s.dropdownItem}>
            {props.category}
        </li>
    );
}

export default Filtres