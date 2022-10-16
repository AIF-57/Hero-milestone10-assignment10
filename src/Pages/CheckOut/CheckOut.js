import React from 'react';
import useCart from '../../hooks/useCart';
import useServices from '../../hooks/useServices';
import CheckOutItem from './CheckOutItem';

const CheckOut = () => {
    const {services} = useServices();
    const {cartItems} = useCart(services);

    let totalPrice = 0;
    for(const items of cartItems){
        totalPrice = totalPrice + parseFloat(items.price);
    };
    return (
        <div className='py-5'>
            <p className='font-semibold'>Total Items : <span className='font-extrabold'>{cartItems.length}</span></p>
            {
                cartItems.map(cartItem => <CheckOutItem
                    key={cartItem.id}
                    CheckOutItemDetails={cartItem}></CheckOutItem>)
            }
            <button className='bg-[#ffb03b] py-2 w-64 font-bold rounded-md'>${totalPrice}</button>
        </div>
    );
};

export default CheckOut;