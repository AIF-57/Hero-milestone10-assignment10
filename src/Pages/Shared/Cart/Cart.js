import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';


const Cart = ({cartItems}) => {
    console.log(cartItems);

    const navigate = useNavigate();
    const proceedCheckOut = () =>{
        navigate('/checkout')
    }
    return (
        <div>
            <p>Cart from cart</p>
            <p>{cartItems.length}</p>
            <div className="cartItemDetails">
                {
                    cartItems.map(cartItem => <CartItem
                        cartItem={cartItem}></CartItem>)
                }
                
                {
                    cartItems.length > 0 && <button onClick={proceedCheckOut} className='border-dashed border py-1 px-2 text-[#ffb03b] font-bold rounded-md'>Proceed Checkout</button>
                }
            </div>
        </div>
    );
};

export default Cart;