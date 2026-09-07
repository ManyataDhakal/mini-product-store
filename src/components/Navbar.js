import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <div className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          MiniStore
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart" className="cart-link">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="cart-badge">{cart.length}</span></Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
