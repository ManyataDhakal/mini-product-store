import './App.css';
import Products from './components/Products';
import { useRoutes, Link } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {

  const routeElement = useRoutes([
    {
      path: '/',
      element: <Products />
    },
    {
      path: '/product/:id',
      element: <ProductDetail />
    },
    {
      path: '/cart',
      element: <Cart />
    }
  ]);
  return (
    <div className="App">
      <Link to="/">Products</Link>
      {' | '}
      <Link to="/cart">Cart</Link>
      {routeElement}
    </div>
  );
}

export default App;
