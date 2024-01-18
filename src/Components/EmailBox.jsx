import { IoIosRefresh } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
const EmailBox = () => {
  const userEmail = "example@tempmail.com"; // change this to the temp email we get from the website
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4">
      <div className="flex items-center justify-center my-8">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">
              Your Temporary Email Address
            </h2>
            <div className="border rounded-3xl my-2 border-accent py-3">
              <h3 className="text-center font-semibold text-lg">{userEmail}</h3>
            </div>
            <div className="flex items-center justify-around gap-2">
              <button className="btn btn-accent">
                {" "}
                <IoIosRefresh />
                Refresh
              </button>
              <button className="btn btn-accent">
                {" "}
                <CiEdit /> Change
              </button>
              <button className="btn btn-accent">
                {" "}
                <AiOutlineDelete /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailBox;
