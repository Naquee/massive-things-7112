import React from "react";
import { Route, Routes } from "react-router-dom";
import { Checkout } from "../Components/Checkout";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Vegs from "./VegAndFruits";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "../Components/HomePage";
import SinglePage from "../Components/SinglePage";
import FoodgrainsAndOil from "./FoodgrainAndOil";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/fruitsandvegitables" element={<Vegs />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
       <Route path="/product/:id/name" element={<SinglePage/>}/>
       <Route path="/foodandoil" element={<FoodgrainsAndOil/>}/>
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
