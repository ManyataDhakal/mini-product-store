import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
    <div>
      <h2>Product Detail</h2>
      <p>Product ID: {id}</p>
      <Link to="/products">Back to Products</Link>
    </div>
  );
}
export default ProductDetail;
