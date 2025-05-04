import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PostPage from "./pages/PostsPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import CommentsPage from "./pages/CommentsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import "./index.scss";
import { Routes, Route} from "react-router-dom";

import { isActiveContextBurger } from "./context.js";
import { BasketCartsContext } from "./context.js";

import { useState, useEffect } from "react";

export default function App() {
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    const [basketCarts, setBasketCarts] = useState(() => {
        const saved = localStorage.getItem("basketCarts");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        const saved = localStorage.getItem("basketCarts");
        console.log(saved)
        if (saved) {
            try {
                setBasketCarts(JSON.parse(saved));
            } catch (e) {
                console.error("Ошибка парсинга корзины:", e);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("basketCarts", JSON.stringify(basketCarts));
    }, [basketCarts]);

    return (
        <BasketCartsContext.Provider value={{ basketCarts, setBasketCarts }}>
            <isActiveContextBurger.Provider value={{ isActiveBurger, setIsActiveBurger }}>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/catalog" element={<CatalogPage/>} />
                    <Route path="/catalog/:id" element={<ProductPage /> } />
                    <Route path="/posts" element={<PostPage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/comments" element={<CommentsPage />}/>
                    <Route path="/basket" element={<CartPage />}/>
                </Routes>
            </isActiveContextBurger.Provider>
        </BasketCartsContext.Provider>
    )
}