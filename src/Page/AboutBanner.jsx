

const AboutBanner = () => {
    return (
        <section className="relative h-[350px] mb-10 z-0 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0  "
        style={{
          backgroundImage: 'url("https://i.ibb.co/K00kMHb/mathyas-kurmann-fb7y-NPb-T0l8-unsplash.jpg")', 
        }}
      ></div>

      {/* Opacity Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white ">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Meet our Team </h1>
          <p className="mt-4 text-lg">
            
          </p>
          <button className="mt-6  w-44 h-1 text-white bg-[#37B3E6] rounded-full hover:bg-[#164863]">
          
          </button>
        </div>
      </div>
      
    </section>
    );
};

export default AboutBanner;