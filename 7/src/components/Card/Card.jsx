import s from "../Card/Card.module.scss";
import { Link } from "react-router-dom";

export default function Card({id, name, price, img}) {
    return (
        <>
            <div className={s.card}>
                <div className={s.img}>
                    <img src={img} alt="" />
                </div>
                <div className={s.container}>
                    <p>{name}</p>
                    <div className={s.data}>
                        <div className={s.cost}>
                            <div className={s.int}>{price}</div>
                            <div className={s.currency}>₽</div>
                        </div>
                        <Link to={`/catalog/${id}`}>
                            <button className={s.btn3}>Добавить в корзину</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </>
    )
}