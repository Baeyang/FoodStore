import React from "react";
import { BrowserRouter as Router, useRoutes, Route, Navigate } from "react-router-dom";
import LayoutDefault from "../Layout/LayoutDefault";
import LayoutAdmin from "../Layout/LayoutAdmin";
import Home from "../pages/Home";
import Post from "../pages/Post";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import Logout from "../pages/Logout";
import SignedRoute from "../components/SignedRoute";
import DetailProduct from "../pages/DetailProduct";
import Checkout from "../pages/Checkout";
import Dashboard from "../pages/Dashboard";
import OrderManage from "../pages/OrderManage";
import DetailOrder from "../pages/OrderManage/DetailOrder";
import ProductManage from "../pages/ProductManage";
import Product from "../pages/Product";
export const routes = [
    {
      path: "/",
      element: <LayoutDefault />,
      children: [
        { index: true, element: <Home /> },
        { path: "post", element: <Post /> },
        { path: "cart", element: <Cart /> },
        { path: "product", element: <Product /> },
        { path: "product/:id", element: <DetailProduct /> },
        { path: "login", element: <Login /> },
        { path: "checkout", element: <Checkout /> },
        { path: "*", element: <Navigate to="/" /> },
        { path: "logout", element: <Logout /> },
      ],
    },
    {
      element: <SignedRoute />,
      children: [
        {
          element: <LayoutAdmin />,
          children: [
            { path: "admin", element: <Dashboard /> },
            { path: "order-manage", element: <OrderManage /> },
            { path: "detail-order/:id", element: <DetailOrder /> },
            { path: "product-manage", element: <ProductManage /> },
          ],
        },
      ],
    },
  ];
