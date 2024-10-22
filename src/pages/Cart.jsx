import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { motion } from 'framer-motion';
const Cart = () => {
    const { products, currency, cartItems, updateQuantity } = useContext(ShopContext);
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

    }, [cartItems])
    return (
        <div className='border-t pt-14 '>
            <div className="text-2xl mb-3 ">
                <Title text1={'YOUR'} text2={'CART'} />
            </div>

            <div className="flex items-center">
                {
                    cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);
                        console.log(productData)
                        return <div key={index} className="py-4 mx-auto  border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
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
                                <input
                                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                                    type="number"
                                    className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                                    min={1}
                                    defaultValue={item.quanity}
                                />
                                <button onClick={() => updateQuantity(item._id, item.size, 0)} className='ml-5 py-2 pl-2 px-5 sm:pl-2 sm:px-0 border border-r hover:bg-gray-300 transition ease-in-out duration-200 '>
                                    <img

                                        src={assets.bin_icon}
                                        className="w-4 mr-4 sm:w-7  cursor-pointer ml-2   "
                                        alt=""
                                    />
                                </button>
                            </div>

                            <div className="flex justify-end my-20">
                                <div className="w-full sm:w-[450px]">
                                    <CartTotal />
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Cart