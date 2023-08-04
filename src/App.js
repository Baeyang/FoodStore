import LayoutDefault from "./Layout/LayoutDefault"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Post from "./pages/Post"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Logout from "./pages/Logout"
import SignedRoute from "./components/SignedRoute"
import DetailProduct from "./pages/DetailProduct"
import Search from "./pages/Search"
import Checkout from "./pages/Checkout"
import { Navigate } from "react-router-dom"
import LayoutAdmin from "./Layout/LayoutAdmin"
import Dashboard from "./pages/Dashboard"
import './App.css';
import OrderManage from "./pages/OrderManage"
import DetailOrder from "./pages/OrderManage/DetailOrder"
import ProductManage from "./pages/ProductManage"
import Product from "./pages/Product"
import ScrollTop from "./components/ScrollTop"
function App() {

  return (
    <>
      <ScrollTop></ScrollTop>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route index={true} element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='search' element={<Search />}></Route>
          <Route path='post' element={<Post />}></Route>
          <Route path='cart' element={<Cart />}></Route>
          <Route path='product' element={<Product />}></Route>
          <Route path='product/:id' element={<DetailProduct />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='checkout' element={<Checkout />}></Route>
          <Route path='*' element={<Navigate to="/" />}></Route>
          <Route path='logout' element={<Logout />}></Route>
        </Route>
        <Route element={<SignedRoute></SignedRoute>}>
          <Route element={<LayoutAdmin></LayoutAdmin>}>
            <Route path='admin' element={<Dashboard></Dashboard>}></Route>
            <Route path='order-manage' element={<OrderManage />}></Route>
            <Route path='detail-order/:id' element={<DetailOrder />}></Route>
            <Route path='product-manage' element={<ProductManage />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  )
}
export default App