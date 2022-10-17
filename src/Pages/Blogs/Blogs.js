import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'


const Blogs = () => {
    return (
        <div className='min-h-[400px]'>
            <div className="blogContainer px-10 pt-10 pb-20">
                <div className="containerTitle">
                <p className='p-5 text-2xl font-semibold'>Question Answers</p>
                </div>
                <div className="blogs text-left grid gap-5">
                    <div className="blog">
                        <p className='text-lg text-slate-700 font-semibold'>Difference between authorization and authentication?</p>
                        <p><FontAwesomeIcon icon={faAngleRight} className='w-5 h-5 text-[#ffb03b]'></FontAwesomeIcon> Authentication verifies the users' credentials & Authorization determines their rights.</p>
                    </div>
                    <div className="blog">
                        <p className='text-lg text-slate-700 font-semibold'>Why are you using firebase? What other options do you have to implement authentication?</p>
                        <p><FontAwesomeIcon icon={faAngleRight} className='w-5 h-5 text-[#ffb03b]'></FontAwesomeIcon> Firebase is led by Google that's why I use it.There are some alternatives to Firebase.Such as
                            <ul className='list-disc list-inside'>
                                <li>Okta</li>
                                <li>IBM Security Verify</li>
                                <li>Auth0</li>
                                <li>Microsoft Azure</li>
                            </ul>
                        </p>
                    </div>
                    <div className="blog">
                        <p className='text-lg text-slate-700 font-semibold'>What other options do you have to implement authentication?</p>
                        <p><FontAwesomeIcon icon={faAngleRight} className='w-5 h-5 text-[#ffb03b]'></FontAwesomeIcon> There are many services which Firebase provides, Most useful of them are:
                            <ul className='list-disc list-inside'>
                                <li>Cloud Firestore</li>
                                <li>Cloud Functions</li>
                                <li>Hosting</li>
                                <li>Cloud Storage</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;