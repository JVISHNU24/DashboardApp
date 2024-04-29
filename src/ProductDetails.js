import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
const ProductDetails = ({ isOpen }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);
  if (isLoading)
    return <FiLoader className="animate-spin h-8 w-8 mx-auto mt-8" />;
  return (
    <div
      className={`product-details ${
        isOpen ? "ml-64" : "w-full"
      } bg-white rounded-lg p-4 shadow-lg`}
    >
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-700 mb-2">Category: {product.category}</p>
      <p className="text-gray-700 mb-2">Price: ${product.price}</p>
      <p className="text-gray-700 mb-2">Description: {product.description}</p>
      <img
        src={product.image}
        alt={product.title}
        className="max-w-xs mx-auto mb-4 rounded-lg shadow-lg"
      />
    </div>
  );
};
export default ProductDetails;
