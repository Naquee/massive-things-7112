import React from "react";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "../Components/Checkout";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Vegs from "./VegAndFruits";
import { ChakraProvider } from "@chakra-ui/react";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/veg" element={<Vegs />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />

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
