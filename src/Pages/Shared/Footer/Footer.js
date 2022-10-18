import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandshakeAngle, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-[#263f49]'>
            <div className='grid md:grid-cols-3 gap-x-1 px-10 py-10 border-b border-[#385b6b]'>
            <div className="contacts shadow-lg bg-white border-t-4 py-16 px-5 border-[#ffb03b] relative top-[-80px]">
                <div className="logo col-span-2 text-left mb-5">
                    <FontAwesomeIcon icon={faHandshakeAngle} className='text-5xl'></FontAwesomeIcon>
                    <p className='inline-block font-semibold text-lg'><span className='text-3xl font-bold'>a</span>ccountants</p>
                </div>
                <p className='text-sm'><span className='font-semibold'>Office</span> B-9, Second Floor, Capital Tower</p>
                <p className='text-sm my-2'><span className='font-semibold'>Phone:</span> 0141 4072000</p>
                <p className='text-sm'><span className='font-semibold'>Email:</span> caportal@sagipl.com</p>
            </div>
            <div className="quickLinks text-white text-left px-8 mt-[-50px] md:mt-0">
                <p className='text-xl font-semibold border-b border-dashed my-2 py-2'>Quick Links</p>
                <div className="links text-sm">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className="mx-2"></FontAwesomeIcon>Home</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className="mx-2"></FontAwesomeIcon>About us</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className="mx-2"></FontAwesomeIcon>Our Team</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className="mx-2"></FontAwesomeIcon>News</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight} className="mx-2"></FontAwesomeIcon>Disclaimer</a></li>
                    </ul>
                </div>
            </div>
            <div className="usefulLinks text-white text-left px-8">
                <p className='text-xl font-semibold border-b border-dashed my-2 py-2'>Useful Links</p>
                <div className="links text-sm">
                    <ul>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight}  className="mx-2"></FontAwesomeIcon>Income Tax Dept.</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight}  className="mx-2"></FontAwesomeIcon>Central Board of Excise & Customs</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight}  className="mx-2"></FontAwesomeIcon>E-Tax Information Network</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight}  className="mx-2"></FontAwesomeIcon>Ministry of Corporate Affairs</a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faAngleRight}  className="mx-2"></FontAwesomeIcon>Employees Provident Fund</a></li>
                    </ul>
                </div>

            </div>
            </div>
            <div className="copyRight text-white py-5 text-sm">
                <p><span className='font-semibold'>Chartered Accountant.</span> All Rights Reserved</p>
                <p>Copyright <span className='font-bold'>&#169;</span> {year} </p>
            </div>
        </div>
    );
};

export default Footer;