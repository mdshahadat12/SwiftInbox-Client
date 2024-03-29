import { motion } from "framer-motion";
import AboutBanner from "./AboutBanner";
import { Helmet } from "react-helmet";
import ParticlesAnimation from "../Components/Animation/ParticlesAnimation";

const About = () => {
  const testimonialData = [
    {
      name: "Antu Bhatta",
      position: "Frontend developer",
      description: "Professional Frontend developer with 3 years of experience",
      image:
        "https://i.ibb.co/D74Hy7r/420016723-1718699938627989-1055668514164529072-n.png",
    },
    {
      name: "Ayan Kumar Das",
      position: "MERN developer",
      description: "Professional Backend developer with 3 years of experience",
      image:
        "https://i.ibb.co/B6dsDh7/419754644-1887187531695695-3202775527816768482-n.jpg",
    },
    {
      name: "Hassan Sabbir",
      position: "MERN developer",
      description:
        "Professional Cybersecurity expert with 3 years of experience",
      image:
        "https://i.ibb.co/8K1cjKw/413348232-887526206205101-2196839168165414396-n.png",
    },
    {
      name: "Abir Hossain",
      position: "Frontend developer",
      description: "Professional Frontend developer with 3 years of experience",
      image:
        "https://i.ibb.co/9tVv9WK/Whats-App-Image-2023-11-15-at-12-17-34-PM.jpg",
    },
    {
      name: "Pallab Kumar",
      position: "MERN developer",
      description: "Professional Frontend developer with 3 years of experience",
      image:
        "https://i.ibb.co/DwFKV3g/419777071-731532612264902-1165006245840114393-n.jpg",
    },
    {
      name: "Md.Shahadat Hossain",
      position: "MERN developer",
      description: "Professional Frontend developer with 3 years of experience",
      image:
        "https://i.ibb.co/3sNVxQB/419650651-753131800044086-1446559634390518896-n.jpg",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutBanner />

      <ParticlesAnimation></ParticlesAnimation>
      <Helmet>
        <title>SwiftInbox | About Us</title>
      </Helmet>

      <section className="py-12 mt-3 mb-3">
        <div className="container mx-auto relative mb-8">
          <motion.h3
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent text-3xl lg:text-4xl font-bold text-center mb-5"
          >
            About Us
          </motion.h3>
          <div className="flex flex-row-reverse flex-wrap items-center justify-center">
          <div className="w-full lg:w-1/2 p-6 relative ">
  <motion.h2
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="text-xl lg:text-3xl font-semibold text-white mb-4"
  >
    CodeCrafters
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    className="text-white mb-4"
  >
    Experience online privacy like never before with our innovative Temporary Email Maker. Seamlessly generate disposable email addresses within seconds, providing a shield for your personal inbox against spam and unwanted communications. Whether you are signing up for a new service, testing applications, or simply need a quick and secure email solution, our Temporary Email Maker is your go-to tool for hassle-free online interactions.
  </motion.p>
  <motion.p
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="text-white mb-4"
  >
    At CodeCrafter, we prioritize user security and convenience. Our platform offers a user-friendly experience, allowing you to create temporary email addresses on-the-fly. Trust in our reliable service to enhance your online privacy without the need for a permanent email address. Simplify your digital interactions and enjoy a clutter-free inbox with our Temporary Email Maker today.
  </motion.p>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-6 lg:px-8 py-3 lg:py-4 mt-5 text-sm lg:text-base text-white rounded-full border border-solid border-white"
  >
    More About Us
  </motion.button>
</div>

            <div className="w-full lg:w-1/2 p-6">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                src={
                  "https://i.ibb.co/wdhvbrS/420027401-926519852222409-6803075057436810227-n.png"
                }
                className="w-[300px] md:w-[550px] lg:w-[650px] h-auto rounded-lg"
                alt="CodeCrafters"
              />
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="container mx-auto text-center">
  <motion.h3
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.2 }}
    className="text-accent text-3xl lg:text-4xl font-bold mb-6"
  >
    Our Team Members
  </motion.h3>
  <div className="grid grid-cols-1 px-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {testimonialData.map((member, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 + index * 0.2 }}
        className="p-6 rounded-lg shadow-md transition transform hover:scale-105 border border-gray-300"
      >
        <motion.img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <motion.h4 className="text-xl font-semibold mb-2 text-white">
          {member.name}
        </motion.h4>
        <motion.p className=" mb-2 text-white">
          {member.position}
        </motion.p>
        <motion.p className=" mb-4 text-white">
          {member.description}
        </motion.p>
      </motion.div>
    ))}
  </div>
</div>

      </section>
    </motion.div>
  );
};

export default About;
