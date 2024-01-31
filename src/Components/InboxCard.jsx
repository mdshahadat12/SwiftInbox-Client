/* eslint-disable react/prop-types */
import { MdOutlineMailOutline } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Avatar from "./Avatar";
const InboxCard = ({ data }) => {
  //add delete function here
  const handleDelete = () => {
    toast.success("Email deleted");
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
      <div className="bg-base-200 flex items-center justify-between w-full rounded-lg">
        <Link to={`/inbox/${data._id}`} className=" w-3/4">
          <div className="flex items-center justify-between p-4">
            {/* image and sender info */}
            <div className="flex items-center gap-2 w-1/3 md:1/3 lg:1/3">
              {/* avatar image */}
              <div className="avatar">
                {/* <div className="rounded-full w-10 h-10 m-1">
                  <img src="https://i.pravatar.cc/500?img=32" />
                </div> */}
                <Avatar email={data.email}></Avatar>
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
              <h2 className="font-semibold">{data.subject}</h2>
              <p className="text-xs">{data.description.substring(0, 50)}....</p>
            </div>
          </div>
        </Link>
        {/* actions  */}
        <div className="w-1/3 text-end p-4">
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.getElementById("deleteModal2").showModal()}
            className="btn text-accent font-bold text-xl"
          >
            <AiFillDelete />
          </motion.button>
        </div>
      </div>
      {/* delete modal here  */}
      <dialog id="deleteModal2" className="modal modal-bottom sm:modal-middle">
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
                onClick={handleDelete}
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
