import React from 'react';
import Logo from "../../assets/logo.png";
import { FaBars} from "react-icons/fa";




const Menu = [
    {
        id: "1",
        name: "Home",
        link: "#",
    },
    {
        id: "2",
        name: "About",
        link: "#",
    },
    {
        id: "3",
        name: "Services",
        link: "#",
    },
    {
        id: "4",
        name: "Blog",
        link: "#",
    },
    {
        id: "5",
        name: "Contact",
        link: "#",
    },
]

const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    } 
  return (
    <>
    <div className='bg-lightblue '>
        <div className="container py-2">
            <div className="flex justify-between items-center">
                {/* //logo section  */}
                <div data-aos="fade-down" data-aos-once="true">
                    <a href="#">
                        <img src={Logo} alt="Logo" className='w-30'/>
                    </a>
                </div>
                {/* link section  */}
                <div data-aos="fade-down" data-aos-once="true" data-aos-delay="300" className='hidden lg:flex justify-center items-center gap-4'>
                    <ul className='hidden lg:flex justify-between items-center gap-4'>
                        {
                            Menu.map((menu) =>(
                                <li key={menu.id}>
                                    <a href={menu.link} className='inline-block text-xl p-2 shadow-sm hover:bg-primary hover:text-white w-full rounded-md'>{menu.name}</a>
                                </li>
                            ))}
                    </ul>
                </div>
                {/* Responsive for mobile device  */}
                <div className='lg:hidden'>
                    <button onClick={handleOpen}>
                        <FaBars className='text-3xl'/> 
                    </button>
                    {/* Dropdown memu  */}
                    {open && (<div>
                        <ul className='bg-white space-y-2 p-4 rounded-md shadow-md absolute right-10 top-24 z-50'>
                            {Menu.map((menu) =>(
                                <li key={menu.id}>
                                    <a href={menu.link} className='inline-block text-xl p-2 hover:bg-primary hover:text-white w-full rounded-md 
                                    shadow-sm'>{menu.name}</a></li>
                            ))}
                        </ul>
                    </div>)}
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar
