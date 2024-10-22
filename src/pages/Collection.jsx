import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { motion } from 'framer-motion';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);
    const [showFIlter, setShowFilter] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavant');


    const toggleCategory = (e) => {
        const value = e.target.value;
        setCategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };


    const toggleSubCategory = (e) => {
        const value = e.target.value;
        setSubCategory((prev) =>
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };


    const applyFilter = () => {
        let productsCopy = [...products];


        if (showSearch && search) {
            productsCopy = productsCopy.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }


        if (category.length > 0) {
            productsCopy = productsCopy.filter((item) => category.includes(item.category));
        }


        if (subCategory.length > 0) {
            productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
        }

        return productsCopy;
    };


    const sortProducts = (productsToSort) => {
        let sortedProducts = [...productsToSort];
        switch (sortType) {
            case 'low-high':
                return sortedProducts.sort((a, b) => a.price - b.price);
            case 'high-low':
                return sortedProducts.sort((a, b) => b.price - a.price);
            default:
                return sortedProducts;
        }
    };

    useEffect(() => {

        let filtered = applyFilter();


        let sorted = sortProducts(filtered);


        setFilteredProducts(sorted);
    }, [category, subCategory, search, showSearch, sortType, products]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} end={{ opacity: 0 }} className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t ">
            {/* Filter Options */}
            <div className="min-w-60">
                <p
                    onClick={() => setShowFilter(!showFIlter)}
                    className="uppercase my-2 text-xl flex items-center gap-2 cursor-pointer"
                >
                    Filters
                    <img
                        src={assets.dropdown_icon}
                        className={`h-3 transition ease-in-out sm:hidden ${showFIlter ? 'rotate-90' : ''
                            }`}
                        alt=""
                    />
                </p>
                {/* Category Filter */}
                <div className="flex flex-col gap-2 md:gap-6">
                    <div
                        className={`border border-gray-300  pl-5 py-3 mt-6 ${showFIlter ? '' : 'hidden'
                            } sm:block`}
                    >
                        <p className="uppercase mb-3 text-sm font-medium">Categories</p>
                        <div className="flex flex-col gap-2 text-lg font-light text-gray-700 accent-black">
                            <p className="flex gap-2">
                                <input
                                    type="checkbox"
                                    className="w-3"
                                    value={'Men'}
                                    onChange={toggleCategory}
                                />
                                Men
                            </p>
                            <p className="flex gap-2">
                                <input
                                    type="checkbox"
                                    className="w-3"
                                    value={'Women'}
                                    onChange={toggleCategory}
                                />
                                Women
                            </p>
                            <p className="flex gap-2">
                                <input
                                    type="checkbox"
                                    className="w-3"
                                    value={'Kids'}
                                    onChange={toggleCategory}
                                />
                                Kids
                            </p>
                        </div>
                    </div>
                    {/* SubCategory Filter */}
                    <div
                        className={`border border-gray-300  pl-5 py-3 my-5 accent-black ${showFIlter ? '' : 'hidden'
                            } sm:block`}
                    >
                        <p className="uppercase mb-3 text-sm font-medium">Type</p>
                        <div className="flex flex-col gap-2 text-lg font-light text-gray-700">
                            <p className="flex gap-2">
                                <input
                                    type="checkbox"
                                    className="w-3"
                                    value={'Topwear'}
                                    onChange={toggleSubCategory}
                                />
                                Topwear
                            </p>
                            <p className="flex gap-2">
                                <input
                                    type="checkbox"
                                    className="w-3"
                                    value={'Bottomwear'}
                                    onChange={toggleSubCategory}
                                />
                                Bottomwear
                            </p>
                            <p className="flex gap-2">
                                <input
                                    type="checkbox"
                                    className="w-3"
                                    value={'Winterwear'}
                                    onChange={toggleSubCategory}
                                />
                                Winterwear
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex-1">
                <div className="flex justify-between text-base sm:text-2xl mb-4">
                    <Title text1={'ALL'} text2={'COLLECTIONS'} />
                    {/* Product Sorting */}
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                        className="border border-gray-200 bg-gray-50 px-2 lg:min-w-56 text-sm"
                    >
                        <option className="" value="relavant">
                            Sort By : Relevant
                        </option>
                        <option value="low-high">Sort By : Lowest</option>
                        <option value="high-low">Sort By : Highest</option>
                    </select>
                </div>
                {/* Map Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filteredProducts.map((item, index) => (
                        <ProductItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Collection;
