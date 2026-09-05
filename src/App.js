import './App.css';
import Products from './components/Products';
import { useRoutes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {

  const routeElement = useRoutes([
    {
      path: '/',
      element: <Products />
    },
    {
      path: '/product/:id',
      element: <ProductDetail />
    }
  ]);
  return (
    <div className="App">
      {routeElement}
    </div>
  );
}

export default App;
