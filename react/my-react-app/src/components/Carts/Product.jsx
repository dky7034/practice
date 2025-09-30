// components/Carts/Product.jsx

export default function Product({ title, price, quantity, total, thumbnail }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2>상품명{title}</h2>
      <p>가격{price}</p>
      <p>재고{quantity}</p>
      <p>총 가격{total}</p>
      <img src={thumbnail} alt="상품 이미지(thumbnail)" />
    </div>
  );
}
