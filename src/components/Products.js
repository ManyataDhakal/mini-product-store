import { useState, useEffect, useRef} from "react";
import ProductCard from "./ProductCard";
function Products(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState('');

    const searchInputRef = useRef(null);


    useEffect(() => {
        searchInputRef.current.focus();
    }, []);
    
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

    const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase().trim())
);
    return (
        <>
        <input 
        ref={searchInputRef}
        type="text" placeholder="Search products..."
        value={search} onChange={(e) => setSearch(e.target.value)} 
        />
        {
            loading ?
            <h2>Loading products...</h2>
            :
            error
            ?
            <h2>Failed to load products.</h2>
            :
            filteredProducts.length === 0
            ?
            <h2>No products found.</h2>
            :
            filteredProducts.map((product)=> {
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