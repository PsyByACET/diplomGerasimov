import React from "react";
import { makeAutoObservable } from "mobx";
import { iUser } from "../models/User";

class AuthStore {
    user: iUser = {} as iUser;
    firstLoadCompleted: boolean = false; // Param for first page loading
    isAuth: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    setUser(user: any) {
        this.user = { ...user };
    }
    setIsAuth(bool: boolean) {
        this.isAuth = bool
    }

    setFirstLoadStatus(status: boolean) {
        this.firstLoadCompleted = status;
    }
}

export const AuthInstance = new AuthStore();
export const AuthContext = React.createContext(AuthInstance);

export const useAuthStore = () => {
    return React.useContext(AuthContext);
};

export default AuthInstance;