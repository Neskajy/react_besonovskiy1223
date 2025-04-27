import s from "./Header.module.scss";
import "../../index.scss";
import { useContext, useState } from "react";
import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

import { isActiveContextBurger } from "../../context.js";

export default function Header() {
    const { isActiveBurger, setIsActiveBurger } = useContext(isActiveContextBurger);

    const handleClick = () => {
        setIsActiveBurger(!isActiveBurger);
    }

    const [count, setCount] = useState(0);

    function incrementCount() {
        setCount(count + 1);
    }

    return (
        <header className={s.header}>
            <div className={s.container}>
                <nav className={s.nav}>
                    <ul className={s.ul}>
                        <li className={s.active}>
                            <Link to="/">О нас</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Каталог</Link>
                        </li>
                        <li>
                            <Link to="/">Где нас найти</Link>
                        </li>
                        <li onClick={incrementCount}>
                            { count }
                        </li>
                    </ul>
                </nav>
                <div 
                    className={`${s.burger} ${isActiveBurger ? s.active : ""}`}
                    onClick={handleClick}>
                    <div className={s.burger__inner}>
                        <span className={s.top}></span>
                        <span className={s.center}></span>
                        <span className={s.bottom}></span>
                    </div>
                </div>
                <div className={s.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={s.buttons}>
                    <button className={s.btn1}>Регистрация</button>
                    <button className={s.btn2}>Вход</button>
                </div>
            </div>
        </header>
    )
}