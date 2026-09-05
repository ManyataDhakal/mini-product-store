import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar(){

    const cart = useSelector((state) => state.cart);
    return(
        <nav>
            <Link to="/">Home</Link>
            {' | '}
            <Link to="/products">Products</Link>
            { ' | '}
            <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
    );
}
export default Navbar;