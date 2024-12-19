import { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductList from "./pages/Productlist/productList";
import CartList from "./pages/cartlist/cartList";
import ProductDeatils from "./pages/productdeatils/productDeatils";
import PaymentPage from "./pages/PaymentPage/Payment-Page";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/cartlist" element={<CartList />} />
        <Route path="/productdeatils/:id" element={<ProductDeatils />} />
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route
          path="*"
          element={<div style={{ color: "red" }}>404: Page not found</div>}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
