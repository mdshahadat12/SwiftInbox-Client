/* eslint-disable react/prop-types */
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const InboxCard = ({ data }) => {
  return (
    <div className="my-2">
      <div className="bg-base-200 flex items-center justify-between w-full rounded-lg">
        <Link to={`/inbox/${data._id}`} className=" w-3/4">
          <div className="flex items-center justify-between p-4">
            {/* image and sender info */}
            <div className="flex items-center gap-2 w-1/3 md:1/3 lg:1/3">
              {/* avatar image */}
              <div className="avatar">
                <div className="rounded-full w-10 h-10 m-1">
                  <img src="https://i.pravatar.cc/500?img=32" />
                </div>
              </div>
              {/* email sender name and their email  */}
              <div>
                <h2 className="font-semibold">{data.name}</h2>
                <p className="text-xs flex items-center justify-center gap-1">
                  <MdOutlineMailOutline /> {data.email}
                </p>
              </div>
            </div>
            {/* email subject and email body */}
            <div className="w-1/3 hidden lg:grid">
              <h2 className="font-semibold text-center">{data.subject}</h2>
              <p className="text-xs text-center">
                {data.description.substring(0, 50)}....
              </p>
            </div>
          </div>
        </Link>
        {/* actions  */}
        <div className="w-1/3 text-end p-4">
          <button className="btn text-accent font-bold text-xl">
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InboxCard;
