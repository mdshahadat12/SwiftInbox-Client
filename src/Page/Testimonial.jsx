import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import CustomSpinner from "../Components/CustomSpinner";
import Loader from "../Components/Loader";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const { data, isLoading } = Loader("/reviews", "testimonials");
  const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#00D7C0",
    inactiveFillColor: "#808080",
  };
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
      <div className="text-white px-10 lg:px-20">
        {/* title here  */}
        <h2 className="text-center mt-5 font-semibold text-3xl mb-3">
          Reviews From Our Users
        </h2>
        <p className="text-center text-lg mb-3">
          Have a look at what our customer have to say about us.
        </p>

        {/* card here  */}
        <div className="grid grid-cols-1 gap-5">
          {data.map((review) => (
            <div
              key={review._id}
              className="bg-stone-800 mt-5 shadow-xl flex justify-start items-center rounded-lg p-5 w-3/4 mx-auto"
            >
              {/* photo here  */}
              <img
                src={review.photo}
                alt="user"
                className="rounded-full w-24 h-24 mr-10"
              />
              <div>
                <div className="flex items-center">
                  <h3 className="text-xl font-semibold mr-5">{review.name}</h3>
                  <p className="text">{review.timeStamp}</p>
                </div>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={review.rating}
                  itemStyles={myStyles}
                ></Rating>
                <p className="mt-5">{review.opinion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
