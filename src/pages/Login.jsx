import React, { useState } from 'react'
import { motion } from 'framer-motion';
const Login = () => {
    const [currentState, setCurrentState] = useState('Sign Up');
    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14  gap-4 text-black'>
                <div className="inline-flex items-center gap-2 mb-2 mt-10">
                    <p className='prata-regular text-3xl'>{currentState}</p>
                    <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

                </div>
                {currentState === 'Login' ? '' : <input type="text" className={`w-full px-3 py-2 border border-gray-800 `} placeholder='Name' required />}
                <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
                <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
                <div className="w-full flex justify-between text-sm mt-[10px]">
                    <p>Forgot Your Passowrd?</p>
                    {
                        currentState === 'Login' ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p> : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Already Have An Account?</p>
                    }
                </div>
                <button className='bg-black font-light hover:bg-gray-600 active:bg-black text-xl text-white py-3 px-8 w-[100%]'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
            </form>
        </motion.div>
    )
}

export default Login