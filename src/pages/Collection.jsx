import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFIlter, setShowFilter] = useState(false);
    const [filerProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavant');
    const toggleCategory = (e) => {
        if (category.includes(e.target.value)) {
            setCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setCategory(prev => [...prev, e.target.value])
        }

    }

    const toggleSubCategory = (e) => {
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev => prev.filter(item => item !== e.target.value))
        }
        else {
            setSubCategory(prev => [...prev, e.target.value])
        }
    }
    const applyFilter = () => {
        let productsCopy = products.slice();
        if (showSearch && search) {
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }
        if (category.length > 0) {
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }
    const sortProduct = () => {
        let filteredProductCopy = filerProducts.slice();
        switch (sortType) {
            case 'low-high':
                setFilterProducts(filteredProductCopy.sort((a, b) => (a.price - b.price)));
                break;
            case 'high-low':
                setFilterProducts(filteredProductCopy.sort((a, b) => (b.price - a.price)));
                break;
            default:
                applyFilter();
                break;
        }
    }

    let filterDefault = 'relavant'
    useEffect(() => {
        applyFilter();
    }, [category, subCategory, search, showSearch])
    useEffect(() => {
        sortProduct();
    }, [sortType, filerProducts])


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
                                <input type="checkbox" className='w-3 ' value={'Topwear'} onChange={toggleSubCategory} />Topwear
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
                            </p>
                            <p className='flex gap-2'>
                                <input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
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
                    <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-200 bg-gray-50 px-2 lg:min-w-56  text-sm  ' >
                        <option className='' value='relavant'>Sort By : Relavent</option>
                        <option value="low-high">Sort By : Lowest</option>
                        <option value="high-low">Sort By : Highest</option>
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