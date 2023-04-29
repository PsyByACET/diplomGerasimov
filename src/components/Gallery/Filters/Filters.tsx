import s from "./Filters.module.css";
import React, {useState} from "react";


const Filters = ({nameBlock,categories_list,nameText}:{nameBlock:string,categories_list:Array<string>,nameText:string}) => {
    const [open, setOpen] = useState(false);
    let categoriesElements = categories_list.map(c => <DropdownItem category={c}/>)

    return (
        <div className={s.nameBlock}>
            <span>{nameText}</span>
            <div className={s.category_trigger} onClick={()=>{setOpen(!open)}}>
                Все
            </div>
            <div className={s.dropdown_menu + " " + `${open? s.active : s.inactive }`}>
                <ul>
                    {categoriesElements}
                </ul>
            </div>
        </div>
    );
}

function DropdownItem({category}:{category:string}) {
  return <li className={s.dropdownItem}>{category}</li>;
}

export default Filters