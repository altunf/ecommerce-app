import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const categoryItem = categories.map((item, index) => {
    return (
      <Link key={index} className="btn btn-link" to={`/categories/${item}`}>
        {item}
      </Link>
    );
  });

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  return <div className="d-flex gap-5">{categoryItem}</div>;
}

export default CategoryList;
