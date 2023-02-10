import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

function AllProducts() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setAllProducts(res.data));
  }, []);

  return (
    <div className="container mt-5 mb-5 p-3">
      <div className="row">
        {allProducts.map((product) => {
          return (
            <Card
              key={product.id}
              props={product}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
