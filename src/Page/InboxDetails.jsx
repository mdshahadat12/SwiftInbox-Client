import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { GiCrossedBones } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const InboxDetails = () => {
  const { id } = useParams();
  const [emailData, setEmailData] = useState([]);

  useEffect(() => {
    fetch("/emailData.json")
      .then((res) => res.json())
      .then((data) => setEmailData(data));
  }, []);

  return (
    <div className="pt-10 px-10">
      <Link to="/">
        <button className="mb-3 flex items-center">
          <FaArrowLeft className="text-lg mr-3" /> Back
        </button>
      </Link>
      {/* email subject here */}
      <section className="flex justify-between mb-5">
        <div className="flex items-center gap-5 flex-wrap mb-5">
          <h1 title="Subject" className="text-2xl font-semibold ">
            {emailData[parseInt(id) - 1]?.subject}
          </h1>
          <div className="badge badge-accent gap-2">
            {emailData[parseInt(id) - 1]?.label}
            <GiCrossedBones></GiCrossedBones>
          </div>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <button className="btn">Download</button>
          <button className="btn ">Print</button>
          <button className="btn">Delete</button>
        </div>
      </section>

      {/* email body here  */}
      <section className="bg-base-200 p-5 rounded-md min-h-[calc(100vh-160px)] ">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/500?img=32"
              alt=""
              className="rounded-full w-16 mr-5"
            />
            <div>
              {/* user info */}
              <div className="flex">
                <p className="mr-3">{emailData[parseInt(id) - 1]?.name}</p>
                <p className="">{emailData[parseInt(id) - 1]?.email}</p>
              </div>

              {/* sender mail  */}
              <p className="flex items-center gap-1">
                <CiMail className="text-lg" />
                {emailData[1]?.email}
              </p>
            </div>
          </div>

          {/* date */}
          <div className="text-end">
            <p className="">{emailData[parseInt(id) - 1]?.time}</p>
          </div>

          {/* email info */}
        </div>
        <p className="px-20">{emailData[parseInt(id) - 1]?.description}</p>
      </section>
    </div>
  );
};

export default InboxDetails;
