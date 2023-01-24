import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";

export default function BasketProucts({ products }) {
  const { removeBasket, incrementCount, decrementCount } =
    useContext(ProductContext);

  return (
    <div className="container">
      <div className="row mb-4 d-flex justify-content-between align-items-center">
        <div className="col">
          <Link to={`/details/${products.id}`}>
            <img
              src={products.image}
              alt="..."
              style={{ width: "140px", height: "150px" }}
            />
          </Link>
        </div>
        <div className="col">
          <h6 className="text-muted">{products.category}</h6>
          <h6>{products.title}</h6>
        </div>
        <div className="col-4 rounded">
          <a
            className="btn-link"
            onClick={() => products.count > 1 && decrementCount(products)}
          >
            <i className="bi bi-dash-lg"></i>
          </a>

          <input
            className="border rounded px-1"
            type="number"
            defaultValue={products.count}
            style={{ width: "3rem" }}
          />

          <a
            className="btn-link"
            onClick={() => products.count < 10 && incrementCount(products)}
          >
            <i className="bi bi-plus-lg"></i>
          </a>
        </div>
        <div className="col text-end md-3 lg-2 xl-2">
          <h6 className="mb-0">€{products.price * products.count}</h6>
        </div>
        <div className="col text-end md-1 lg-1 xl-1">
          <a className="text-muted" onClick={() => removeBasket(products)}>
            <i className="bi bi-trash3-fill"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
