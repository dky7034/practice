import React from "react";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

/**
 * 상품 목록을 불러오고 정렬하는 컨테이너 컴포넌트
 */
export default function ProductContainer() {
  // 상품 목록 상태
  const [products, setProducts] = useState([]);
  // 정렬 기준 상태 (title, price, rating, id 등)
  const [sortBy, setSortBy] = useState("title");
  // 정렬 순서 상태 (asc: 오름차순, desc: 내림차순)
  const [order, setOrder] = useState("asc");

  /**
   * 정렬 기준과 순서를 설정하는 핸들러 함수
   * @param {string} criterion - 정렬 기준 (title, price, rating, id)
   * @param {string} sortOrder - 정렬 순서 (asc, desc)
   */
  const handleSort = (criterion, sortOrder) => {
    setSortBy(criterion);
    setOrder(sortOrder);
  };

  // sortBy 또는 order가 변경될 때마다 상품 목록을 다시 불러옴
  useEffect(() => {
    async function getProducts() {
      // API에서 정렬된 상품 목록을 가져옴
      const { data } = await axios.get(
        `https://dummyjson.com/products?sortBy=${sortBy}&order=${order}`
      );
      // 데이터 확인
      console.log(data);
      setProducts(data.products);
    }
    getProducts();
  }, [sortBy, order]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-indigo-900">
          상품 목록
        </h1>

        {/* 정렬 버튼 섹션 */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex flex-wrap gap-2 items-center justify-center">
            <span className="font-semibold text-gray-700">정렬:</span>

            {/* ID 정렬 버튼 */}
            <button
              onClick={() => handleSort("id", "asc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "id" && order === "asc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ID(오름차순)
            </button>
            <button
              onClick={() => handleSort("id", "desc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "id" && order === "desc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              ID(내림차순)
            </button>

            {/* 이름 정렬 버튼 */}
            <button
              onClick={() => handleSort("title", "asc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "title" && order === "asc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              이름(오름차순)
            </button>
            <button
              onClick={() => handleSort("title", "desc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "title" && order === "desc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              이름(내림차순)
            </button>

            {/* 가격 정렬 버튼 */}
            <button
              onClick={() => handleSort("price", "asc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "price" && order === "asc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              가격(오름차순)
            </button>
            <button
              onClick={() => handleSort("price", "desc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "price" && order === "desc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              가격(내림차순)
            </button>

            {/* 평점 정렬 버튼 */}
            <button
              onClick={() => handleSort("rating", "asc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "rating" && order === "asc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              평점(오름차순)
            </button>
            <button
              onClick={() => handleSort("rating", "desc")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                sortBy === "rating" && order === "desc"
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              평점(내림차순)
            </button>
          </div>
        </div>

        {/* 상품 그리드 - 반응형 레이아웃 (모바일 1열, 태블릿 2열, 데스크탑 3열) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 상품 목록을 map으로 반복 렌더링 */}
          {products.map((product) => {
            return <Product key={product.id} product={product}></Product>;
          })}
        </div>
      </div>
    </div>
  );
}
