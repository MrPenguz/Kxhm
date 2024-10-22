import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsLetter from '../components/NewsLetter'
import { motion } from 'framer-motion';
const About = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} end={{ opacity: 0 }}>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img src={assets.about_img} className='w-full max-w-[480px]' alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis quia hic quisquam non repellat reiciendis dicta rerum debitis quod velit ratione enim, qui tenetur quas soluta et! Fugit, amet? Similique.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam nisi! Fuga, vero, eaque nisi labore quisquam aliquam modi quia, quaerat unde quo officia ea iusto laudantium harum repudiandae soluta!</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus a sequi quas ab unde quos! Nemo eius laboriosam voluptates tempora.</p>
                </div>
            </div>
            <div className="text-4xl py-4">
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b className='text-lg'>Quality Assurance:</b>
                    <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci veniam illum maiores tempore, autem eveniet sequi. Quasi asperiores consectetur dolorum?</p>
                </div>
                <div className="border-x border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b className='text-lg'>Convenience:</b>
                    <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci veniam illum maiores tempore, autem eveniet sequi. Quasi asperiores consectetur dolorum?</p>
                </div>
                <div className=" px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b className='text-lg'>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci veniam illum maiores tempore, autem eveniet sequi. Quasi asperiores consectetur dolorum?</p>
                </div>
            </div>
            <NewsLetter />
        </motion.div>
    )
}

export default About