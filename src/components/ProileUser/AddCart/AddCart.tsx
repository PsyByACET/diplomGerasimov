import s from "./AddCart.module.css"
import React, {useState} from "react";


const AddCart = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);

    function handleCategorySelect(event:any) {
        setSelectedCategory(event.target.value);
    }


    const handleSelectChange = (event:any) => {
        const selectedValues:any = Array.from(event.target.selectedOptions).map(
            (option:any) => option.value
        );
        setSelectedOptions(selectedValues);
    };

    return (
        <div>

            <div className={s.add_cart_block}>
                <div className={s.name_and_price}>
                    <input name='name' type='text' placeholder='Название'/>
                    <input name='price' type='number' placeholder='Цена'/>
                </div>
                <textarea className={s.desc} name='Description'  placeholder='Описание'/>
                <select  value={selectedCategory} onChange={handleCategorySelect}>
                    <option value="">Выберите категорию</option>
                    <option value="category1">Категория 1</option>
                    <option value="category2">Категория 2</option>
                    <option value="category3">Категория 3</option>
                </select>
                <select
                    multiple
                    value={selectedOptions}
                    onChange={handleSelectChange}
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>

        </div>
    );


}
export default AddCart