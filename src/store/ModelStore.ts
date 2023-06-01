import {makeAutoObservable} from "mobx";
import React from "react";

interface iLicence {
    id: number,
    name: string
}

 class ModelStore {
    _licenses: Array<iLicence> = [];

    constructor() {
        makeAutoObservable(this)
    }

    setLicenses(licenses:Array<iLicence>) {
        this._licenses = licenses
    }

    get licenses() {
        return this._licenses
    }


}
export const ModelInstance = new ModelStore();
export const ModelContext = React.createContext(ModelInstance);

export const useModelStore = () => {
    return React.useContext(ModelContext);
};

export default ModelInstance;