import { Outlet } from "react-router-dom";
import usefetch from "../use-fetch";
import { useMemo, useState } from "react";

function UseMemoHooks() {
  const { data, loading } = usefetch("https://dummyjson.com/products");
  const [flag, setflag] = useState(false);

  function Filterproduct(getProduct) {

    
    console.log("render");

    return getProduct?.length > 0
      ? getProduct.filter((singleProduct) => singleProduct.price > 10)
      : [];
  }

  const memorize = useMemo(
    () => Filterproduct(data?.products),
    [data?.products]
  );

  if (loading) return <h2>Loading Data Please Wait</h2>;
  console.log(data);

  return (
    <div>
      <button onClick={() => setflag(!flag)}>Toggle Flag</button>
      <h2 style={{ color: flag ? "red" : "yellow" }}>
        This is UseMemo Example
      </h2>
      <ul>
        {memorize.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default UseMemoHooks;
