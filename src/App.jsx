import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/Footer";

import ProductCatalogPage from "./pages/ProductCatalogPage";
import HomePage from "./pages/HomePage";

import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductCatalogPage />} />

          <Route
            path="/productos/:category/:nombre"
            element={<ProductDetailPage />}
          />
          <Route path="/productos/:category" element={<ProductCatalogPage />} />

          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
