import s from "./Authorization.module.css"
import {NavLink} from "react-router-dom";
import mainLogo from "../../../public/main_logo.png";
import React from "react";
const Authorization = () => {

    return (
        <div>
            <div className={s.logo}>
                <NavLink to="/landing"><img src={mainLogo} alt=""/></NavLink>
            </div>
            <div className={s.img_block}></div>
            <div className={s.auth_content}>
                <h2>Пожалуйста войдите</h2>
                <div className={s.authorization_block}>
                    <input name='email' type='text' placeholder='mail'/>
                    <input name='password' type='password' placeholder='pass'/>

                    <div className={s.btns}>
                        <button onClick={()=> testConsole()} type='submit'>Войти</button>
                        <div className={s.recover_block}>
                            <span>Забыли свой пароль?</span>
                            <br/>
                            <span>Восстановить</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    function testConsole () {
        console.log('test')
    }
}
export default Authorization