// create a context
//provide the state to the context
//wrap context in roop component
//consume the context using the usecontext

import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ShoppingCartcontext = createContext(null);

function ShoppingCartProvider({ children }) {
  const [loading, setloading] = useState(true);
  const [listofProduct, setlistofProduct] = useState([]);
  const [ProductDeatils, setProductDeatils] = useState(null);
  const [cartItem, setcartItem] = useState([]);
  const navigate = useNavigate();

  async function fetcthListofProduct() {
    const apiresponse = await fetch("https://dummyjson.com/products");
    const result = await apiresponse.json();

    if (result && result?.products) {
      setlistofProduct(result?.products);
      setloading(false);
    }
  }

  function handelAddtoCart(getdetails) {
    console.log(getdetails);

    let existingCartitem = [...cartItem];
    const findindexofCartItem = existingCartitem.findIndex(
      (cartItem) => cartItem?.id === getdetails?.id
    );

    if (findindexofCartItem === -1) {
      existingCartitem.push({
        ...getdetails,
        quantity: 1,
        TotalPrice: getdetails?.price,
      });
    } else {
      console.log("hereeee");
      existingCartitem[findindexofCartItem] = {
        ...existingCartitem[findindexofCartItem],
        quantity: existingCartitem[findindexofCartItem].quantity + 1,
        TotalPrice:
          (existingCartitem[findindexofCartItem].quantity + 1) *
          existingCartitem[findindexofCartItem].price,
      };
    }

    setcartItem(existingCartitem);
    localStorage.setItem("cartsss", JSON.stringify(existingCartitem)); //rename cartsss
    navigate("/cartlist");
  }

  function handelRemoveFromCart(getdetailsofCart, isFullyremoveFromCart) {
    let existingFromCart = [...cartItem];
    const findindexfromCart = existingFromCart.findIndex(
      (item) => item?.id === getdetailsofCart.id
    );

    if (isFullyremoveFromCart) {
      existingFromCart.splice(findindexfromCart, 1);
    } else {
      existingFromCart[findindexfromCart] = {
        ...existingFromCart[findindexfromCart],
        quantity: existingFromCart[findindexfromCart].quantity - 1,
        TotalPrice:
          (existingFromCart[findindexfromCart].quantity - 1) *
          existingFromCart[findindexfromCart].price,
      };
    }

    localStorage.setItem("cartsss", JSON.stringify(existingFromCart));
    setcartItem(existingFromCart);
  }

  useEffect(() => {
    fetcthListofProduct();
    setcartItem(JSON.parse(localStorage.getItem("cartsss") || [])); // cartsss name use here
  }, []);

  return (
    <ShoppingCartcontext.Provider
      value={{
        listofProduct,
        loading,
        setloading,
        ProductDeatils,
        setProductDeatils,
        handelAddtoCart,
        cartItem,
        handelRemoveFromCart,
      }}
    >
      {children}
    </ShoppingCartcontext.Provider>
  );
}
export default ShoppingCartProvider;
