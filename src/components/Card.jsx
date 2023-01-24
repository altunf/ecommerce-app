import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/productContext";

function Card({ props, title, category, description, price, image }) {
  const { addBasket } = useContext(ProductContext);

  return (
    <div className="col-md-6 mt-5">
      <div className="card flex-md-row mb-4 shadow-sm h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <strong className="d-inline-block mb-2 ">{title}</strong>
          <h6 className="mb-0">
            <div className="category-text">
              <b>{category}</b>
            </div>
          </h6>
          <p className="card-text mt-3">{description}</p>
          <p className="card-textmb-2">£ {price}</p>
          <button className="btn" onClick={() => addBasket(props)}>
            Add to Cart
          </button>
        </div>
        <Link to={`/details/${props.id}`}>
          <img
            className="card-img-right flex-auto d-none d-lg-block"
            alt="Thumbnail [200x250]"
            src={image}
            style={{ width: "250px", height: "250px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default Card;
