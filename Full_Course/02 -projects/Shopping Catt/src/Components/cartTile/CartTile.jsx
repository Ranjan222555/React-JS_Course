import { Fragment, useContext } from "react";
import { ShoppingCartcontext } from "../../context/context";
import { useNavigate } from "react-router-dom";

function CartTile({ singlecart }) {
  const { handelRemoveFromCart, handelAddtoCart } =
    useContext(ShoppingCartcontext);

  const naviGate = useNavigate();
  function HandleclickonDeatils(getid) {
    naviGate(`/productdeatils/${getid}`);
  }

  return (
    <Fragment>
      <div className="text-gray-900 font-bold grid grid-cols-3 items-start gap-5 py-2">
        <div className="col-span-2 flex items-start gap-4">
          <div
            onClick={() => HandleclickonDeatils(singlecart?.id)}
            className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-300 p-1 rounded-sm cursor-pointer"
          >
            <img
              className="w-full h-full object-contain"
              src={singlecart?.thumbnail}
              alt={singlecart?.title}
            />
          </div>
          <div>
            <h2 className="text-base font-bold pb-1 text-gray-900">
              {singlecart?.title}
            </h2>
            <button
              onClick={() => handelRemoveFromCart(singlecart, true)}
              className="text-sm px-4 py-2 bg-black text-white font-extrabold"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="ml-auto">
          <h3 className="text-lg font-bold text-gray-900">
            ${singlecart?.TotalPrice.toFixed(2)}
          </h3>
          <p className="mt-2 mb-3 font-bold text-[16px]">
            Quantity : {singlecart?.quantity}
          </p>
          <div className="gap-2 mt-3">
            <button
              onClick={() => handelAddtoCart(singlecart)}
              className="border border-[#000] text-white "
            >
              +
            </button>
            <button
              onClick={() => handelRemoveFromCart(singlecart, false)}
              className="disabled:opacity-80 border border-[#000] text-white"
              disabled={singlecart?.quantity === 1}
            >
              -
            </button>
          </div>
        </div>
      </div>
      <hr className="border-gray-600 " />
    </Fragment>
  );
}
export default CartTile;
