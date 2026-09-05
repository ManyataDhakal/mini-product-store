import { useSelector, useDispatch } from "react-redux";
import { useMemo } from 'react';
function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const total = useMemo(() => {
    return cart.reduce((sum, cartItem) => {
      return sum + cartItem.price;
    }, 0);
  }, [cart]);

  const removeHandler = (index) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      itemIndex: index,
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((cartItem, index) => (
          <div key={index}>
          <p>
            {cartItem.title} - ${cartItem.price}
          </p>
          <button onClick={() => removeHandler(index)}>Remove</button>
        </div>
      ))
      )}

      {cart.length > 0 && (
        <h3>Total: ${total.toFixed(2)}</h3>
      )}
    </div>
  );
}
export default Cart;
