import Lottie from "lottie-react";
import Loader from "../Components/Loader";
import lott from "../assets/lott.json";
import InboxCard from "../Components/InboxCard";
import { Helmet } from "react-helmet";
import ParticlesAnimation from "../Components/Animation/ParticlesAnimation";

const AllMessage = () => {
  const { data, isLoading } = Loader("/all-messages", "allMessages");
  const admin = true;
  return (
    <div>
      <ParticlesAnimation></ParticlesAnimation>
      <Helmet>
        <title>SwiftInbox | All Messages</title>
      </Helmet>
      <h1 className="text-center text-white font-bold text-4xl my-5">All Message</h1>
      <hr />

      {isLoading ? (
        <div className="flex justify-center items-center ">
        <Lottie className="w-[200px]" animationData={lott}></Lottie>
        </div>
      ) : (
        data?.map((data) => <InboxCard key={data._id} data={data} admin={admin}></InboxCard>)
      )}
    </div>
  );
};

export default AllMessage;
