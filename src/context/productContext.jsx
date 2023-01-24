import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [productBasket, setProductBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);

  const addBasket = (product) => {
    const notifyİnfo = () =>
      toast.info(`${productBasket.length + 1}. Ürün Sepete Eklendi`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    const notifyWarn = () =>
      toast.warn("Bu ürün sepete eklenmiş !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    let flag = productBasket.find((item) => {
      return item.id === product.id;
    });
    if (!flag) {
      product.count = 1;
      notifyİnfo();
    }
    flag
      ? notifyWarn()
      : setProductBasket((prevState) => [...prevState, product]);
  };
  const removeBasket = (product) => {
    setProductBasket((prevState) => {
      return prevState.filter((_) => _.id !== product.id);
    });
  };
  const addTotal = () => {
    let priceTotal = 0;
    productBasket.forEach((a) => {
      priceTotal += a.count * a.price;
    });

    setTotal((prevState) => {
      return priceTotal;
    });
  };

  const incrementCount = (prodsParameter) => {
    let prod = productBasket.map((x) => {
      if (x.id === prodsParameter.id) {
        x.count += 1;
      }
      return x;
    });

    setProductBasket((prevState) => {
      return prod;
    });

    addTotal();
  };
  const decrementCount = (prodsParameter) => {
    let prod = productBasket.map((x) => {
      if (x.id === prodsParameter.id) {
        x.count -= 1;
      }
      return x;
    });

    setProductBasket((prevState) => {
      return prod;
    });

    addTotal();
  };

  useEffect(() => {
    addTotal();
  }, [productBasket]);

  return (
    <ProductContext.Provider
      value={{
        productBasket,
        addBasket,
        removeBasket,
        incrementCount,
        total,
        decrementCount,
        addTotal,
        products,
        setProducts,
      }}
    >
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </ProductContext.Provider>
  );
}

export default ProductContext;
