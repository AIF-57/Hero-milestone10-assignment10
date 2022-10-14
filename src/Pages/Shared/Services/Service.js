import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'


const Service = ({service,addToCart}) => {
    console.log(service)
    const {serviceName,details,price} = service;
    return (
        <div>
        <div className="serviceCard py-4 border border-dashed rounded-md bg-white flex flex-col justify-center">
        <div className="card">
        <FontAwesomeIcon icon={faGear} className='white text-3xl font-extrabold text-[#ffb03b]'></FontAwesomeIcon>
        <p className='font-bold my-2 text-[#2f4d5a]'>{serviceName}</p>
        <p className='text-[12px] font-semibold my-5 px-2'>{details}</p>
        <button onClick={() => addToCart(service)} className='text-sm text-white font-semibold bg-[#ffb03b] px-5 rounded-full'><span className='text-lg'>$</span>{price}</button>
        </div>
        </div>

        </div>
    );
};

export default Service;