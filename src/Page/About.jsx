import img from '../assets/temporarymail.png'
import { FaPhone } from 'react-icons/fa';

import { MdEmail, MdLocationOn } from 'react-icons/md';

const About = () => {
    return (
        <div>
            <section className="bg-gray-100 py-12 mt-3 mb-3  ">
      <div className="container mx-auto relative mb-8">
        <h3 className='text-[#2C2F24] text-2xl lg:text-4xl font-bold text-center mb-5'>About Us</h3>
        <div className="flex flex-row-reverse flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/2 p-6">
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
              src={img}
              className="w-[300px] lg:w-[650px] h-auto rounded-lg"
            />
            <div className='bg-[#474747] absolute w-[220px] lg:w-[350px] ml-[130px] lg:ml-[350px] -mt-[100px] lg:-mt-[170px] pt-4 pl-4 h-auto rounded-xl'>
              <p className='font-bold text-[#FFF] text-sm lg:text-xl mb-3 lg:mb-4'>Come and visit us</p>
              <div className='flex gap-3 lg:gap-5 items-center mb-3 lg:mb-5'>
              <span className='text-white text-xs lg:text-base'><FaPhone></FaPhone></span> 
              <span className='lg:text-base text-xs text-[#F9F9F7]'>(414) 857 - 010</span>
              </div>
              <div className='flex gap-3 lg:gap-5 items-center mb-3 lg:mb-5'>
              <span className='text-white text-xs lg:text-base'><MdEmail></MdEmail></span> 
              <span className='lg:text-base text-xs text-[#F9F9F7]'>CodeCrafters@gmail.com</span>
              </div>
              <div className='flex gap-3 lg:gap-5 items-center pr-3 pb-3 lg:pb-5'>
              <span className='text-white text-xs lg:text-base'> <MdLocationOn></MdLocationOn></span> 
              <span className='text-xs lg:text-base text-[#F9F9F7]'>837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default About;