//import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductCardContainer({
    data,
    productQuantity,
    setProductQuantity,
    handleOnChangePrice,
    handleAddQuantity,
    handleAddToCart,
}) {
    return (
        <div>
            {data.map((productInfo) => (
                <ProductCard 
                key ={productInfo.id}
                {...productInfo}
                productQuantity={productQuantity.find(
                    (prod) => prod.id == productInfo.id
                )}
                setProductQuantity = {setProductQuantity}
                handleOnChangePrice ={handleOnChangePrice}
                handleAddQuantity={handleAddQuantity}
                handleAddToCart = {handleAddToCart}
                />
            ))}
        </div>
    );
}