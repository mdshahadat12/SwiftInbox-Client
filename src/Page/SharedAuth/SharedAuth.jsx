import { Link } from "react-router-dom";

const SharedAuth = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="px-4 py-2 shadow-lg rounded-lg justify-center items-center  mx-auto">
          <Link to={"/"}>
            <div className="my-2 flex">
              <img
                src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
                className="h-10 mr-3"
              />
              <span className="self-center text-black text-2xl font-extrabold whitespace-nowrap ">
                SwiftInbox
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SharedAuth;
