import { useState, useEffect} from "react";
import ProductCard from "./ProductCard";
function Products(){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data.products);
        });
    }, []);
    return (
        <>
        {
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