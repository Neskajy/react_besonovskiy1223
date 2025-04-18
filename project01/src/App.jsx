import { Route, Routes } from "react-router-dom"
import Banner from "./components/Banner/Banner"
import Header from "./components/Header/Header"
import HomePage from "./pages/HomePage/HomePage"
import CatalogPage from "./pages/CatalogPage/CatalogPage"
import ProductPage from "./pages/ProductPage/ProductPage"

export default App

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/catalog' element={<CatalogPage/>}></Route>
        <Route path='/catalog/:id' element={<ProductPage/>}></Route>
      </Routes>

    </>
    
  )
}