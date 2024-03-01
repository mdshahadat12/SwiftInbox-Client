import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import CustomSpinner from "../Components/CustomSpinner";
import Loader from "../Components/Loader";

const Testimonial = () => {
  const { data, isLoading } = Loader("/reviews", "testimonials");
  if (isLoading) {
    return (
      <>
        <Particlesanimation2></Particlesanimation2>
        <CustomSpinner></CustomSpinner>
      </>
    );
  }
  return (
    <>
      <Particlesanimation2></Particlesanimation2>
      <div className="text-white">
        <p>Hi, I am Testimonial</p>
      </div>
    </>
  );
};

export default Testimonial;
