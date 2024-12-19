import { Fragment, useContext } from "react";
import { ShoppingCartcontext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import CartTile from "../../Components/cartTile/CartTile";

function CartList() {
  const { cartItem } = useContext(ShoppingCartcontext);
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="bg-white min-h-screen">
        {/*using min-h-screen change whole bg color of screen */}
        <div className=" max-w-5xl mx-auto max-md:max-w-xl py-4 ">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            My Cart Page
          </h1>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2 space-y-4">
              {cartItem?.length ? (
                cartItem?.map((singlecart, index) => (
                  <div key={index}>
                    <CartTile singlecart={singlecart} />
                  </div>
                ))
              ) : (
                <h2 className="text-black text-xl font-bold">
                  No Product Available Cart is Empty!!!
                </h2>
              )}
            </div>
            <div className="bg-gray-100 rounded-sm p-4 h-max">
              <h3 className="text-xl font-extrabold text-gray-900 border-b border-gray-300 pb-2">
                Order Summary
              </h3>
              <ul className="text-gray-700 mt-4 space-y-2">
                <p className="flex flex-wrap gap-4 text-sm font-bold">
                  Total{" "}
                  <span>
                    ${" "}
                    {cartItem
                      .reduce((acc, curr) => acc + curr.TotalPrice, 0)
                      .toFixed(2)}
                  </span>
                </p>
              </ul>
              <div className="mt-5 flex gap-2 ">
                <button
                  onClick={() => navigate("/PaymentPage")}
                  disabled={cartItem.length === 0}
                  className=" disabled:opacity-60 text-sm px-4 py-3 bg-black text-white font-extrabold"
                >
                  CheckOut
                </button>
                <button
                  onClick={() => navigate("/productlist")}
                  className="text-sm px-4 py-3 bg-black text-white font-extrabold"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default CartList;
