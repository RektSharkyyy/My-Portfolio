import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {

    const [result, setResult] = useState()
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9bdaab39-3dfb-44f3-b35a-3f2545fa8cff");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div id='contact' className='w-full px-[12%] py-10 scroll-mt-10 bg-no-repeat bg-center mb-2 text-lg '>
            <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
            <h2 className='text-center text-5xl font-ovo'>My Latest Work</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                Welcome to my web development portfolio. Explore a collection of projects
                showcasing my expertise in front-end and full-stack development using the MERN
                stack, focused on building modern, responsive, and user-friendly web applications.
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
                <div className='grid grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none 
                    border-[0.5px] border-gray-400 rounded-md bg-white' name='name' />
                    <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none 
                    border-[0.5px] border-gray-400 rounded-md bg-white' name='email' />
                </div>
                <textarea rows="6" placeholder='Enter your message' required className='w-full p-4 outline-none
                border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>

                <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 
                bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit now <Image src={assets.right_arrow_white}
                        alt='' className='w-4' /></button>
            </form>
            <p className='mt-4'>{result}</p>
        </div>
    )
}

export default Contact