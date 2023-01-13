import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer/ItemListConatiner";
import MenuNavbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <MenuNavbar />
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/:categoryId" element={<ItemListContainer />}/>
      <Route path="*" element={<Navigate to={"/"} />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
