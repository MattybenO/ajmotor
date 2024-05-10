import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const FootersLink = [
    {
        title: 'Home',
        link: '/#',
    },
    {
        title: 'About',
        link: '/#',
    },
    {
        title: 'Services',
        link: '/#',
    },
    {
        title: 'Blog',
        link: '/#',
    },
    {
        title: 'Contact',
        link: '/#',
    },

]

const Footers = () => {
  return (
    <>
    <div>
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
            {/* company details  */}
            <div className="py-8 px-4">
                <img src={Logo} alt="" className='w-36' />
                <div className='space-y-5'>
                    <p className='opacity-60 pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elitIps asperiores?</p>
                    <div>
                        <button href="/#" className='primary-btn'>visit youtube channel</button>
                    </div>
                </div>
            </div>
            {/* Footerslink  */}
            <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left mb-5'>Impotant Links</h1>
                    <ul className='space-y-5'>
                        {FootersLink.map((link) => (
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                 {/* second col  */}
                 <div className='py-8 px-4'>
                    <h1 className='text-xl font-semibold sm:text-left mb-5'>Impotant Links</h1>
                    <ul className='space-y-5'>
                        {FootersLink.map((link) => (
                            <li key={link.id}>
                                <a href={link.link}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* company address  */}
                <div className='pt-8 px-4 col-span-2 sm:col-auto'>
                    <h1 className='text-xl font-semibold sm:text-left mb-5'>Address</h1>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#">
                            <FaFacebook className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href="#">
                            <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                        </a>
                        <a href="#">
                            <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        {/* copyright section  */}
        <div className='bg-primary/50'>
            <div className='flex justify-between container p-4 text-xs md:text-sm'>
                <p>@2024 All rights reserved inc.</p>
                <div className='flex justify-center items-center gap-3'>
                    <a href="#">Privacy</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Terms</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footers