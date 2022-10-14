import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight,faQuestion,faCalendarAlt, faFileLines, faLock } from '@fortawesome/free-solid-svg-icons'
import './AboutUs.css'


const AboutUs = () => {
    return (
        <div className='grid grid-cols-2 gap-10 px-8 py-10 bg-[#f5f5f5]'>
            <div className="contentContainer  text-left">
                <div className="contentTitle border-[#2f4d5a] border-l-4 text-[#ffb03b] text-2xl font-bold">
                    <p className='ml-3'>Welcome To</p>
                    <p className='ml-3'>Chartered Accountant</p>
                </div>
                <div className="content text-sm text-[#444444] my-5">
                    <p className='mb-2'><span className='font-semibold'>Chartered Accountant</span> is a leading chartered accountancy firm rendering comprehensive professional services which include Audit, Management Consultancy, Tax Consultancy, Accounting Services, Manpower Management, Secretarial Services etc.</p>
                    <p><span className='font-semibold'>Chartered Accountant</span> is a professionally managed firm. The team consists of distinguished Chartered Accountants, Corporate Financial Advisors and Tax Consultants.</p>
                </div>
                <button className='bg-[#ffb03b] text-white text-sm font-semibold py-1.5 px-4 rounded-full'>About us <FontAwesomeIcon icon={faAngleRight} className='ml-2'></FontAwesomeIcon></button>
            </div>
            <div className="features grid grid-cols-2 gap-5">
                <div className="featureCard py-4 border border-dashed rounded-md bg-white flex flex-col justify-center">
                    <div className="card">
                    <FontAwesomeIcon icon={faQuestion} className='white text-3xl font-extrabold text-[#ffb03b]'></FontAwesomeIcon>
                    <p className='white text-[#444444] font-bold my-2'>What's New</p>
                    <button className='white text-[12px] text-[#ffb03b] font-semibold'>Read More</button>
                    </div>
                </div>
                <div className="featureCard py-4 border border-dashed rounded-md bg-white flex flex-col justify-center">
                    <div className="card">
                    <FontAwesomeIcon icon={faCalendarAlt} className='white text-3xl font-extrabold text-[#ffb03b]'></FontAwesomeIcon>
                    <p className='white text-[#444444] font-bold my-2'>
                    Event Calendar</p>
                    <button className='white text-[12px] text-[#ffb03b] font-semibold'>Read More</button>
                    </div>
                </div>
                <div className="featureCard py-4 border border-dashed rounded-md bg-white flex flex-col justify-center">
                    <div className="card">
                    <FontAwesomeIcon icon={faFileLines} className='white text-3xl font-extrabold text-[#ffb03b]'></FontAwesomeIcon>
                    <p className='white text-[#444444] font-bold my-2'>Timesheet</p>
                    <button className='white text-[12px] text-[#ffb03b] font-semibold'>Read More</button>
                    </div>
                </div>
                <div className="featureCard py-4 border border-dashed rounded-md bg-white flex flex-col justify-center">
                    <div className="card">
                    <FontAwesomeIcon icon={faLock} className='white text-3xl font-extrabold text-[#ffb03b]'></FontAwesomeIcon>
                    <p className='white text-[#444444] font-bold my-2'>Login</p>
                    <button className='white text-[12px] text-[#ffb03b] font-semibold'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;