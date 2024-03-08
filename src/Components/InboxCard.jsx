/* eslint-disable react/prop-types */
import { MdOutlineMailOutline, MdFiberNew } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
import { axiosSecure } from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const InboxCard = ({ data, bookFetch, admin }) => {
  const { user, refetch } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  //add delete function here
  const handleDelete = (id) => {
    axiosSecure.put(`/update-mail/${id}`).then((res) => {
      if (res.status === 201) {
        toast.success("Email deleted");
        refetch();
      }
    });
  };
  // add bookmark function here
  const handleBookmark = (id) => {
    if (!user) {
      navigate("/login");
    }

    {
      data?.bookmark?.includes(user?.email)
        ? axiosSecure
            .delete(`/bookmark/${id}?email=${user.email}`)
            .then((res) => {
              if (res.status === 201) {
                toast.success("Bookmarked Removed");
                refetch();
                bookFetch();
              }
            })
        : axiosSecure.put(`/bookmark/${id}?email=${user.email}`).then((res) => {
            if (res.status === 201) {
              toast.success("Bookmarked");
              refetch();
              bookFetch();
            }
          });
    }
  };

  const email = data?.from;

  const displayDescription = () => {
    const maxLength = 50;
    if (data?.body_html && data?.body_html.length > maxLength) {
      return `${data?.body_html.substring(0, maxLength)}....`;
    }
    return data?.body_html;
  };

  // Motion variants for button animations
  const buttonVariants = {
    hover: {
      scale: 0.9,
      transition: {
        duration: 0.5,
        yoyo: Infinity,
      },
    },
    tap: {
      scale: 0.5,
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className="my-2"
    >
      <div
        className={`${
          data.status == "unread" ? "bg-base-200" : "bg-gray-400"
        } flex items-center justify-between w-full rounded-lg `}
      >
        <Link
          to={`/inbox/${data?._id}`}
          state={{ from: location.pathname }}
          className=" w-3/4"
        >
          <div className="flex items-center justify-between p-4">
            {/* image and sender info */}
            <div className="flex items-center gap-2 w-1/3 md:1/3 lg:1/3">
              {/* avatar image */}
              <div className="avatar">
                <Avatar email={email}></Avatar>
              </div>
              {/* email sender name and their email  */}
              <div>
                <h2 className="font-semibold">{email}</h2>
                <p className="text-xs flex items-center justify-start gap-1">
                  <MdOutlineMailOutline /> {data?.to}
                </p>
              </div>
            </div>
            {/* email subject and email body */}
            <div className="w-1/3 hidden lg:grid">
              <h2 className="font-semibold">{data?.subject}</h2>
              <p
                className="text-xs"
                dangerouslySetInnerHTML={{ __html: displayDescription() || "" }}
              />
            </div>
          </div>
        </Link>
        {/* actions  */}
        <div className="w-1/3 text-end p-4 relative">
          {data.status == "unread" && (
            <MdFiberNew className="absolute text-3xl text-red-500 translate-x-3/4 translate-y-1/2" />
          )}
          {/* bookmark  */}
          {admin ? (
            " "
          ) : (
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleBookmark(data._id)}
              className={`btn text-accent font-bold text-xl lg:mr-2 ${
                data.status == "unread"
                  ? "bg-base-200"
                  : "bg-gray-400 border-gray-400"
              }`}
            >
              {data?.bookmark?.includes(user?.email) ? (
                <FaBookmark />
              ) : (
                <FaRegBookmark />
              )}
            </motion.button>
          )}
          {/* delete  */}
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById(data._id).showModal()}
            className={`btn text-accent font-bold text-xl ${
              data.status == "unread"
                ? "bg-base-200"
                : "bg-gray-400 border-gray-400"
            }`}
          >
            <AiFillDelete />
          </motion.button>
        </div>
      </div>
      {/* delete modal here  */}
      <dialog id={data._id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-5">
            Are you sure you want to delete this email ?
          </h3>
          <div className="">
            <form
              method="dialog"
              className="flex items-center justify-center gap-6"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleDelete(data._id)}
                className="btn bg-red-600 text-white"
              >
                Confirm
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="btn"
              >
                Cancel
              </motion.button>
            </form>
          </div>
        </div>
      </dialog>
    </motion.div>
  );
};

export default InboxCard;
