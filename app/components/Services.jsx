import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-10'>
            <h4 className='text-center mb-2 text-lg font-ovo'>What I offer?</h4>
            <h2 className='text-center text-5xl font-ovo'>My Services</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I offer full-stack web development using the MERN stack, creating responsive, modern, and efficient web applications from front to back. I also work on AI and machine learning projects, integrating intelligent features into web solutions to make them smarter and more dynamic.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg py-12 px-8 hover:shadow-black cursor-pointer hover:bg-blue-50 hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt='' className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700 '>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link}>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services