import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext.jsx";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ShopPage from "./pages/ShopPage.jsx";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tienda" element={<ShopPage />} />
          <Route path="/producto/:slug" element={<ProductPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
