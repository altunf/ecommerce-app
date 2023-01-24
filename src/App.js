import { ProductProvider } from "./context/productContext";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ShopCart from "./pages/ShopCart";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import PageNotFound from "./pages/PageNotFound";
import AllProducts from "./pages/AllProducts";
import CategoryPages from "./pages/CategoryPages";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart/" element={<ShopCart />} />
          <Route path="/all/" element={<AllProducts />} />
          <Route path="details/:id" element={<DetailPage />} />
          <Route path="/categories/:categoryId" element={<CategoryPages />} />
          <Route path="/login/" element={<Login />}>
            <Route index element={<SignIn />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ProductProvider>
      <Footer />
    </div>
  );
}

export default App;
