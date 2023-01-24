import { useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ProductContext } from "../context/productContext";

import Slider from "../components/Slider";
import axios from "axios";

function Home() {
  const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=12").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <div className="container ">
      <div className="container d-flex justify-content-center mt-4">
        <h3 className="mt-5">
          <b>Categories</b>
        </h3>
      </div>

      <Slider />

      <div className="card-body text-center mb-2">
        <h3 className="mt-5">
          <b>Products</b>
        </h3>
        <NavLink to="all" className="btn mt-5">
          <div> View All </div>
        </NavLink>
      </div>

      <div className="row mb-5">
        <Splide
          options={{
            perPage: 5,
            arrows: false,
            pagination: false,
            gap: "1rem",
          }}
          className="container "
        >
          {products.map((products) => {
            return (
              <SplideSlide className="card" key={products.id}>
                <Link
                  to={`/details/${products.id}`}
                  className="card-img-tiles mt-3"
                >
                  <img
                    src={products.image}
                    alt="products"
                    style={{
                      borderRadius: "1rem",
                      width: "100%",
                      height: "150px",
                      objectFit: "scale-down",
                    }}
                  />
                  <div className="btn mt-2 d-flex justify-content-center">
                    £ {products.price}
                  </div>
                </Link>

                <div className="card-body ">
                  <div className="card-text fs-6">{products.title}</div>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}

export default Home;
