import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import {useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';


const LogIn = () => {
    const navigate = useNavigate();
    
    const [signInWithGoogle,error] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [user] = useAuthState(auth)
    
    if (user) {
        navigate('/');
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
    console.log(user)
    console.log(error)

    return (
        <div className='h-[500px] flex items-center'>
            <div className="formContainer flex flex-col align-middle w-1/2 border mx-auto py-20 shadow-2xl rounded-md">
                <form onSubmit={signIn} className='flex flex-col items-center w-3/4 h-auto mx-auto'>
                    <input ref={emailRef} type="email" name='email' placeholder='email' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8'/>
                    <input ref={passwordRef} type="password" name='password' placeholder='password' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8 my-5'/>
                    <button className='bg-[#ffb03b] text-white text-sm font-bold rounded-sm w-4/5 h-8'>Log in</button>
                    </form>
                    <p className='my-2 font-bold'>or</p>
                    <button onClick={() => signInWithGoogle()} className='mx-auto bg-[#4285f4] text-white text-sm font-bold rounded-sm w-3/5 h-8'>Google</button>
                <Link to={'/register'} className='text-sm font-bold mt-5 text-[#2f4d5a]'>Register now <FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> </Link>
            </div>
        </div>
    );
};

export default LogIn;