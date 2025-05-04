import Header from "../components/Header/Header.jsx";
import Basket from "../components/Basket/Basket.jsx";
import Footer from "../components/Footer/Footer.jsx";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu.jsx";

export default function MainPage() {
    return (
        <>
            <Header />
            <BurgerMenu />
            <Basket />
            <Footer />
        </>
    )
}