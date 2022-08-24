import React from "react";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data } = useAxios(`https://api.escuelajs.co/api/v1/products/1`);
  return (
    <div className="min-h-screen bg-orange-500 flex justify-center items-center">
      <div className="max-w-5xl bg-white grid grid-cols-2 rounded-lg">
        <div>
          <img src={data?.category.image} alt="" />
          <div className="flex">
            {data?.images.map((image, index) => (
              <img className="w-40 flex-1 p-2" key={index} src={image} alt="" />
            ))}
          </div>
        </div>
      </div>
      <div className="p-10">
        <h3>Hello</h3>
      </div>
    </div>
  );
};

export default ProductDetail;
