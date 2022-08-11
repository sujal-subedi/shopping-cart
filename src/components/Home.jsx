import { faker } from "@faker-js/faker";
import { useContext, useState } from "react";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = ({}) => {
  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(500, 300, true),
  }));

  const [products, setProducts] = useState(productsArray);

  return (
    <>
      <div className="container">
        <div className="productContainer">
          {products.map((prod) => (
            <SingleProduct prod={prod} key={prod.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
