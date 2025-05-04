import { BasketCartsContext } from "../../context";
import s from "./Basket.module.scss";
import { useContext, useEffect, useState } from "react"; 

import BasketCart from "../BasketCart/BasketCart.jsx";

export default function Basket() {
    const { basketCarts } = useContext(BasketCartsContext);

    let [ totalCount, setTotalCount ] = useState(0);
    let [totalPrice, setTotalPrice ] = useState(0);

    useEffect(() => {
        let totalCou = 0;
        let totalPri = 0;
        for (let i = 0; i < basketCarts.length; i++) {
            totalCou += basketCarts[i].count;
            totalPri += basketCarts[i].price * basketCarts[i].count;
        }
        setTotalCount(totalCou);
        setTotalPrice(totalPri);
    }, [basketCarts]);

    return (
        <>
            {
                totalCount === 0 ? (
                    <div className={s.message}>
                        <h2>Корзина пуста 😕</h2>
                    </div>
                )
            :
            (
                <div className={s.Basket}>
                    <div className={s.container}>
                        <div className={s.left}>
                            <h2>Корзина</h2>
                            <div className={s.cards}>
                                {
                                    basketCarts.map(cart =>
                                        <BasketCart key={cart.id} cart={cart}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className={s.products__status}>
                            <h4>Сформировать заказ?</h4>
                            <div className={s.stat}>
                                <div className={`${s.stat__item} amount`}>
                                    <span>Кол-во товаров:</span>
                                    <div className={s.count}>
                                        <div className={s.int}>{totalCount}</div>
                                        <div className={s.prefix}>шт</div>
                                    </div>
                                </div>
                                <div className={`${s.stat__item} money`}>
                                    <span>Сумма к оплате:</span>
                                    <div className={s.count}>
                                        <div className={s.int}>{totalPrice}</div>
                                        <div className={s.prefix}>₽</div>
                                    </div>
                                </div>
                            </div>
                            <button className={s.order}>
                                Заказать
                            </button>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
}