import CartCard from "./CartCard";


export default function CartContainer({ cart, handleRemoveFromCart }) {
  return (
    <div>
      {cart?.length > 0 ? (
        cart.map((item) => (
          <CartCard
            key={item.id}
            {...item}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

        <div>
        <button onClick={() => setCart([])}>Empty Cart</button>
        <button>Checkout</button>
        </div>

    </div>
  );
}