import './App.css';
import Products from './components/Products';
import { useRoutes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';

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
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);
  return (
    <div className="App">
      <Navbar />
      {routeElement}
    </div>
  );
}

export default App;
