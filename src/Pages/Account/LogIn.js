import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';


const LogIn = () => {
    const navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
  
    
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth)
    
    if (user) {
        navigate(from, { replace: true });
    }
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const signIn = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email,password)
        signInWithEmailAndPassword(email,password);
    }

    return (
        <div className='min-h-[600px] flex items-center'>
            <div className="formContainer flex flex-col align-middle w-3/4 lg:w-1/2 border mx-auto py-20 shadow-2xl rounded-md">
                <form onSubmit={signIn} className='flex flex-col items-center w-full lg:w-3/4 h-auto mx-auto'>
                    <input ref={emailRef} type="email" name='email' placeholder='email' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8' required/>
                    <input ref={passwordRef} type="password" name='password' placeholder='password' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8 my-5' required/>
                    <button className='bg-[#ffb03b] text-white text-sm font-bold rounded-sm w-4/5 h-8'>Log in</button>
                    </form>
                    <p className='my-2 font-bold'>or</p>
                    <button onClick={() => signInWithGoogle()} className='mx-auto bg-[#4285f4] text-white text-sm font-bold rounded-sm w-4/5 lg:w-3/5 h-8'>Google</button>
                <Link to={'/register'} className='text-sm font-bold mt-5 text-[#2f4d5a]'>Register now <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> </Link>
            </div>
        </div>
    );
};

export default LogIn;