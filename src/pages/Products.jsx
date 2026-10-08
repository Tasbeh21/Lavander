import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  
 

  useEffect(() => {
    fetch("https://dummyjson.com/c/908f-0b6e-4987-b056")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  

  return (
    <main className="products-page">
      <section className="products-header">
        <p>Our Collection</p>

        <h1>Flowers For Every Moment</h1>

        <p>
          Discover beautiful flowers and thoughtful arrangements made to express
          what words sometimes cannot.
        </p>
      </section>
      

      <section className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
