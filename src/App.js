import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListConatiner";
import MenuNavbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailConatiner from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartContext";

function App() {

  

  return (
  <CartProvider>
    <BrowserRouter>
    <MenuNavbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/:categoryId" element={<ItemListContainer />}/>
      <Route path="*" element={<Navigate to={"/"} />}/>
      <Route path="/detail/:itemId" element={<ItemDetailConatiner />} />
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
  </CartProvider>
  );
}

export default App;
