import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "../components/footer/footer";
import Header from "../components/header/header";
import PageNewProduct from "../pages/home/page-new-products/page-new-products";
import ShoppingCar from "../pages/shopping-car/shopping-car";
export default function RoutesApp() {
    return (
        <Router>
            <Header visibleBanner={true}/>
            <Routes>
                <Route exact path="/" element={<PageNewProduct />}></Route>
                <Route exact path="/car" element={<ShoppingCar />}></Route>
            </Routes>
            <Footer/>
        </Router>
    )
}