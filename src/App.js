import { ChakraProvider } from "@chakra-ui/react";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <ChakraProvider>
        <BrowserRouter>
          <Header />
          <p style={{ fontSize: 50, textAlign: "center", margin: "33px" }}>
            Shopping Cart
          </p>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
