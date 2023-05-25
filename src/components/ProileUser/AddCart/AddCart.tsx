import s from "./AddCart.module.css"
import React, {useEffect, useState} from "react";
import {useModelStore} from "../../../store/ModelStore";
import {createModel, fetchLicense, fetchModels} from "../../../api/ModelApi";
import {observer} from "mobx-react-lite";


const AddCart = observer(() => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [des, setDes] = useState("");
    const [filePhoto, setFilePhoto] = useState(null)
    const [filerar, setFilerar] = useState(null)
    const [file3d, setFile3d] = useState(null)

    const [open, setOpen] = useState(false);
    // let categoriesElements = categories_list.map(c => <DropdownItem category={c}/>)






    const ModelStore = useModelStore();
    useEffect(() => {
        fetchLicense().then(data => ModelStore.setLicenses(data))

    }, [])

    const selectFile = (e:any) => {
        setFilePhoto(e.target.files[0])
    }
    const selectFileR = (e:any) => {
        setFilerar(e.target.files[0])
    }
    const selectFileModel = (e:any) => {
        setFile3d(e.target.files[0])
    }



    function handleCategorySelect(event:any) {
        setSelectedCategory(event.target.value);
    }


    const handleSelectChange = (event:any) => {
        const selectedValues:any = Array.from(event.target.selectedOptions).map(
            (option:any) => option.value
        );
        setSelectedOptions(selectedValues);
    };
    // const testmas = ['s','d']

    const test1 = () =>{
        console.log(filePhoto)
        console.log(filerar)
        console.log("--------------------------------")
        console.log(file3d)
    }

    const addModel = async () => {

        await createModel({

            name: name,
            link_photo: filePhoto,
            description: des,
            tags: ["1","2"],
            price: price,
            likes: 0,
            link_download: filerar,
            model3d: file3d,
            size: 1,
            userId: 1,
            categoryId: 1,
            licenseId: ModelStore.SelectedLicense.id

        })
    }

    return (
        <div>
            {ModelStore.licenses.map(le =>
                <li>{le.id}</li>
            )}
            <div className={s.add_cart_block}>
                <div className={s.name_and_price}>
                    <input value={name} onChange={e => setName(e.target.value)} name='name' type='text' placeholder='Название'/>
                    <input value={price} onChange={e => setPrice(parseInt(e.target.value))} name='price' type='number' placeholder='Цена'/>
                </div>
                <textarea value={des} onChange={e => setDes(e.target.value)} className={s.desc} name='Description'  placeholder='Описание'/>

                <div className={s.nameBlock}>
                    <span>Лицензия</span>
                    <div className={s.category_trigger} onClick={()=>{setOpen(!open)}}>
                        {ModelStore.SelectedLicense.name || "Выберите тип лицензии"}
                    </div>
                    <div className={s.dropdown_menu + " " + `${open? s.active : s.inactive }`}>
                        <ul>
                            {ModelStore.licenses.map(li =>
                                <div onClick={()=> ModelStore.setSelectedLicense(li)}>{li.name}</div>
                            )}
                        </ul>
                    </div>
                </div>
                <input onChange={selectFile} accept="image/png, image/jpeg, imgage/jpg" name='price' type='file' placeholder='Цена'/>
                <input onChange={selectFileR} accept=".zip,.rar,.7zip" name='price' type='file' placeholder='Цена'/>
                <input onChange={selectFileModel} accept=".glb" name='price' type='file' placeholder='Цена'/>


                <button onClick={addModel} type='submit'>Загрузить</button>
                {/*<select*/}
                {/*    multiple*/}
                {/*    value={selectedOptions}*/}
                {/*    onChange={handleSelectChange}*/}
                {/*>*/}
                {/*    <option value="option1">Option 1</option>*/}
                {/*    <option value="option2">Option 2</option>*/}
                {/*    <option value="option3">Option 3</option>*/}
                {/*</select>*/}
            </div>


        </div>
    );


})
export default AddCart