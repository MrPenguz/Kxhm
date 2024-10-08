import React from 'react'

const NewsLetter = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
    }
    return (
        <div onSubmit={onSubmitHandler} className='text-center'>
            <p className='text-2xl font-medium text-gray-800 py-6'>Subscribe Now & Get 20% Off!</p>
            <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, modi.</p>
            <form className='w-full lg:w-1/2 sm:w-3/4 flex items-center gap-3 mx-auto my-6 border pl-3 '>
                <input type="email" className='w-full outline-none sm:flex-1' placeholder='Enter Your Email' required />
                <button className='uppercase bg-black text-white text-xs px-10 py-3 hover:bg-gray-600 active:bg-gray-800 ' type='submit'>Subscribe</button>
            </form>
        </div>
    )
}

export default NewsLetter