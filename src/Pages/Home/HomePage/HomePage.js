import React from 'react';
import AboutUs from '../../Shared/About/AboutUs';
import Services from '../../Shared/Services/Services';
import './HomePage.css'

const HomePage = () => {
    return (
        <div>
            <div className='bannerSection py-10 border h-[550px] flex flex-col justify-center items-center'>
                <p className='text-6xl text-[#ffb03b]  font-bold'>Provided</p>
                <p className='text-2xl text-white font-semibold'>professional financial services to businesses.</p>
            </div>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default HomePage;