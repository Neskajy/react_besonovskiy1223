import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/react.svg'
import s from './Header.module.css'
import BlueBtn from '../BlueBtn/BlueBtn'
export default function Header() {
    return (
        <header className={s.header}>

            <div className="container">

                <div className={s.header__inner}>

                    <img src={logo} alt="#" className={s.logo} />

                    <nav className={s.nav}>

                        <NavLink to="/" className={`${s.nav__item} nav__item`}>Главная</NavLink>
                        <NavLink to="/catalog" className={`${s.nav__item} nav__item`}>Каталог</NavLink>

                    </nav>

                    <BlueBtn text='Авторизация'/>
                    

                </div>

            </div>

        </header>
    )
}