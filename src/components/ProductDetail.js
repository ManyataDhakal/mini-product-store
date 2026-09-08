import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {

  // Get the product ID from the URL
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Fetch the selected product details using its ID
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return <h2>Loading product...</h2>;
  }
  return (
    <main className="product-detail-page">
      <div className="product-detail-container">
        <div className="detail-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        <div className="detail-info">
          <p className="detail-category">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="detail-price">${product.price}</p>
          <p className="detail-description">{product.description}</p>

          <Link to="/products" className="back-btn">
            Back to Products
          </Link>
        </div>
      </div>
    </main>
  );
}
export default ProductDetail;
