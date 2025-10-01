import React from "react";

export default function Product({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      {/* 상품명 */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
        <h3 className="text-xl font-bold text-white">{product.title}</h3>
      </div>

      <div className="p-6">
        {/* 가격 & 평점 */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-3xl font-bold text-indigo-600">
            ${product.price}
          </span>
          <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
            ⭐ {product.rating}
          </span>
        </div>

        {/* 설명 */}
        <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>

        {/* 상세 정보 */}
        <div className="space-y-2 border-t pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">카테고리:</span>
            <span className="font-medium text-gray-700">{product.category}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">브랜드:</span>
            <span className="font-medium text-gray-700">{product.brand}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">재고:</span>
            <span className={`font-medium ${product.stock > 50 ? 'text-green-600' : 'text-orange-600'}`}>
              {product.stock}개
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">ID:</span>
            <span className="font-mono text-gray-700">{product.id}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
