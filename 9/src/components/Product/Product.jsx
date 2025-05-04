import { useParams, Link } from "react-router-dom";
import { props } from "../../props.js";
import s from './Product.module.scss';
import left from "../../assets/svg/left.svg";

import { useContext } from "react";

import { BasketCartsContext } from "../../context";

export default function ProductPage() {

    const {id} = useParams();
    const cart = props.find(prop=>prop.id == id);

    const { basketCarts, setBasketCarts } = useContext(BasketCartsContext);
    function addToBasket() {
        const newCart = { ...cart, count: 1 };

        const existingCartIemIndex = basketCarts.findIndex(
            (basketCart) => basketCart.id === newCart.id
        )

        if (existingCartIemIndex !== -1) {
            const updatedBasketCarts = [...basketCarts];
            updatedBasketCarts[existingCartIemIndex].count += 1;
            setBasketCarts(updatedBasketCarts);
        } else {
            setBasketCarts([...basketCarts, newCart]);
        }
    }

    
    return (
        <div className={s.product}>
            <div className={s.container}>
            <Link to="/catalog">
                <img src="public/icons/left.svg" alt="" className={s.svg}/>
                <button className={s.btn3}>
                    <img src={left} alt="" />
                        На главную
                </button>
            </Link>
            <div className={s.product__info}>
                <div className={s.img}>
                    <img src={`${cart.img}`} alt="" />
                </div>
                <div className={s.about}>
                    <h3 className="name">
                        {cart.name}
                    </h3>
                    <div className={s.text}>
                        <div className="description">
                            {cart.description}
                        </div>
                    </div>
                    <div className={s.purchase}>
                        <span className={s.cost}>
                            <span className={s.int}>
                                {cart.price}
                            </span>
                            <span className={s.currency}>
                                ₽
                            </span>
                        </span>
                        <button className={s.btn4} onClick={addToBasket}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}