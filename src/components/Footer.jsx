import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_2fr_1fr] gap-14 my-10 mt-40 text-sm mx-auto'>
                <div >
                    <img src={assets.logo} alt="" className='mb-5 w-32' />
                    <p className='w-full md:w-1/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ullam.
                    </p>
                </div>
                <div className="">
                    <p className='flex flex-col gap-1 w-1/2 text-gray-600 uppercase  text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div >
                    <p className='uppercase text-xl font-medium mb-5'>Get in touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1-212-456-7892</li>
                        <li>Contact@kxhm.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@kxhm.com - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer