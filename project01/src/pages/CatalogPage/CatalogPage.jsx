import { useState } from "react";
import { products } from "../../products";
import Card from "./Card/Card";
import s from './CatalogPage.module.css'
import Search from "./Search/Search";
export default function CatalogPage(){
    const [search, setSearch] = useState('');
    function handelCgange(e){
        setSearch(e.target.value);
    }
    const filteredProducts = products.filter(product=>product.name.toLowerCase().includes(search.toLowerCase()))
    return(
        <section className="catalog">
            <div className="container">
                <div className="catalog__inner">
                    <h2 className='title'>Каталог</h2>
                    <Search handleChange={handelCgange}/>
                    <div className={s.cards}>
                        {
                            filteredProducts.map(product=>
                            //    <Card name={product.name} price={product.price} img={product.img}/>    
                            <Card {...product}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}