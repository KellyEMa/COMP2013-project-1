import QuantityCounter from "./QuantityCounter"

export default function ProductCard({
   productQuantity,
   image,
   productName,
   brand, 
   setProductQuantity,
   handleOnChangePrice, 
   handleAddQuantity,
   handleAddToCart,
}) {
return(
    <div className="ProductCard">
        <h3>{productName}</h3>
        <h3>{brand}</h3>
        <img src={image} alt="" height="100px"/>
         <p>Quantity: {productQuantity?.quantity ?? 0}</p>
         <p>${((productQuantity?.quantity ?? 0) * price).toFixed(2)}</p>
        <p>{QuantityCounter()}</p>
        <button onClick={() => handleAddToCart(productQuantity)}>
            Add to Cart
        </button>

    </div>
)
}