import ItemListContainer from "../components/ItemListContainer/ItemListConatiner";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import { Routes, Route, Navigate } from "react-router-dom"
import Checkout from "../components/Checkout/Checkout";
import {MenuNavbar} from "../components/Navbar/Navbar";

const PrivateRoutes = () => {

    return (
        <>
            <MenuNavbar />

            <Routes>
              <Route path="/" element={< ItemListContainer />}/>
              <Route path="/:categoryId" element={<ItemListContainer />}/>
              <Route path="/detail/:itemId" element={< ItemDetailContainer />} />
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/checkout" element={<Checkout />}/>
              <Route path="*" element={<Navigate to={"/"} />}/>
            </Routes>  
        </>
    )
}

export default PrivateRoutes