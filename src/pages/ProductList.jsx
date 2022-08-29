import React from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";
import useAxios from "../hooks/useAxios";

function ProductList() {
  // const [products, setProducts] = useState([]);
  const { data, isLoading, error } = useAxios(
    "https://api.escuelajs.co/api/v1/products"
  );

  // useEffect(() => {
  //     const getProducts = async () => {

  //         const results = await axios.get(
  //             "https://api.escuelajs.co/api/v1/products"
  //         );
  //       setProducts(results.data);
  //     };
  //     getProducts();
  // },[data]);
  //  console.log(data);

  if (isLoading) return <Spinner />;

  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-wrap gap-10 justify-center pt-10">
      {data?.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}

export default ProductList;
