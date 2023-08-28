import s from "./AddCart.module.css"
import React, {useEffect, useState} from "react";
import {useModelStore} from "../../../store/ModelStore";
import {
    createModel,
    fetchOneModel,
    updateModelFull
} from "../../../api/ModelApi";
import {observer} from "mobx-react-lite";

import {iCategory, iFormat, iLicense, iModel} from "../../../models/Model";
import {useLocation, useNavigate} from "react-router-dom";



const AddCart = observer(() => {

    const ModelStore = useModelStore();

    const [modelToShow, setModelToShow] = useState<iModel>({} as iModel)


    const [selectedLicense, setSelectedLicense] = useState<iLicense>({} as iLicense);
    const [selectedCategory, setSelectedCategory] = useState<iCategory>({} as iCategory);
    const [selectedFormat, setSelectedFormat] = useState<iFormat[]>([]);

    const [name, setName] = useState<string>("");
    const [tags, setTags] = useState<string>("");
    const [price, setPrice] = useState<number>(0);
    const [des, setDes] = useState<string>("");
    const [filePhoto, setFilePhoto] = useState<Array<File>>([])
    const [filerar, setFilerar] = useState<Array<File>>([])
    const [file3d, setFile3d] = useState<Array<File>>([])
    const [sizeModel, setSizeModel] = useState<number>()

    const [open, setOpen] = useState<string>("");


    const selectFile = (e:any) => {
        setFilePhoto(e.target.files[0])
    }
    const selectFileR = (e:any) => {
        setFilerar(e.target.files[0])
    }
    const selectFileModel = (e:any) => {
        setFile3d(e.target.files[0])
        size(e.target.files[0])
    }
    const size = (e:any) => {
        setSizeModel(e.size)
    }

    const location = useLocation()
    const modelId = location.pathname.split("/")[2];

    async function fetchModel(modelId:string) {
        const newModel = await fetchOneModel(modelId);
        setModelToShow(newModel)
        setName(newModel.name)
        setPrice(newModel.price)
        setDes(newModel.description)
        setTags(newModel.tags.join(" "))
    }

    useEffect(() => {
        if (modelId) {
            fetchModel(modelId).catch(console.error)
        }

    }, []);

    const formatClicker = (format:iFormat) => {
        if (selectedFormat.length > 0 && selectedFormat.some(e => e.id === format.id)) {
            setSelectedFormat(selectedFormat.filter(e=> e.id !== format.id))
        } else {

            setSelectedFormat([...selectedFormat,format])
        }
    }

    let navigate = useNavigate()

    const addModel = async () => {
        await createModel({
            name: name,
            link_photo: filePhoto,
            description: des,
            tags: tags.split(" ").filter(el => el != ""),
            price: price,
            likes: 0,
            link_download: filerar,
            model3d: file3d,
            size: sizeModel,
            status: "consideration",
            categoryId: selectedCategory.id,
            licenseId: selectedLicense.id,
            formatArr: selectedFormat.map(m => m.id)

        })
        alert("Модель отправлена на проверку")
        navigate('/gallery')
    }

    const uModel = async () => {
        await updateModelFull({
            id: modelId,
            name: name,
            link_photo: filePhoto,
            description: des,
            tags: tags.split(" ").filter(el => el != ""),
            price: price,
            likes: 0,
            link_download: filerar,
            model3d: file3d,
            size: sizeModel,
            status: "consideration",
            categoryId: selectedCategory.id,
            licenseId: selectedLicense.id

        })
        alert("Модель отправлена на проверку")
        navigate('/gallery')
    }


    return (
        <div>
            <div className={s.add_cart_block}>
                <div className={s.name_and_price}>
                    <input value={name} onChange={e => setName(e.target.value)} name='name' type='text' placeholder='Название'/>
                    <input value={price} onChange={e => setPrice(parseInt(e.target.value))} name='price' type='number' placeholder='Цена'/>
                </div>
                <textarea value={des} onChange={e => setDes(e.target.value)} className={s.desc} name='Description'  placeholder='Описание'/>

                <div className={s.nameBlock}>
                    <div>
                        <span>Лицензия</span>
                        <div className={s.category_trigger} onClick={()=>{setOpen(open==="license"?"":"license")}}>
                            {selectedLicense.name || "Выберите тип лицензии"}
                        </div>
                        <div className={s.dropdown_menu + " " + `${open==="license"? s.active : s.inactive }`}>
                            <ul>
                                {ModelStore.licenses.map(li =>
                                    <div onClick={()=> setSelectedLicense(li)}>{li.name}</div>
                                )}
                            </ul>
                        </div>
                    </div>
                    <div>
                        <span>Формат</span>
                        <div className={s.category_trigger} onClick={()=>{setOpen(open==="format"?"":"format")}}>
                            {selectedFormat.length>0? selectedFormat.map(f => f.name+" "): "Выберите формат"}
                        </div>
                        <div className={s.dropdown_menu + " " + `${open==="format"? s.active : s.inactive }`}>

                            {ModelStore.formats.map(li =>
                                <div className={s.test}>
                                    <input onChange={()=> formatClicker(li)} type="checkbox" id={li.name} name={li.name} />
                                    <label htmlFor={li.name}>{li.name}</label>
                                </div>
                            )}
                        </div>
                    </div>
                    <div>
                        <span>Категория</span>
                        <div className={s.category_trigger} onClick={()=>{setOpen(open==="category"?"":"category")}}>
                            {selectedCategory.name || "Выберите категорию"}
                        </div>
                        <div className={s.dropdown_menu + " " + `${open==="category"? s.active : s.inactive }`}>
                            <ul>
                                {ModelStore.categories.map(li =>
                                    <div onClick={()=> setSelectedCategory(li)}>{li.name}</div>
                                )}
                            </ul>
                        </div>
                    </div>

                </div>
                <div className={s.fileInput}>
                    <label htmlFor="imageInput" className={s.customFileUpload}>
                        <i className="fa fa-cloud-upload"></i> Загрузите Превью
                    </label>
                    <input onChange={selectFile} id="imageInput" accept="image/png, image/jpeg, imgage/jpg" name='price' type='file' placeholder='Цена'/>

                    <label htmlFor="rarInput" className={s.customFileUpload}>
                        <i className="fa fa-cloud-upload"></i> Загрузите архив
                    </label>
                    <input onChange={selectFileR} id="rarInput"  accept=".zip,.rar,.7zip" name='price' type='file' placeholder='Цена'/>

                    <label htmlFor="modelInput" className={s.customFileUpload}>
                        <i className="fa fa-cloud-upload"></i>  Загрузите 3D модель
                    </label>
                    <input onChange={selectFileModel} id="modelInput"  accept=".glb" name='price' type='file' placeholder='Цена'/>
                </div>


                <div className={s.final}>
                    <input className={s.tag} value={tags} onChange={e => setTags(e.target.value)} name='tags' type='text' placeholder='Теги'/>
                    <input className={s.link}  name='tags' type='text' placeholder='Ссылка на видео'/>
                </div>


                {modelId? (
                    <button onClick={uModel} type='submit'>Загрузить</button>
                ):(
                    <button onClick={addModel} type='submit'>Загрузить</button>
                )}

            </div>


        </div>
    );


})
export default AddCart