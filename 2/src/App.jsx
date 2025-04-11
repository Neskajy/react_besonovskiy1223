import MainPage from "./pages/MainPage";
import CatalogPage from "./pages/CatalogPage.jsx";
import "./index.scss";
import { Routes, Route, Link} from "react-router-dom";


export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage />}/>
            </Routes>
        </>
    )
}