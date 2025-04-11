import s from "./Header.module.scss";
import "../../index.scss";
import { useState } from "react";
import logo from "../../assets/svg/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
        console.log("isActive:", isActive);
        console.log("Applied className:", `${s.burger} ${isActive ? s.active : ""}`);
    }

    return (
        <>
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
                        </ul>
                    </nav>
                    <div 
                        className={`${s.burger} ${isActive ? s.active : ""}`}
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
        </>
    )
}