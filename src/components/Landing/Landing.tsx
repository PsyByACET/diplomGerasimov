import s from "./Landing.module.css"
import mainLogo from "../../public/main_logo.png"
import dragon from "../../public/dragon.png"
import cube from "../../public/cube.png"

const Landing = () => {

    return (
        <>
            <div className={s.container}>
                <div className={s.main}>
                    <div className={s.logoName}>
                        <img src={mainLogo} alt=""/>
                        <span>INFINITY</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Landing