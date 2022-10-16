import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHandshakeAngle, faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='bg-[#263f49]'>
            <div className='grid grid-cols-3 gap-x-1 px-10 py-10 border-b border-[#385b6b]'>
            <div className="contacts bg-white border-t-[#ffb03b] py-16 px-5 border-2 relative top-[-80px]">
                <FontAwesomeIcon icon={faHandshakeAngle} className="text-5xl mr-auto block mb-5 ml-5"></FontAwesomeIcon>
                <p className='text-sm'><span className='font-semibold'>Office</span> B-9, Second Floor, Capital Tower</p>
                <p className='text-sm my-2'><span className='font-semibold'>Phone:</span> 0141 4072000</p>
                <p className='text-sm'><span className='font-semibold'>Email:</span> caportal@sagipl.com</p>
            </div>
            <div className="quickLinks text-white text-left px-8">
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
                <p><span className='font-semibold'>Chartered Accountants.</span> All Rights Reserved</p>
                <p>Copyright <span className='font-bold'>&#169;</span> {year} </p>
            </div>
        </div>
    );
};

export default Footer;