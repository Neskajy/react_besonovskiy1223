import { useParams, Link } from "react-router-dom";
import { props } from "../../props.js";
import s from './Product.module.scss';
import left from "../../assets/svg/left.svg";

export default function ProductPage() {
    const {id} = useParams();
    const props_ = props.find(prop=>prop.id == id);
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
                    <img src={`${props_.img}`} alt="" />
                </div>
                <div className={s.about}>
                    <h3 className="name">
                        {props_.name}
                    </h3>
                    <div className={s.text}>
                        <div className="description">
                            {props_.description}
                        </div>
                    </div>
                    <div className={s.purchase}>
                        <span className={s.cost}>
                            <span className={s.int}>
                                {props_.price}
                            </span>
                            <span className={s.currency}>
                                ₽
                            </span>
                        </span>
                        <button className={s.btn4}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}