import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {
    const { products } = useContext(ShopContext);
    const [showFIlter, setShowFilter] = useState(false);
    const [filerProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }
    }

    useEffect(() => {
        setFilterProducts(products);
    })
    useEffect(() => {
        console.log(category)
    }, [category])
    return (
        <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t '>

            {/* Filter Op */}
            <div className=" min-w-60">
                <p onClick={() => setShowFilter(!showFIlter)} className='uppercase my-2 text-xl flex items-center gap-2 cursor-pointer'>Filters
                    <img src={assets.dropdown_icon} className={`h-3 transition ease-in-out sm:hidden ${showFIlter ? 'rotate-90' : ''}`} alt="" />
                </p>
                {/* Category Filter */}
                <div className="flex flex-col gap-2 md:gap-6">

                    <div className={`border border-gray-300  pl-5 py-3 mt-6 ${showFIlter ? '' : 'hidden'} sm:block`}>
                        <p className='uppercase mb-3 text-sm font-medium'>Catergories</p>
                        <div className="flex flex-col gap-2 text-lg font-light text-gray-700 accent-black">
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} />Men
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} />Women
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} />Kids
                            </p>
                        </div>
                    </div>
                    {/* SubCategory Filter */}
                    <div className={`border border-gray-300  pl-5 py-3 my-5 accent-black ${showFIlter ? '' : 'hidden'} sm:block`}>
                        <p className='uppercase mb-3 text-sm font-medium'>Type</p>
                        <div className="flex flex-col gap-2 text-lg font-light text-gray-700">
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3 ' value={'Topwaer'} onChange={toggleCategory} />Topwaer
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleCategory} />Bottomwear
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleCategory} />Winterwear
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Porduct Sorting */}
                    <select className='border border-gray-300 px-2 lg:min-w-56  text-sm  ' >
                        <option className='' value="relavent">Sort By : Relavent</option>
                        <option value="low-high">Sort By : Low-High</option>
                        <option value="High-low">Sort By : High-Low</option>
                    </select>
                </div>
                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filerProducts.map((item, index) => {
                        return <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Collection  