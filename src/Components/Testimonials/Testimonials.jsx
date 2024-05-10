import React from 'react';
import Slider from "react-slick";



const TestimonialsData = [
  {
    id: 1,
    name: "Frances",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto porro, beatae officia incidunt ut!",
    img: "https://unsplash.com/photos/blue-coupe-beside-gray-house-p7tai9P7H-s",
    
  },
  {
    id: 2,
    name: "Frances",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto porro, beatae officia incidunt ut!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 3,
    name: "Frances",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto porro, beatae officia incidunt ut!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 4,
    name: "Frances",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto porro, beatae officia incidunt ut!",
    img: "https://picsum.photos/100/102",
  },
  {
    id: 5,
    name: "Frances",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto porro, beatae officia incidunt ut!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 6,
    name: "Frances",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto porro, beatae officia incidunt ut!",
    img: "https://picsum.photos/101/101",
  },
];



const Testimonials = () => {

    const settings = {

      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
    <div className='py-10 mb-10'>
      <div className="container">
        {/* header sect6ion  */}
        <div className='mb-10'>
          <h1 data-aos='fade-up' className='text-center text-4xl font-bold font-allura'>Testimonials</h1>
        </div>

        {/* slider sectcion  */}
        <div data-aos='zoom-in'>
        <Slider {...settings}>
          {
            TestimonialsData.map((items) => (
              <div className='my-6'>
                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                  <div className='mb-4'>
                    <img src={items.img} alt="" className='rounded-full w-20 h-20'/>
                  </div>
                  {/* text content  */}
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-500'>{items.text}</p>
                      <p className='text-xl font-bold text-black/80 font-pacifico'>{items.name}</p>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
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

export default Testimonials