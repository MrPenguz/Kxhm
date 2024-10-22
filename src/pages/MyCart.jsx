import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { motion } from 'framer-motion';
const Cart = () => {
    const { products, currency, cartItems, updateQuantity, AddToCart, RemoveFromCart, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);
    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quanity: cartItems[items][item]
                    })
                }
            }
        }
        setCartData(tempData);

    }, [cartItems,])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} end={{ opacity: 0 }} className='border-t pt-14 '>
            <div className="text-2xl mb-3 ">
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            <div className="">
                {
                    cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);
                        console.log(productData)
                        return <div key={index} className="py-4 mx-auto justify-end  border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
                            <div className="flex items-start gap-6">
                                <img src={productData.image[0]} className='w-16 sm:w-20' alt="" />
                                <div className="">
                                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                    <div className="flex flex-center gap-5 mt-2">
                                        <p>{currency}{productData.price}</p>
                                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50 '>{item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-end">
                                <p
                                    type="number"
                                    className="border max-w-10 sm:max-w-20 px-3 sm:px-2 py-1 ml-20 sm:mr-5 border-black"
                                    min={1}
                                    defaultValue={item.quanity}
                                >{item.quanity}</p>
                                <div className=" flex flex-col mx-5 sm:flex-row ">
                                    <button onClick={() => {
                                        AddToCart(item._id, item.size)
                                        item.quanity = 1 + item.quanity;
                                    }} className='px-3 py-1 sm:py-2 sm:px-4  border  border-white text-white bg-black hover:bg-gray-500'>+</button>
                                    <button className='px-3 py-1 sm:py-2 sm:px-4  border  border-white text-white bg-black hover:bg-gray-500' onClick={() => {
                                        RemoveFromCart(item._id, item.size)
                                        if (item.quanity > 1) {
                                            item.quanity -= 1;
                                        }
                                        else {
                                            return;
                                        }
                                    }}>-</button>

                                    <button onClick={() => updateQuantity(item._id, item.size, 0)} className=' py-2 pl-2 px-5 sm:pl-2 sm:px-0 border border-r hover:bg-gray-300 transition ease-in-out duration-200 '>
                                        <img

                                            src={assets.bin_icon}
                                            className="w-4 mr-4 sm:w-7  cursor-pointer ml-2   "
                                            alt=""
                                        />
                                    </button>
                                </div>
                            </div>


                        </div>
                    })
                }
            </div>
            <div className="flex justify-center my-10">
                <div className="w-full lg:w-3/4">
                    <CartTotal />
                    <div className="w-full text-center">
                        <button onClick={() => { navigate('/place-order') }} className='bg-black w-1/2 text-white md:text-xl text-sm md:me-10 px-8 py-3 hover:bg-gray-700 '>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Cart