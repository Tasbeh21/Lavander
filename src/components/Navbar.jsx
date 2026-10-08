import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/c/9207-e284-417e-9e26")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const searchResults = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <nav className="navbar">
      <div className="logo">Lavander</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/products">Flowers</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="nav-actions">
        <div className="navbar-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search flowers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <Link to="/cart" className="cart-btn">
          🛒
        </Link>
      </div>

      {searchTerm && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            searchResults.map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="search-result"
                onClick={() => setSearchTerm("")}
              >
                <img src={product.image} alt={product.name} />

                <div>
                  <h4>{product.name}</h4>
                  <span>${product.price}</span>
                </div>
              </Link>
            ))
          ) : (
            <p className="no-results">
              No flowers found.
            </p>
          )}
        </div>
      )}
    </nav>
  );
}