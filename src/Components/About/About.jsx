import React from 'react';
import AboutImg from "../../assets/aboutimg/abimg.jpeg";

const About = () => {
  return (
    <>
    <div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* image section  */}
                <div data-aos="zoom-in" className='flex items-center justify-center hover:scale-105 duration-200'>
                    <img src={AboutImg} alt="AboutImage" className='max-w-[450px] w-full mx-auto shadow-1' />
                </div>
                {/* text section  */}
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <p data-aos='fade-up' className='text-3xl uppercase font-semibold text-dark'>About</p>
                    <h1 data-aos='fade-up' data-aos-delay='200' className='text-5xl text-primary font-bold font-allura'>Latest Toyota</h1>
                    <p data-aos="fade-up" data-aos-delay="300" className='text-sm text-gray-500 tracking-wide leading-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima libero tempora eveniet rerum,
                         quasi qui atque unde quam, voluptatum quo tempore sequi doloribus. Necessitatibus dolore 
                         nostrum a nulla, laboriosam cumque officiis enim commodi rerum aspernatur provident 
                         ea atque eum et.
                    </p>
                    <div data-aos='fade-up' data-aos-delay='400' className=''>
                        <button className='primary-btn'>Read More...</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About