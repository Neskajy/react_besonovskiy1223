import Header from "../components/Header/Header.jsx";
import BurgerMenu from "../components/BurgerMenu/BurgerMenu.jsx";
import Catalog from "../components/Catalog/Catalog.jsx";
import Footer from "../components/Footer/Footer.jsx";


export default function CatalogPage() {
    return (
        <>
            <Header />
            <BurgerMenu />
            <Catalog/>
            <Footer />
        </>
    )
}