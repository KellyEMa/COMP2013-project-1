import QuantityCounter from "./QuantityCounter";

export default function CartCard({id,product, quantity, currentPrice, handleRemoveFromCart}){

    return (
    <div> 
     <div className="CartCard">
        <h2>{product}</h2>
        <p>Quantity: {quantity}</p>
        <p>{QuantityCounter()}</p>
        <p>Total Price: ${(quantity && currentPrice ? quantity * currentPrice : 0).toFixed(2)}</p>
        <button
        onClick={() => {
            handleRemoveFromCart({id,product, quantity, currentPrice});
        }}
        >
            Remove Item
        </button>
    </div>
    <div>
    <button>Empty Cart</button>
    <button>CheckOut</button>
    </div>
    </div> 
    )
}