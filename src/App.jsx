import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-white bg-[#060714] sm:px-40 sm:py-10">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
