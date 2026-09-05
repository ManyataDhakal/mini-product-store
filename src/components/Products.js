import { useState, useEffect} from "react";
import ProductCard from "./ProductCard";
function Products(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch products');
            }
            return response.json();
        })
        .then(data => {
            setProducts(data.products);
            setLoading(false);
        })
        .catch((error) => {
            setError(true);
            setLoading(false);
        });
    }, []);
    return (
        <>
        {
            loading ?
            <h2>Loading products...</h2>
            :
            error
            ?
            <h2>Failed to load products.</h2>
            :
            products.length === 0
            ?
            <h2>No products found.</h2>
            :
            products.map((product)=> {
                return (
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                )
            })
        }
        </>
    )
}
export default Products;