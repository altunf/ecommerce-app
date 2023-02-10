import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/productContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import BasketProucts from "../components/BasketProucts";
import "react-toastify/dist/ReactToastify.css";

export default function ShopCart() {
  const { productBasket, total } = useContext(ProductContext);
  const [select, setSelect] = useState(0);
  const [giveCode, setGiveCode] = useState("");
  const [gift, setGift] = useState(0);

  // const styleNotify = {};

  const notifySuccess = () =>
    toast.success("Siparişiniz Alındı!", {
      position: "top-center",
      hideProgressBar: false,
      autoClose: 2000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const updateTotal = () => {
    const update = Number(total.toFixed(1)) + Number(select);
    return update;
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();
    const notifyGiveCode = () =>
      toast.success("Tebrikler! £100 indirim kazandınız 🍻", {
        position: "top-center",
        hideProgressBar: false,
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    const notifyError = () =>
      toast.error("Lütfen geçerli bir kod giriniz!", {
        position: "top-center",
        hideProgressBar: false,
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    setGiveCode("");
    giveCode === "ABCD123" ? notifyGiveCode() && setGift(100) : notifyError();
  };

  useEffect(() => {
    updateTotal();
  }, []);

  return (
    <div className="container rounded">
      <div>
        <div className="row">
          <div className="col">
            <div className="row g-0">
              <div className="col">
                <div className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h1 className="fw-bold text-black">Shopping Cart</h1>
                    <h6 className="text-muted">{productBasket.length} items</h6>
                  </div>

                  {/* ---------- Mapping Products --------*/}

                  <div>
                    {productBasket.map((products, index) => {
                      return (
                        <div key={index}>
                          <BasketProucts products={products} />
                        </div>
                      );
                    })}
                  </div>

                  {/* ---------------- Back to shop -------------- */}

                  <Link to="/" className="text-body">
                    <i className="bi bi-arrow-left-circle-fill fs-6">
                      Back to Shop
                    </i>
                  </Link>
                </div>
              </div>

              {/* --------------------------- SUMMARY ------------------------ */}

              <div className="col bg-light bg-gradient bg-opacity-100 rounded">
                <div className="p-5">
                  <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                  <hr className="my-4" />

                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="text-uppercase">
                      items {productBasket.length}
                    </h5>
                    <h5>€ {total.toFixed(1)}</h5>
                  </div>

                  {/* ---------------- SHİPPİNG -------------- */}

                  <h5 className="text-uppercase mb-3">Shipping</h5>

                  <div className="mb-4 pb-2">
                    <select
                      className="custom-select p-2 rounded bg-grey"
                      style={{ width: "100%" }}
                      value={select}
                      onChange={handleSelect}
                    >
                      <option value="0">Select-Delivery</option>
                      <option value={5}>Standard-Delivery- €5.00</option>
                      <option value={10}>Fast-Delivery- €10.00</option>
                    </select>
                  </div>

                  {/* ---------------- GİVE CODE -------------- */}

                  <h5 className="text-uppercase mb-3">Give code</h5>

                  <form onSubmit={submitHandle} className="mb-5">
                    <input
                      className="form-control"
                      type="text"
                      value={giveCode}
                      placeholder="Enter your code"
                      onChange={(e) => setGiveCode(e.target.value)}
                    />
                  </form>

                  <hr className="my-4" />

                  {/* ---------------- TOTAL -------------- */}

                  <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>€ {updateTotal() - gift.toFixed(1)}</h5>
                  </div>

                  <button
                    className="btn btn-block btn-dark"
                    onClick={notifySuccess}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}
