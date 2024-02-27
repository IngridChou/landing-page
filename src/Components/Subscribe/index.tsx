import * as React from 'react';

export default function Subscribe() {
    return (
        <div className='flex flex-col items-center mt-10 pb-10'>
            <h1 className='text-black'>Subscribe to follow our latest updates!</h1>
            <div className="relative flex flex-row justify-between items-center w-full pt-4 text-white md:w-[70%] lg:w-[30%]">
                <form className="flex justify-between items-center w-full m-auto p-3 bg-white border border-gray-300 text-white rounded-l-lg">
                    <div>
                        <input
                            className="bg-transparent border-none text-black focus:outline-none"
                            type="text"
                            placeholder="Enter your email address"
                        />
                    </div>
                </form>
                <button className="bg-sblue text-white rounded-r-lg h-full px-4 py-3 " type="submit">Subscribe</button>
            </div>
        </div>
    )
}