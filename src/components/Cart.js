import { useSelector, useDispatch } from "react-redux";
function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeHandler = (index) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      itemIndex: index,
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((cartItem, index) => (
        <div key={index}>
          <p>
            {cartItem.title} - ${cartItem.price}
          </p>
          <button onClick={() => removeHandler(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
export default Cart;
