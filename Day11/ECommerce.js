import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export function Home() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <CartContext.Provider value={{cart, addToCart}}>
            <div>
                <h1>Home</h1>
                <Products />
                <Profile />
                <Cart />
            </div>
        </CartContext.Provider>
    );
}

export function Products() {
    return (
        <div>
            <h1>Products</h1>
            <Product1 />
            <Product2 />
            <Product3 />
        </div>
    );
}

function Product1() {
    const {addToCart} = useContext(CartContext);
    const product = {id: 1, name: 'Product 1'};
    return (
        <div>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}
function Product2() {
    const {addToCart} = useContext(CartContext);
    const product = {id: 1, name: 'Product 2'};
    return (
        <div>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}
function Product3() {
    const {addToCart} = useContext(CartContext);
    const product = {id: 1, name: 'Product 3'};
    return (
        <div>
            <h2>{product.name}</h2>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
}

export function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <p>User Profile Information</p>
        </div>
    );
}

export function Cart() {
    const {cart} = useContext(CartContext);
    return (
        <div>
            <h1>Cart</h1>
            <h2>Number of items in the cart: {cart.length}</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}