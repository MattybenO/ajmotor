import React from 'react';
import Heropng from "../../assets/heroimage/herodefault.jpg"

const Hero = () => {
  return (
    <>
    <div className='bg-lightblue min-h[550px] flex justify-center items-center sm:min-h-[600px]'>
        <div className="container pb-8 sm:pb-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* text section  */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left'>
                    <h1 data-aos="zoom-out" data-aos-delay="200" className='text-6xl lg:text-[8rem] font-bold bg-clip-text text-transparent
                    bg-gradient-to-b from-primary to-primary-90 font-allura'>Lexus RX350
                    <span className='font-sans text-3xl text-dark'> Jeep</span>
                    </h1>
                    <p data-aos='fade' data-aos-delay="300" className='text-sm text-dark font-sans'>
                        {" "}
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit expedita harum aperiam nam ips
                        autem eaque, quibusdam reiciendis debitis, deserunt tenetur aliquam ipsam excepturi nostrum 
                        eligendi. Expedita aliquid impedit iste officia vitae assumenda, exercitationem culpa optio 
                        soluta saepe ex doloribus illo temporibus laborum excepturi fuga. Voluptates, porro voluptatem!
                         Illum, unde
                    </p>
                    <div data-aos="fade-up" data-aos-offset="0" data-aos-delay="400">
                        <button className='primary-btn'>
                            Read More...
                        </button>
                    </div>
                </div>
                {/* image sectiom  */}
                <div data-aos="zoom-in" data-aos-duration="500" className='min-h-[500px] flex justify-center items-center relative order-1 sm:order-2  hover:scale-105 duration-200'>
                    <img src={Heropng} alt="Hero" className='max-w-[450px] w-full mx-auto sm:scale-125 shadow-1'/>
                    <div className='bg-primary p-3 rounded-xl absolute top-10 left-10 hidden md:block text-white'>
                        <h1>LAtest</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
};

export default Hero