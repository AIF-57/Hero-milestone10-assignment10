import React from 'react';
import CartItem from './CartItem';


const Cart = ({cartItems}) => {
    console.log(cartItems);
    return (
        <div>
            <p>Cart from cart</p>
            <p>{cartItems.length}</p>
            <div className="cartItemDetails">
                {
                    cartItems.map(cartItem => <CartItem
                        cartItem={cartItem}></CartItem>)
                }
            </div>
        </div>
    );
};

export default Cart;