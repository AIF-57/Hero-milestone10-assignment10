import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {

    const [createUserWithEmailAndPassword,user,error,] = useCreateUserWithEmailAndPassword(auth);
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
                    <input type="email" name='email' placeholder='email' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8 my-5'/>
                    <input type="password" name='password' placeholder='password' className='border-b-2 border-[#2f4d5a] px-5 w-4/5 h-8'/>
                    <button className='bg-[#ffb03b] text-white text-sm font-bold rounded-sm w-4/5 h-8 my-5'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;