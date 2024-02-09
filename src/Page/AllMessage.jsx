import Lottie from "lottie-react";
import Loader from "../Components/Loader";
import lott from "../assets/lott.json";
import InboxCard from "../Components/InboxCard";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";

const AllMessage = () => {
  const { data, isLoading } = Loader("/all-messages", "allMessages");
  console.log(data);
  return (
    <div>
      <Particlesanimation2></Particlesanimation2>
      <h1 className="text-center text-white font-bold text-4xl my-5">All Message</h1>
      <hr />

      {isLoading ? (
        <Lottie animationData={lott}></Lottie>
      ) : (
        data?.map((data) => <InboxCard key={data._id} data={data}></InboxCard>)
      )}
    </div>
  );
};

export default AllMessage;
