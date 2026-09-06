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
          <Link to="/cart">Cart ({cart.length})</Link>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
