import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </Link>

      <div className="product-info">
        <p>{product.category}</p>

        <h3>{product.name}</h3>

        <span>${product.price}</span>
      </div>
    </div>
  );
}

