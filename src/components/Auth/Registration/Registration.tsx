import s from "./Registration.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import mainLogo from "../../../public/main_logo.png";
import React, {useEffect, useState} from "react";
import {login, registration} from "../../../api/UserApi";
import {useAuthStore} from "../../../store/UserStore";
import {observer} from "mobx-react-lite";

const Registration = observer(() => {

    let navigate = useNavigate()

    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")

    const authStore = useAuthStore();

    useEffect(() => {
        if (authStore.user.mail) {
            navigate('/landing');
        }
    }, [authStore.user]);

    const signUp = async ()=> {
        try {
            const response = await registration({mail,password, name, username})
            console.log(response)
            console.log(authStore)
            navigate('/landing');
        } catch (e:any) {
            alert(e.response.data.message)
        }
    }

    return (
        <div>
            <div className={s.logo}>
                <NavLink to="/landing"><img src={mainLogo} alt=""/></NavLink>
            </div>
            <div className={s.img_block}></div>
            <div className={s.reg_content}>
                <h2>Пожалуйста зарегистрируйтесь</h2>
                <div className={s.register_block}>
                    <input value={mail} onChange={e=> setMail(e.target.value)} name='email' type='text' placeholder='mail'/>
                    <input value={password} onChange={e=> setPassword(e.target.value)} name='password' type='password' placeholder='pass'/>
                    <input value={name} onChange={e=> setName(e.target.value)} name='name' type='text' placeholder='name'/>
                    <input value={username} onChange={e=> setUsername(e.target.value)} name='username' type='text' placeholder='username'/>

                    <div className={s.btns}>
                        <button onClick={()=> signUp()} type='submit'>Войти</button>
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
})
export default Registration