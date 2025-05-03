import s from "../Card/Card.module.scss";
import { Link } from "react-router-dom";
import Basket from "/src/assets/svg/basket.svg";
import { useContext, useEffect } from "react";
import { BasketCartsContext } from "../../context";

export default function Card({cart}) {
    const { basketCarts, setBasketCarts } = useContext(BasketCartsContext);
    function addToBasket() {
        const newCart = { ...cart, count: 1 };
        setBasketCarts([...basketCarts, newCart]);
    }
    return (
        <>
            <div className={s.card} key={cart.id}>
                <Link to={`/catalog/${cart.id}`}>
                    <div className={s.img}>
                        <img src={cart.img} alt="" />
                    </div>
                </Link>
                <div className={s.container}>
                    <p>{cart.name}</p>
                    <div className={s.data}>
                        <div className={s.cost}>
                            <div className={s.int}>{cart.price}</div>
                            <div className={s.currency}>₽</div>
                        </div>
                        <button className={s.btn3} onClick={addToBasket}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}