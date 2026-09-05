import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <nav>
            <Link to="/">Products</Link>
            { ' | '}
            <Link to="/cart">Cart</Link>
        </nav>
    );
}
export default Navbar;