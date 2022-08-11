import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";

const CartPage = () => {
  const [total, setTotal] = useState();

  const { cart, setCart } = useContext(Cart);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div className="container">
      <p style={{ fontSize: 50 }}>My Cart</p>
      <p style={{ fontSize: 30 }}>Total: Rs:{total}</p>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
