import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'
import { motion } from 'framer-motion';
const Contact = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} end={{ opacity: 0 }}>
            <div className="text-center text-2xl pt-10 border-t">
                <Title text1={'CONTACT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className='font-semibold text-xl text-gray-600'>Our Store</p>
                    <p className='text-gray-500'>54694 Wallo State<br /> Arona Street New York , USA</p>
                    <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@Kxhm.com</p>
                    <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
                    <p className='text-gray-500'>Learn More About Our Teams And Job Openings.</p>
                    <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>
                    <p></p>
                </div>
            </div>
            <NewsLetter />
        </motion.div>
    )
}

export default Contact