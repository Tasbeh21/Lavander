import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/c/908f-0b6e-4987-b056")
      .then((response) => response.json())
      .then((data) => {
        const selectedProduct = data.products.find(
          (item) => item.id === Number(id),
        );

        setProduct(selectedProduct);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <main className="product-details">
      <div className="product-details-image">
        <img src={product.image} alt={product.name} />
      </div>

      <div className="product-details-info">
        <p className="product-category">{product.category}</p>

        <h1>{product.name}</h1>

        <p className="product-price">${product.price}</p>

        <p className="product-description">{product.description}</p>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </main>
  );
}
