import Header from "../components/Header/Header.jsx";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu.jsx";
import Banner from "../components/Banner/Banner.jsx";
import Catalog from "../components/Catalog/Catalog.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function MainPage() {
    return (
        <>
            <Header />
            <BurgerMenu />
            <Banner />
            <Catalog />
            <Footer />
        </>
    )
}