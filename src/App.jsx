import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Supa from "./pages/Supa.jsx";
import "./App.css";
import {StoreProvider} from "./context/context.jsx";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/supa" element={<Supa />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
