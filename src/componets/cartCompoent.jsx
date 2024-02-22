import useCartStore from "../store.js/store";
import '../CartPage.css';

const CartComponent = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="cart-container"> 
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} ({item.quantity}) - ${item.price}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}

         <div>
         Total: $
          {items.reduce(
           (total, item) => total + Number(item.price) * item.quantity,
            0
            ).toFixed(2)}
              </div>

      <button>Proceed to Checkout</button>
    </div> 
  );
};

export default CartComponent;