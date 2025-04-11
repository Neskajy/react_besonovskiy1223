import s from "./BurgerMenu.module.scss";
import { useState } from "react";

export default function BurgerMenu() {
    const [isActive, setIsActive] = useState(false);
    
    const handleClick = () => {
        setIsActive(!isActive);
        console.log("isActive:", isActive);
        console.log("Applied className:", `${s.burger} ${isActive ? s.active : ""}`);
    }
    return (
        <>
            <section className={s.BurgerMenu}>
                
                <div className={s.container}>
                    <nav className={s.nav}>
                        <ul className={s.ul}>
                            <li className={s.active}>
                                <a href="/">О нас</a>
                            </li>
                            <li>
                                <a href="/catalog">Каталог</a>
                            </li>
                            <li>
                                <a href="/">Где нас найти</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    ) 
}