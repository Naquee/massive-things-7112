import React from "react";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "../Components/Checkout";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Vegs from "./VegAndFruits";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "../Components/HomePage";
import SinglePage from "../Components/SinglePage";


import BakeryDairy from "./BakeryDairy";
import Beverage from "./Beverage";


import { Shipment } from "../Components/Shipment";
import { Recharge } from "../Components/Payment/Recharge";
import { CheckoutCards } from "../Components/CartCheckout/CheckoutCard";
import { Basket } from "../Components/CartCheckout/page/Basket";
import PrivateRoute from "../Components/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/fruitsandvegetables" element={<Vegs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
       <Route path="/product/:id/:name" element={<SinglePage/>}/>
       <Route path="/backerycakes" element={<BakeryDairy/>}/>
       <Route path="/beverages" element={<Beverage/>}/>
      <Route path="/admin/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/cart" element={<PrivateRoute><Basket /></PrivateRoute>} />

      <Route path="/shipment" element={<PrivateRoute><Shipment /></PrivateRoute>} />
      <Route path="/payment" element={<PrivateRoute><Recharge /></PrivateRoute>} />
      <Route
        path="/checkout"
        element={
          <ChakraProvider>
            <Checkout />
          </ChakraProvider>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
