import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navBar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductDetails from "./components/productDetails/ProductDetails";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
