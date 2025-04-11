import s from "../Card/Card.module.scss";
import CardImg from "../../assets/raster/Rectangle 3.jpg";

export default function Card() {
    return (
        <>
            <div className={s.card}>
                <div className={s.img}>
                    <img src={CardImg} alt="" />
                </div>
                <div className={s.container}>
                    <p>Ароматизатор для автомобиля Diamond candle c ароматом "Кожа и древесина"</p>
                    <div className={s.data}>
                        <div className={s.cost}>
                            <div className={s.int}>335</div>
                            <div className={s.currency}>₽</div>
                        </div>
                        <button className={s.btn3}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </>
    )
}