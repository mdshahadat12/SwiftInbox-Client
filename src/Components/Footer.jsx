const Footer = () => {
  const containerStyle = {
    clipPath: "polygon(0 60%, 100% 36%, 100% 100%, 0% 100%)",
  };

  return (
    <div
      className="w-full p-10 bg-white flex justify-center items-center align-middle"
      style={containerStyle}
    >
      <p className="text-black text-xs font-semibold mt-16">
        Copyright © 2024 - All right reserved by Team CodeCrafters
      </p>
    </div>
  );
};

export default Footer;
