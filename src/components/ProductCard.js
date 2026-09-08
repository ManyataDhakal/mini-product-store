import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
function ProductCard(props) {
  const { product } = props;

  const dispatch = useDispatch();

  // Dispatch the selected product to the Redux shopping cart
  const addToCartHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payLoad: product,
    });
  };
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.title}</h3>
        <p className="product-price">${product.price}</p>

        <div className="product-actions">
          <Link to={`/product/${product.id}`} className="details-btn">
            View Details
          </Link>
          <button className="cart-btn" onClick={addToCartHandler}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
