import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
// import Header1 from "./layouts/Header/Header1";
import Header from "./layouts/Header/Header";
import Customer from "./components/Admin/Customer/Customer";


import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home";
import Log_in from "./components/Admin/Log_in/Log_in";
import Add_customer from "./components/Admin/Customer/Add_customer";
import Dashboard from "./components/Admin/Dashboard/Dashboard";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { SipRounded } from "@mui/icons-material";
import axios from "axios";
import Admin_edit from "./page/Admin_edit";
import Info from "./page/Info_user";
import Login from "./page/Login";
import Register from "./page/Register";
import CheckOrder from "./page/CheckOrder";
import User from "./page/User";
import UserModify from "./page/UserModify";
import Contact from "./components/Contact/Contact";
import ShopPage from "./components/Shop/Shoppage";
import Cart from "./components/Cart/Cart";
import AboutPage from "./components/About_page/About";
import Addproduct from "./components/Admin/Product/Addproduct";
import ProductModify from "./components/Admin/Product/ProductModify";
import Product from"./components/Admin/Product/Product"
import ListReciept from "./components/Admin/Order/ListReciept";
import UserCheckout from "./page/UserCheckout";
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insertproduct" element={<Addproduct />} />
        <Route path="/listproduct" element={<Product />} />
        <Route path="/editpro/:id" element={<ProductModify />} />
        <Route path='/listReceipt' element={<ListReciept />} />
        <Route path="/editcus/:id" element={<Admin_edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanhtoan" element={<UserCheckout />} />
        <Route path="/shoppage" element={<ShopPage />} />
        <Route path="/log_in" element={<Log_in />} />
        <Route path="/User/:name" element={<User />} />
        <Route path="/Useredit/:id" element={<UserModify />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/info" element={<Info />} />
        <Route path="/CheckOrder" element={<CheckOrder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/customer" element={<Customer />} />
        <Route path="/dashboard/product" element={<Product />} />
        
      
        <Route
          path="/dashboard/customer/add_customer"
          element={<Add_customer />}
        />
        <Route path="CheckOrder/:email" element={<CheckOrder />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

// <div className="container-fluid">
//   <div className="row">
//     <div className="col-2 bg-dark min-height-100vh">
//       <Sidebar />
//     </div>
//     <main className="col-10">
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/orders" element={<Orders />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/customers" element={<Customers />} />
//       </Routes>
//     </main>
//   </div>
// </div>
