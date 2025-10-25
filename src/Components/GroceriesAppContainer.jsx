import {useState} from "react";
import ProductCardContainer from "./ProductCardContainer";
import CartContainer from "./CartContainer";

export default function GroceriesAppContainer({data}) {
    const [productQuantity, setProductQuantity] = useState(
        data.map((prod) => {
            return { 
                id: prod.id,
                name: prod.productName,
                brand: prod.brand,
                image: prod.image,
                price: prod.price,
                quantity: 0,
                currentPrice: prod.price,
            };
        })
    );

    const [cart, setCart] = useState([]);

    const handleOnChangePrice = (productId, e) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId) {
                return {...prod, currentPrice: e.target.value };
            }
            return prod;
        });
        setProductQuantity(newProductQuantity);
        return
    };

    const handleAddQuantity = (productId) => {
        const newProductQuantity = productQuantity.map((prod) => {
            if (prod.id === productId) {
                return {... prod, quantity: prod.quantity + 1};
            }
            return prod;
        })
        setProductQuantity(newProductQuantity);
        return;
    };

    const handleAddToCart = (productToAdd) => {
        const currentProduct = data.find((prod) => prod.id === productToAdd.id)

        const productInCart = cart.find((item) => item.id === productToAdd.id);
        if(productToAdd.quantity === 0){
            alert("Please add quantity before adding to the cart!");
            return;
        }

        if (!productInCart){
            setCart((prevCart) => {
                return [...prevCart, {...currentProduct, quantity: productToAdd.quantity, currentPrice: productToAdd.currentPrice},];
            });
        }
        else{
            alert("Item already in cart!")
        }

    };

    const handleRemoveFromCart = (cartItem) => {
        const filteredCart = cart.filter((item) => item.id !== cartItem.id);
        setCart(filteredCart);
    };

    return (
        <div>
        <div>
            <ProductCardContainer
                data={data}
                productQuantity={productQuantity}
                setProductQuantity={setProductQuantity}
                handleOnChangePrice={handleOnChangePrice}
                handleAddQuantity={handleAddQuantity}
                handleAddToCart={handleAddToCart}

            />
        </div>
        <div>
            <h1> Cart </h1>
            <CartContainer 
            cart={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            />
        </div>
        </div>
    );
}