import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'


const Register = () => {

    const [createUserWithEmailAndPassword,error,] = useCreateUserWithEmailAndPassword(auth);
    const [user] = useAuthState(auth);
    

    const navigate = useNavigate();
    let location = useLocation();
  
    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }


      const register = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email,password)
      };
      console.log(user);
      console.log(error);
    return (
        <div className='h-[500px] flex items-center'>
            <div className="formContainer flex flex-col align-middle w-1/2 border mx-auto py-20 shadow-2xl rounded-md">
                <form onSubmit={register} className='flex flex-col items-center w-3/4 h-auto mx-auto'>
                    <input type="text" name='name' placeholder='name' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8'/>
                    <input type="email" name='email' placeholder='email' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8 my-5' required/>
                    <input type="password" name='password' placeholder='password' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8' required/>
                    <button className='bg-[#ffb03b] text-white text-sm font-bold rounded-sm w-4/5 h-8 my-5'>Register</button>
                </form>
                <Link to={'/account'} className='text-sm font-bold mt-5 text-[#2f4d5a]'><FontAwesomeIcon icon={faArrowAltCircleLeft}></FontAwesomeIcon> Have an account</Link>

            </div>
        </div>
    );
};

export default Register;