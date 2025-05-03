import s from "./BasketCart.module.scss";
import { useState, useContext } from "react";
import { BasketCartsContext } from "../../context";

export default function BasketCart({ cart }) {

    let { basketCarts, setBasketCarts } = useContext(BasketCartsContext);

    const currentBasketCart = basketCarts.find(item => item.id === cart.id);

    function countIncrement() {
        setBasketCarts(basketCarts.map(item =>
            item.id === cart.id
                ? {...item, count: item.count + 1}
                : item
            )
        )
    }

    function countDecrement() {
        setBasketCarts(basketCarts.map(item =>
            item.id === cart.id
                ? {...item, count: item.count > 1 ? item.count - 1 : item.count}
                : item
            )
        )
    }

    function deleteCard() {
        setBasketCarts(basketCarts.filter(item =>
            item.id != cart.id
        ))
    }

    return (
        <>
            <div className={s.card}>
                <img src={cart.img} alt="" />
                <div className={s.info}>
                    <div className={s.left__info}>
                        <p>{cart.name}</p>
                        <div className={s.cost}>
                            <div className={s.int}>{cart.price}</div>
                            <div className={s.currency}>₽</div>
                        </div>
                    </div>
                    <div className={s.right__info}>
                        <div className={s.count}>
                            <div className={s.minus} onClick={countDecrement}>-</div>
                            <div className={s.status}>
                                <div className={s.count}>
                                    {currentBasketCart.count}
                                </div>
                                <div className={s.prefix}>
                                    шт
                                </div>
                            </div>
                            <div className={s.plus} onClick={countIncrement}>+</div>
                        </div>
                        <button className={s.btnDelete} onClick={deleteCard}>
                            Удалить
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}