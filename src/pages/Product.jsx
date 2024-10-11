import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
    const { productId } = useParams();
    const { products, currency } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id === productId) {
                setProductData(item)
                setImage(item.image[0])
                console.log(item);

                return null;
            }
        })
    }
    useEffect(() => {
        fetchProductData();
    }, [productId, productData]);

    return productData ? (
        <div className='border-t-2 pt-10   transition-opacity ease-in duration-500 opacity-100'>
            {/* product data */}
            <div className="flex gap-12  flex-col sm:flex-row">
                {/* product images */}
                <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
                    <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full">
                        {
                            productData.image.map((item, index) => {
                                return <img onClick={() => { setImage(item) }} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer ' alt='' />
                            })
                        }
                    </div>
                    <div className="w-full sm:w-[80%] flex-row">
                        <img src={image} className='w-full h-auto ' alt="" />
                    </div>
                </div>
                {/* Product Info */}
                <div className="flex-1 ">
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_icon} alt="" className="w-3" />
                        <img src={assets.star_dull_icon} alt="" className="w-3" />
                        <p className='pl-2'>(122)</p>
                    </div>
                    <p className='pt-2 text-2xl'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-600 md:w-4/5'>{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>Select Size</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => {
                                return <button onClick={() => setSize(item)} className={`border   text-3xl py-2 px-3 hover:bg-gray-500 hover:text-white transition ease-in-out active:bg-black ${item === size ? "bg-black text-white" : "bg-gray-100 text-black"} `} key={index}>{item}</button>
                            })}
                        </div>
                    </div>
                    <button className='px-8 py-3 bg-black text-gray-100 text-xl uppercase active:bg-gray-700'>Add to cart</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className="text-base text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original Products.</p>
                        <p>Cash on Delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>
            {/* Discribe & review */}
            <div className="">

            </div>
        </div>
    ) : <div className="opacity-0"></div>
}

export default Product