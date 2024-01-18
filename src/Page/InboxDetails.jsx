import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { GiCrossedBones } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const InboxDetails = () => {
  const { id } = useParams();
  const [emailData, setEmailData] = useState([]);
  const currentData = emailData[parseInt(id) - 1];

  useEffect(() => {
    fetch("/emailData.json")
      .then((res) => res.json())
      .then((data) => setEmailData(data));
  }, []);

  return (
    <div className="pt-10 lg:px-10">
      <Link to="/">
        <button className="mb-3 flex items-center">
          <FaArrowLeft className="text-lg mr-3" /> Back
        </button>
      </Link>
      {/* email subject here */}
      <section className="lg:flex justify-between mb-5">
        <div className="flex items-center gap-5 flex-wrap mb-5">
          <h1 title="Subject" className="text-2xl font-semibold ">
            {currentData?.subject}
          </h1>
          <div className="badge badge-accent gap-2">
            {currentData?.label}
            <GiCrossedBones></GiCrossedBones>
          </div>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          <button className="btn btn-sm lg:btn-md">Download</button>
          <button className="btn btn-sm lg:btn-md">Print</button>
          <button className="btn btn-sm lg:btn-md">Delete</button>
        </div>
      </section>

      {/* email description here  */}
      <section className="bg-base-200 p-5 rounded-md min-h-[calc(100vh-160px)] ">
        <div className="lg:flex items-center justify-between mb-5">
          <div className="flex items-center">
            <img
              src="https://i.pravatar.cc/500?img=32"
              alt=""
              className="rounded-full w-16 mr-5"
            />
            <div>
              {/* user info */}
              <div className="lg:flex">
                <p className="lg:mr-3 font-bold">{currentData?.name}</p>
                <p className="font-medium">{currentData?.email}</p>
              </div>

              {/* sender mail  */}
              <p className="flex items-center gap-1">
                <CiMail className="text-lg" />
                {emailData[1]?.email}
              </p>
              <p className="">{currentData?.time}</p>
            </div>
            {/* date */}
            {/* <div className="lg:text-end">
              <p className="">{currentData?.time}</p>
            </div> */}
          </div>

          {/* email info */}
        </div>
        <p className="lg:px-5 xl:px-20">{currentData?.description}</p>
      </section>
    </div>
  );
};

export default InboxDetails;
