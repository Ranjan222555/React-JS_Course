import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShoppingCartcontext } from "../../context/context";

function ProductDeatils() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    ProductDeatils,
    setProductDeatils,
    loading,
    setloading,
    handelAddtoCart,
    cartItem,
  } = useContext(ShoppingCartcontext);

  async function ProductDeatilsPage() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();

    if (result) {
      setProductDeatils(result);
      setloading(false);
    }
  }

  useEffect(() => {
    ProductDeatilsPage();
  }, [id]);

  if (loading) return <h2>Loading Product Deatils Please Wait!!!</h2>;

  return (
    <div className="bg-white text-gray-900 text-center text-2xl font-bold py-5">
      {" "}
      Product Deatils
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
          <div className="lg:col-span-3 w-full lg:start top-0 text-center">
            <div className="px-4 py-10 rounded-xl shadow-lg relative">
              <img
                className="w-4/5 rounded object-cover"
                src={ProductDeatils?.thumbnail}
                alt={ProductDeatils?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
              {ProductDeatils?.images?.length
                ? ProductDeatils?.images.map((imageItem) => (
                    <div className="rounded-xl p-4 shadow-md" key={imageItem}>
                      <img
                        className="w-24 cursor-pointer"
                        src={imageItem}
                        alt="Product images"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="text-wrap flex">
            <h2 className="text-2xl font-extrabold text-[#333333]">
              {ProductDeatils?.title}
            </h2>
          </div>
          <div className="flex-wrap text-center gap-4 mt-4">
            <p className="text-xl font-bold text-[#333333] ">
              ${ProductDeatils?.price}
            </p>
            <button
              disabled={
                ProductDeatils
                  ? cartItem.findIndex(
                      (item) => item?.id === ProductDeatils.id
                    ) > -1
                  : false
              }
              onClick={() => handelAddtoCart(ProductDeatils)}
              className=" disabled:opacity-60 mt-3 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-black text-sm font-semibold rounded"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/cartlist")}
              className=" mt-3 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-black text-sm font-semibold rounded"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDeatils;
