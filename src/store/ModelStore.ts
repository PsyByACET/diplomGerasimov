import {makeAutoObservable} from "mobx";
import React from "react";
import {iModel} from "../models/Model";

interface iLicence {
    id: number,
    name: string
}

 class ModelStore {
    _license: Array<iLicence> = [];
    _selectedLicense: iLicence = {id: 0, name:""};
    _models: Array<iModel> = [];

    constructor() {
        makeAutoObservable(this)
    }

    setLicenses(licenses:Array<iLicence>) {
        this._license = licenses
    }

     setModels(models:Array<iModel>) {
         this._models = models
     }


     setSelectedLicense(license:iLicence) {
         this._selectedLicense = license

     }



    get licenses() {
        return this._license
    }
     get models() {
         return this._models
     }
     get SelectedLicense() {
         return this._selectedLicense
     }

}
export const ModelInstance = new ModelStore();
export const ModelContext = React.createContext(ModelInstance);

export const useModelStore = () => {
    return React.useContext(ModelContext);
};

export default ModelInstance;