import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

function AllProducts() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setAll(res.data);
    });
  }, []);

  return (
    <div className="container mt-5 mb-5 p-3">
      <div className="row">
        {all.map((item) => {
          return (
            <Card
              key={item.id}
              props={item}
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
