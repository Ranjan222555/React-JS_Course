import { useMutation, useQuery, useQueryClient } from "react-query";
import { fetchListofProducts, newProduct } from "./Api/Api";
import { useState } from "react";

function ReactQueryExample() {
  const [productTitle, setproductTitle] = useState("");

  const getQueryClint = useQueryClient();

  const { data: ProductList, isLoading } = useQuery({
    queryKey: ["ManyProduct"],
    queryFn: () => fetchListofProducts(),
  });

  const { mutateAsync: addNewMutationProduct } = useMutation({
    mutationFn: newProduct,
    onSuccess: () => {
      getQueryClint.invalidateQueries(["ManyProduct"]);
    },
  });

  async function AddNewProductButton() {
    await addNewMutationProduct(productTitle);
    setproductTitle("");
  }

  if (isLoading) return <h2>Loading Please Wait</h2>;

  return (
    <div>
      <h2>React Query Example</h2>
      <div>
        <input
          value={productTitle}
          onChange={(event) => setproductTitle(event.target.value)}
          type="text"
          name="name"
          placeholder="Enter product Title"
        />
        <button
          onClick={AddNewProductButton}
          disabled={productTitle.trim() === ""}
          type="button"
        >
          Add New
        </button>
      </div>
      <ul>
        {ProductList.length > 0 ? (
          ProductList.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))
        ) : (
          <h3>No fOund</h3>
        )}
      </ul>
    </div>
  );
}
export default ReactQueryExample;
