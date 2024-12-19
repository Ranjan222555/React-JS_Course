import { useContext } from "react";
import { ShoppingCartcontext } from "../../context/context";
import ProductTile from "../../Components/productTile/productTile";

function ProductList() {
  const { listofProduct, loading } = useContext(ShoppingCartcontext);

  if (loading) return <h2>Loading Please Wait!!</h2>;

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20 ">
      <div className="px-4 max-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-w-md mx-auto text-center">
          <h2 className="text-3xl font-extralight text-gray-950 sm:text-4xl">
            My Products
          </h2>
          <div className="grid grid-cols-2 text-gray-700 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
            {listofProduct && listofProduct.length > 0 ? (
              listofProduct.map((singleproductTile, index) => (
                <div key={index}>
                  <ProductTile singleproductTile={singleproductTile} />
                </div>
              ))
            ) : (
              <h2>No Product Found</h2>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export default ProductList;
