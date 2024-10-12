import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();

            // console.log(productCopy.slice(0, 5)); // Before filtering
            productCopy = productCopy.filter((item) => category === item.category);

            // console.log('After category filter:', productCopy.slice(0, 5));
            productCopy = productCopy.filter((item) => subCategory === item.subCategory);

            // console.log('After subCategory filter:', productCopy.slice(0, 5));
            setRelated(productCopy.slice(0, 5));
        }

    }, [products])
    console.log(related)

    return (
        <div className='my-24'>
            <div className="text-center text-3xl py-2">
                <Title text1={'RELATED'} text2={'PRODUCTS'} />
            </div>
            <div className="grid grid-col-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6 ">
                {related.map((item, index) => {
                    return <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default RelatedProducts