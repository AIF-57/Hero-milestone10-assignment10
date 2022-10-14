import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


const CartItem = ({cartItem}) => {
    const {serviceName,price,quantity} = cartItem;
    console.log(cartItem);
    return (
        <div className='bg-white text-[#ffb03b] my-2 rounded-md flex justify-evenly items-center py-5'>
            <FontAwesomeIcon icon={faGear} className='text-2xl'></FontAwesomeIcon>
            <span>x{quantity}</span>
            <p className='font-semibold text-sm'>{serviceName}</p>
            <p className='font-bold text-lg'>{price}</p>
        </div>
    );
};

export default CartItem;