import { Button } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Cart } from "../Context";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);

  return (
    <div id={prod.id} className="products">
      <img src={prod.image} alt={prod.name} />
      <p>{prod.name}</p>
      <p>Rs.{prod.price.substring(0, 3)}</p>
      <div>
        {cart.includes(prod) ? (
          <Button
            colorScheme="white"
            variant="outline"
            mb={6}
            onClick={() => {
              setCart(cart.filter((c) => c.id !== prod.id));
            }}
          >
            Remove From Cart
          </Button>
        ) : (
          <Button
            colorScheme="white"
            variant="outline"
            mb={6}
            onClick={() => {
              setCart([...cart, prod]);
            }}
          >
            Add To Cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
