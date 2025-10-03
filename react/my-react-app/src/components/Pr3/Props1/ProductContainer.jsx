// components/ProductCard/ProductContainer.jsx
import ProductCard from "./ProductCard";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ProductContainer() {
  // useState
  const [product, setProduct] = useState([]);
  // useEffect
  useEffect(() => {
    async function getProducts() {
      const { data } = await axios.get("https://dummyjson.com/products");
      setProduct(data.products);
      console.log(data.products);
    }
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">상품 목록</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {product.map((e) => {
            return <ProductCard key={e.id} product={e}></ProductCard>;
          })}
        </div>
      </div>
    </div>
  );
}
