import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PostPage from "./pages/PostsPage.jsx";
import UsersPage from "./pages/UsersPage.jsx";
import "./index.scss";
import { Routes, Route, Link} from "react-router-dom";

import { isActiveContextBurger } from "./context.js";
import { useState } from "react";

export default function App() {
    const [isActiveBurger, setIsActiveBurger] = useState(false);
    return (
        <isActiveContextBurger.Provider value={{ isActiveBurger, setIsActiveBurger }}>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<ProductPage /> } />
                <Route path="/posts" element={<PostPage />} />
                <Route path="/users" element={<UsersPage />} />
            </Routes>
        </isActiveContextBurger.Provider>
    )
}