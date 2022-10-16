import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


const CheckOutItem = ({CheckOutItemDetails}) => {
    const {details,price,serviceName} = CheckOutItemDetails;
    return (
        <div>
            <div className='border-2 border-dashed w-3/5 mx-auto my-5 rounded-md p-5'>
                <p className='text-2xl'><FontAwesomeIcon icon={faGear}></FontAwesomeIcon> {serviceName}</p>
                <p className='text-sm my-2'>{details}</p>
                <p className='font-semibold'><span className='text-lg font-extrabold'>$</span>{price}</p>
            </div>
        </div>
    );
};

export default CheckOutItem;