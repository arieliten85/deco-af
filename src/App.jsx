import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/Footer";

import ProductCatalogPage from "./pages/ProductCatalogPage";
import HomePage from "./pages/Home";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productos" element={<ProductCatalogPage />} />

          <Route path="/producto/:id" element={<ProductDetail />} />

          <Route path="/productos/:category" element={<ProductCatalogPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
