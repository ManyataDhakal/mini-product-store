function ProductCard(props){
    const { product } = props;
    return(
        <div>
        <img src={product.thumbnail} alt={product.title} />
        <h3>{product.title}</h3>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        </div>
    )
}
export default ProductCard;