
import { FaPhone } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import AboutBanner from './AboutBanner';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const members = [
  {
    name: "Antu Bhatta",
    position: "Frontend developer",
    description: "Professional Frontend developer with 3 years of experience",
    image: "https://i.ibb.co/D74Hy7r/420016723-1718699938627989-1055668514164529072-n.png",
  },
  {
    name: "Ayan Kumar Das",
    position: "MERN developer",
    description: "Professional Backend developer with 3 years of experience",
    image: "https://i.ibb.co/B6dsDh7/419754644-1887187531695695-3202775527816768482-n.jpg",
  },
  {
    name: "Hassan Mohammad",
    position: "MERN developer",
    description: "Professional Cyber security expert  with 3 years of experience",
    image: "https://i.ibb.co/8K1cjKw/413348232-887526206205101-2196839168165414396-n.png",
  },
  {
    name: "Abir Hossain",
    position: "Frontend developer",
    description: "Professional Frontend developer with 3 years of experience",
    image: "https://i.ibb.co/9tVv9WK/Whats-App-Image-2023-11-15-at-12-17-34-PM.jpg",
  },
  {
    name: "Pallab Kumar",
    position: "MERN developer",
    description: "Professional Frontend developer with 3 years of experience",
    image: "https://i.ibb.co/DwFKV3g/419777071-731532612264902-1165006245840114393-n.jpg",
  },
  {
    name: "Md.Shadat Hossain",
    position: "MERN developer",
    description: "Professional Frontend developer with 3 years of experience",
    image: "https://i.ibb.co/3sNVxQB/419650651-753131800044086-1446559634390518896-n.jpg",
  },
];

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <AboutBanner />

      <section className="bg-gray-100 py-12 mt-3 mb-3">
        <div className="container mx-auto relative mb-8">
          <h3 className='text-[#2C2F24] text-2xl lg:text-4xl font-bold text-center mb-5'>About Our Company</h3>
          <div className="flex flex-row-reverse flex-wrap items-center justify-center">
            <div className="w-full lg:w-1/2 p-6 relative">
              <h2 className="text-xl lg:text-3xl font-semibold text-gray-800 mb-4">
                CodeCrafters
              </h2>
              <p className="text-gray-600 mb-4">
                Experience online privacy like never before with our innovative Temporary Email Maker. Seamlessly generate disposable email addresses within seconds, providing a shield for your personal inbox against spam and unwanted communications. Whether you are signing up for a new service, testing applications, or simply need a quick and secure email solution, our Temporary Email Maker is your go-to tool for hassle-free online interactions.
              </p>
              <p className="text-gray-600 mb-4">
                At CodeCrafter, we prioritize user security and convenience. Our platform offers a user-friendly experience, allowing you to create temporary email addresses on-the-fly. Trust in our reliable service to enhance your online privacy without the need for a permanent email address. Simplify your digital interactions and enjoy a clutter-free inbox with our Temporary Email Maker today.
              </p>
              <button className='px-6 lg:px-8 py-3 lg:py-4 mt-5 text-sm lg:text-base text-[#182226] rounded-full border border-solid border-gray-700'>More About Us</button>
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <img
                src={'https://i.ibb.co/wdhvbrS/420027401-926519852222409-6803075057436810227-n.png'}
                className="w-[300px] lg:w-[650px] h-auto rounded-lg"
              />
              <div className='bg-[#474747] absolute w-[220px] lg:w-[350px] ml-[130px] lg:ml-[350px] -mt-[100px] lg:-mt-[170px] pt-4 pl-4 h-auto rounded-xl'>
                <p className='font-bold text-[#FFF] text-sm lg:text-xl mb-3 lg:mb-4'>Come and visit us</p>
                <div className='flex gap-3 lg:gap-5 items-center mb-3 lg:mb-5'>
                  <span className='text-white text-xs lg:text-base'><FaPhone /></span>
                  <span className='lg:text-base text-xs text-[#F9F9F7]'>(414) 857 - 010</span>
                </div>
                <div className='flex gap-3 lg:gap-5 items-center mb-3 lg:mb-5'>
                  <span className='text-white text-xs lg:text-base'><MdEmail /></span>
                  <span className='lg:text-base text-xs text-[#F9F9F7]'>CodeCrafters@gmail.com</span>
                </div>
                <div className='flex gap-3 lg:gap-5 items-center pr-3 pb-3 lg:pb-5'>
                  <span className='text-white text-xs lg:text-base'> <MdLocationOn /></span>
                  <span className='text-xs lg:text-base text-[#F9F9F7]'>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" container mx-auto my-20">
        
        <h1 className="text-3xl font-bold my-10 mb-8 text-center text-[#37B3E6] font-extrabold text-5xl">About Us</h1>
       
  
        <Slider {...settings}>
          {members.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-gray-200 p-6 rounded shadow-xl glass">
                <img
                  className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
                  src={member.image}
                  alt={member.name}
                />
                <h2 className="text-xl text-black font-bold mb-2">{member.name}</h2>
                <p className="text-gray-600 mb-2">{member.position}</p>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default About;
