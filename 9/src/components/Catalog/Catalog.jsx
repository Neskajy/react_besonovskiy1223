import Card from "../Card/Card.jsx";
import s from "./Catalog.module.scss";
import { props } from "../../props.js";
import { useState, useContext } from "react";
import Search from "../Search/Search.jsx";

export default function Catalog() {
    const [search, setSearch] = useState('');
    const [renderCards, setRenderCards] = useState(props);
    const [activeCategory, setActiveCategory] = useState("all");
    function handleChange(e){
        setSearch(e.target.value);
    }
    function renderCategory(category) {

        let categoryProps;
        if (category == "all") {
            categoryProps = props;
        } else {
            categoryProps = props.filter(product => product.category.toLocaleLowerCase() == category);
        }
        
        setActiveCategory(category);
        setRenderCards(categoryProps);
    }

    function handleCategoryClick(category) {
        setActiveCategory(category);
    } 

    const filteredProps = renderCards.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <>
            <section className={s.catalog}>
                <div className={s.container}>
                    <h2>Каталог товаров</h2>
                    <div className={s.categories}>
                        Категории
                        <ul>
                            <li className={activeCategory == "all" ? `${s.active}` : ""} onClick={() => renderCategory("all")}>Все товары</li>
                            <li className={activeCategory == "tires" ? `${s.active}` : ""} onClick={() => renderCategory("tires")}>Шины/колеса</li>
                            <li className={activeCategory == "oil" ? `${s.active}` : ""} onClick={() => renderCategory("oil")}>Масла</li>
                            <li className={activeCategory == "flavoring" ? `${s.active}` : ""} onClick={() => renderCategory("flavoring")}>Ароматизаторы</li>
                        </ul>
                    </div>
                    <Search className="search" handleChange={handleChange}/>
                    <div className={s.output}>
                        {
                            filteredProps.map(prop=>
                                <Card key={prop.id} addToCard={() => setCart([...cart, product.id])} cart={prop} />
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}