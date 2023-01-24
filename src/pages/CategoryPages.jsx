import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";

function CategoryPages() {
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryId}`)
      .then((res) => {
        setCategory(res.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {category.map((item) => {
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

export default CategoryPages;
