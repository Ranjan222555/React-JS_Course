import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartcontext } from "../../context/context";

function ProductTile({ singleproductTile }) {
  const naviGate = useNavigate();

  const { handelAddtoCart, cartItem } = useContext(ShoppingCartcontext);

  function HandleclickonDeatils(getid) {
    naviGate(`/productdeatils/${getid}`);
  }
  return (
    <div
      onClick={() => HandleclickonDeatils(singleproductTile?.id)}
      className="relative group border border-cyan-700 p-6 cursor-pointer"
    >
      <div className="overflow-hidden aspect-w-1 aspect-h-1 ">
        <img
          src={singleproductTile?.thumbnail}
          alt={singleproductTile?.title}
          className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
        />
        <div className="flex items-start justify-between mt-4 space-x-4">
          <div className="font-bold text-gray-900 sm:text-sm text-xs md:text-base">
            <p className="w-[230px] overflow-hidden text-ellipsis whitespace-nowrap">
              {singleproductTile?.title}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-gray-900 sm:text-sm md:text-[20px]">
            ${singleproductTile?.price}
          </p>
        </div>
        <button
          onClick={() => HandleclickonDeatils(singleproductTile?.id)}
          className="px-5 mt-5 w-full py-2 bg-black text-white font-bold text-lg"
        >
          View Deatils
        </button>
        <button
          disabled={
            singleproductTile
              ? cartItem.findIndex(
                  (item) => item?.id === singleproductTile.id
                ) > -1
              : false
          }
          onClick={() => handelAddtoCart(singleproductTile)} // also need to navigate
          className=" disabled:opacity-60 px-5 mt-5 w-full py-2 bg-black text-white font-bold text-lg"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductTile;
