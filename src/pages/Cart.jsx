import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart Is Empty</h1>
          <p>Discover something beautiful for your next special moment.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <div className="cart-header">
        <p>Your Selection</p>
        <h1>Shopping Cart</h1>
      </div>

      <section className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-item-info">
                <p>{item.category}</p>
                <h3>{item.name}</h3>
                <span>${item.price}</span>

                <p>Quantity: {item.quantity}</p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <span>Free</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="checkout-btn">
            Checkout
          </button>
        </div>
      </section>
    </main>
  );
}