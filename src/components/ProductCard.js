import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
function ProductCard(props){
    const { product } = props;

    const dispatch = useDispatch();

    const addToCartHandler = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payLoad: product
        });
    }
    return(
        <div>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>

        <Link to={`/product/${product.id}`}>
            View Details
        </Link>
        <button onClick={addToCartHandler}>Add to Cart
        </button>
        </div>
    )
}
export default ProductCard;