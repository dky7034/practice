// components/ProductCard/ProductCard.jsx

export default function ProductCard({ product }) {
  const { id, title, description, images, price, rating, stock, tags } =
    product;
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow bg-white max-w-sm">
      <div className="mb-4">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-48 object-cover rounded-md"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center mb-3">
        <p className="text-3xl font-bold text-blue-600">${price}</p>
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-gray-700 font-semibold">{rating}</span>
        </div>
      </div>
      <p className="text-sm text-gray-500 mb-4">재고: {stock}개</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs font-semibold">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
