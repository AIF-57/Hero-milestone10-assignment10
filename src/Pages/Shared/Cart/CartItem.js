import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faTrashAlt} from '@fortawesome/free-solid-svg-icons'


const CartItem = ({cartItem,removeItemFromCart}) => {
    const {serviceName,price} = cartItem;
    console.log(cartItem)
    return (
        <div className='bg-white text-[#ffb03b] my-2 rounded-md flex justify-evenly items-center py-5'>
            <div className="">
                <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
                <p className='font-semibold text-sm'>{serviceName}</p>
                <p className='font-bold text-lg'>{price}</p>
            </div>
            <button onClick={() => removeItemFromCart(cartItem)} className='removeItemBtn w-8 h-8 bg-rose-400 text-red-700 rounded-full'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
        </div>
    );
};

export default CartItem;