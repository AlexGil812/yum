import useCartStore from "../store.js/store";

const CartComponent = () => {
  const items = useCartStore(state => state.items);
  const removeItem = useCartStore(state => state.removeItem);
 
  return (
    <>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} ({item.quantity}) - ${item.price}
              <button onClick={() => removeItem(item.id)}>Remove</button>
              {/* Add buttons for increaseQuantity and decreaseQuantity here */}
            </li>
          ))}
        </ul>
      )}
      
      {/* Total Calculation */}
      <div>
        Total: $ {items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)} 
      </div>
      
      {/* Checkout Button */}
      <button>Proceed to Checkout</button>
    </>
  );
};

export default CartComponent;