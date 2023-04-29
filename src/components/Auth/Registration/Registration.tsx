import s from "./Registration.module.css"
import {NavLink} from "react-router-dom";
import mainLogo from "../../../public/main_logo.png";
import React from "react";

const Registration = () => {
    return (
        <div>
            <div className={s.logo}>
                <NavLink to="/landing"><img src={mainLogo} alt=""/></NavLink>
            </div>
            <div className={s.img_block}></div>
            <div className={s.reg_content}>
                <h2>Пожалуйста зарегистрируйтесь</h2>
                <div className={s.register_block}>
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
export default Registration