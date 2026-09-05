import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Navbar(){

    const cart = useSelector((state) => state.cart);
    return(
        <nav>
            <Link to="/">Products</Link>
            { ' | '}
            <Link to="/cart">Cart ({cart.length})</Link>
        </nav>
    );
}
export default Navbar;