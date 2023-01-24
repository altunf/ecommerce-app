import { ProductContext } from "../context/productContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const { productBasket } = useContext(ProductContext);

  return (
    <div className="navbar shadow-0 fixed-top p-3">
      <form className="container">
        <Link to="/" className="navbar-brand text-brown">
          <h3>
            <b className="navbar-title">
              <span className="text-dark">Mega</span>Markt
            </b>
          </h3>
        </Link>

        <div className="d-flex gap-2">
          <Link to="/login/">
            <h4 className="btn rounded">
              <span className="">Login </span>
              <i className="bi bi-person-plus-fill "></i>
            </h4>
          </Link>
          <br />
          <Link to="/cart">
            <h4 className="btn rounded">
              <span>Cart </span>
              <i className="bi bi-cart-fill "> {productBasket.length}</i>
            </h4>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Navbar;
