import s from "./CartBasket.module.css"
import {iUser} from "../../../../models/User";
const CartBasket = ({name,price,photo,artist,tags}:{name:string,price:number,photo:string,artist:iUser,tags:Array<string>}) => {

    const tagsElement = tags.map(t => <div className={s.tag}>{t}</div>);


    return (
        <div className={s.cart}>
            <img className={s.immg} src={photo} alt=""/>
            <div className={s.content}>
                <div className={s.artist_and_tags}>
                    <div className={s.artist}>
                        <img src={artist.picture} alt=""/>
                        <span>{artist.username}</span>
                    </div>
                    <div className={s.tags}>
                        {tagsElement}
                    </div>
                </div>
                <div className={s.name_and_price}>
                    <span className={s.name}>{name}</span>
                    <span className={s.price}>{price}руб</span>
                </div>
            </div>
        </div>
    );
}
export default CartBasket