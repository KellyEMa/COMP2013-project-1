export default function QuantityCounter({
    productQuantity,
    handledAddQuantity,
    handleRemoveQuantity,
    id, 
    mode
}) {
    return (
    <div className="ProductQuantityDiv">
        <div>
            <button onClick={() => handleRemoveQuantity(id, mode)}> - </button>
        </div>
        <p>{productQuantity}</p>
        <div>
            <button onClick ={() => handledAddQuantity(id,mode)}> + </button>
        </div>
    </div>
    );
}