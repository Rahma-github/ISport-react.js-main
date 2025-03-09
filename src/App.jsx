// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ProductProvider } from "./context/ProductContext";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from './Components/protectedRoute'

import Navbar from "./components/NavBar";
import Home from "./Pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ContactUs from "./Pages/ContactUs";
import AddToCart from "./Pages/AddToCart";
import Payment from "./Pages/payment";
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <>
//         <Navbar />
//         <ProductProvider>
//           <Home />
//         </ProductProvider>
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/products",
//     element: (
//       <>
//         <Navbar />
//         <ProductProvider>
//           <Products />
//         </ProductProvider>
//         <Footer />
//       </>
//     ),
//   },{
//     path: "/home",
//     element: (
//       <>
//         <Navbar />
//         <ProductProvider>
//           <Home />
//         </ProductProvider>
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/details/:id",
//     element: (
//       <>
//         <Navbar />
//         <ProductProvider>
//           <ProductDetail />
//         </ProductProvider>
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/favorite",
//     element: (
//       <>
//         <Navbar />
//         <ProductProvider>
//           <Favorites />
//         </ProductProvider>
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <>
//         <Navbar />
//         <About />
//         <Footer />
//       </>
//     ),
//   },
//   {
//     path: "*",
//     element: (
//       <>
//         <Navbar />
//         <NotFound />
//         <Footer />
//       </>
//     ),
//   },
// ]);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"   element={<Home />} />
          <Route path="/Home"   element={<Home />} />

          <Route path="/products" element={<Products />} />
          <Route path="/details/:id" element={<ProductDetail />} />
          <Route path="/favorite" element={<ProtectedRoute><Favorites /></ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<AddToCart />} />
        <Route path="/payment" element={<Payment />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
