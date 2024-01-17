import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lott from "../assets/lott.json";
import InboxCard from "../Components/InboxCard";
const Inbox = () => {
  const [emailData, setEmailData] = useState([]);
  useEffect(() => {
    fetch("./emailData.json")
      .then((res) => res.json())
      .then((data) => setEmailData(data));
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4">
      {/* if there are no emails yet show this  */}

      {emailData.length === 0 && (
        <div className="md:w-96 mx-auto">
          <h1 className="text-center font-bold text-2xl">No messages yet</h1>
          <Lottie animationData={lott} />
        </div>
      )}

      {/* if there are emails show this  */}
      {emailData.length > 0 && (
        <div>
          <h1 className="text-4xl font-bold mb-5">
            Inbox ({emailData.length})
          </h1>
          <div>
            {emailData.map((data) => (
              <InboxCard key={data._id} data={data}></InboxCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
