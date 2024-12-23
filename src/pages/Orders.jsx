import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
const Orders = () => {
    const { products, currency } = useContext(ShopContext);
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='border-t pt-16'>
            <div className="text-2xl">
                <Title text1={"MY"} text2={"ORDERS"} />
            </div>
            <div className="">{
                products.slice(1, 4).map((item, index) => {
                    return <div className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4" key={index}>
                        <div className="flex items-start gap-6 text-sm">
                            <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                            <div className="">
                                <p className='sm:text-base font-medium'>{item.name}</p>
                                <div className="flex items-center gap-3 text-base text-gray-700">
                                    <p className='text-lg'> {currency}{item.price}</p>
                                    <p>Quantitiy: 1</p>
                                    <p>Size: M</p>
                                </div>
                                <p>Date: <span className='text-gray-400'>25 , Julty , 2024</span></p>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-between">
                            <div className="flex items-center gap-2">
                                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                                <p className='text-sm md:text-base'>Ready to shop</p>
                            </div>
                            <button className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                        </div>
                    </div>
                })
            }</div>
        </motion.div>
    )
}

export default Orders