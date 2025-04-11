import Card from "../Card/Card.jsx";
import s from "./Catalog.module.scss";

export default function Catalog() {
    return (
        <>
            <section className={s.catalog}>
                <div className={s.container}>
                    <h2>Каталог товаров</h2>
                    <div className={s.categories}>
                        Категории
                        <ul>
                            <li className={s.active}>Все товары</li>
                            <li>Шины/колеса</li>
                            <li>Масла</li>
                            <li>Ароматизаторы</li>
                        </ul>
                    </div>
                    <div className={s.output}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

            </section>
        </>
    )
}