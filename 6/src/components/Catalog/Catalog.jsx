import Card from "../Card/Card.jsx";
import s from "./Catalog.module.scss";
import { props } from "../../props.js";
import { useState } from "react";
import Search from "../Search/Search.jsx";


export default function Catalog() {
    const [search, setSearch] = useState('');
    function handleChange(e){
        setSearch(e.target.value);
    }
    const filteredProps = props.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
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
                    <Search className="search" handleChange={handleChange}/>
                    <div className={s.output}>
                        {
                            filteredProps.map(prop=>
                                <Card key={prop.id} name={prop.name} price={prop.price} img={prop.img} id={prop.id} />
                            )
                        }
                    </div>
                </div>

            </section>
        </>
    )
}