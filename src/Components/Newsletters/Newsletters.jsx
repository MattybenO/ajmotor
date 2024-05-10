import React from 'react';
import Bgpng from "../../assets/newsimgg/newsvolks.png";


const backgroundStyle = {
    backgroundImage:`url(${Bgpng})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "right",
    height: '100%',
    width: '100%',
}
const Newsletters = () => {
  return (
    <>
    <div className='bg-primary text-white' style={backgroundStyle}>
        <div className="container bg-black/60 sm:bg-transparent py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
                <div className='space-y-4 text-center sm:text-left'>
                    {/* text section  */}
                    <h1 data-aos='fade-up' className='text-2xl sm:text-3xl fonts-semibold text-white/90'>{" "}Ready to get Started</h1>
                    <p data-aos='fade-up' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* input section  */}
                <div data-aos='fade-up' data-aos-delay='400' className='text-center  sm:text-left'>
                    <input type="text" placeholder='Enter your e-mail' className='max-w-[400px] px-4 py-2 rounded-l-md 
                    ring-0 focus:outline-none text-dark' />
                    <button className='rounded-r-md bg-white text-primary px-4 py-2'>{" "}<span className='text-sm font-bold'>Get Started</span>{" "}</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Newsletters
