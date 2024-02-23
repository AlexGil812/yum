import useCartStore from "../store.js/store";
import "../CartPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);
  const navigate = useNavigate();

  const Home = () => {
    navigate("/menu");
  };

  return (
    <>
      <button className="back-to-home" onClick={Home}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className="cart-container">
        <h2>Your Cart</h2>
        {items.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                {item.name} ({item.quantity}) - ${item.price}
                <button onClick={() => removeItem(item.id)}>Remove all</button>
                <button onClick={() => increaseQuantity(item.id)}>add 1</button>
                <button onClick={() => decreaseQuantity(item.id)}>
                  remove 1
                </button>
              </li>
            ))}
          </ul>
        )}

        <div>
          Total: $
          {items
            .reduce(
              (total, item) => total + Number(item.price) * item.quantity,
              0,
            )
            .toFixed(2)}
        </div>

        <button>Proceed to Checkout</button>
      </div>
    </>
  );
};

export default CartComponent;
