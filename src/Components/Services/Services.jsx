import React from 'react';
import Slider from "react-slick";
import Img1 from "../../assets/Serviceimg/ford6.jpeg";



// to define the image
const ServicesData = [
  {
    id: 1,
    name: "Mazda jeep Latest",
    price: "$3000",
    img: Img1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem."
  },
  {
    id: 2,
    name: "Navigator jeep Latest",
    price: "$4500",
    img: Img1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem."
  },
  {
    id: 3,
    name: "Range Rover",
    price: "$25000",
    img: Img1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem."
  },
  {
    id: 4,
    name: "Toyota Haice",
    price: "$36000",
    img: Img1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem."
  },
  {
    id: 5,
    name: "Toyota bus",
    price: "$53000",
    img: Img1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem."
  },
  {
    id: 6,
    name: "ford",
    price: "$43000",
    img: Img1,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, autem."
  },
];


const Services = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          intialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className='p-16 bg-primary text-white'>
        <div className="container">
          {/* HEader Section  */}
          <div className='mb-10 space-y-5'>
            <h1 data-aos='fade-up' className='text-center text-4xl font-bold'>Our Services</h1>
            <div data-aos='fade-up' data-aos-delay='200' className='text-center sm:max-w-sm mx-auto text-xs opacity-75'>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Necessitatibus ratione explicabo iure 
            iste quisquam totam, consequatur debitis! Non, unde officia!
          </div>
          </div>
          {/* Slider Section  */}
          <div data-aos='zoom-in'>
            <Slider {...settings}>
              {
                ServicesData.map((Services) => (
                  <div className='my-16'>
                    <div className='flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl '>
                      {/* image section  */}
                      <div className='mb-3 flex justify-center'>
                        <img src={Services.img} alt="" className='rounded-md w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1 '/>
                      </div>
                      {/* text section  */}
                      <div className='flex flex-col items-center gap-4'>
                        <div className='space-y-3 text-center'>
                        <h1 className='text-xl font-bold'>{Services.name}</h1>
                        <p className='text-2xl font-semibold'>{Services.price}</p>
                        <p className='text-sm font-semibold opacity-75'>{Services.desc}</p>
                        <a href="#" className='underline text-blue-900 font-bold'>Buy Now</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>


        </div>
      </div>
    </>
  )
}

export default Services
