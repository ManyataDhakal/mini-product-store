import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [search, setSearch] = useState("");

  const searchInputRef = useRef(null);

  // Focus the search input when the page loads
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // Fetch product data from the DummyJSON API
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  }, []);

  // Filter products based on the user's search input
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase().trim()),
  );
  return (
    <main className="products-page">
      <div className="products-container">
        <div className="products-header">
          <p>Explore Our Collection</p>
          <h1>Our Products</h1>
        </div>
        <input
          className="search-input"
          ref={searchInputRef}
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <h2>Loading products...</h2>
        ) : error ? (
          <h2>Failed to load products.</h2>
        ) : filteredProducts.length === 0 ? (
          <h2>No products found.</h2>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </main>
  );
}
export default Products;
