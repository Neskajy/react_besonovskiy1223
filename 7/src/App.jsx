import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import PostPage from "./pages/PostsPage.jsx";
import "./index.scss";
import { Routes, Route, Link} from "react-router-dom";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />}/>
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/catalog/:id" element={<ProductPage /> } />
                <Route path="/posts" element={<PostPage />} />
            </Routes>
        </>
    )
}