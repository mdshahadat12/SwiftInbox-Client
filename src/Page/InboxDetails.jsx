import { useContext, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import Avatar from "../Components/Avatar";
import lott from "../assets/lott.json";
import Lottie from "lottie-react";
import { axiosSecure } from "../Components/useAxios";
import { GoDownload } from "react-icons/go";
import { IoPrintOutline } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import Loader from "../Components/Loader";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import { Helmet } from "react-helmet";
const InboxDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user, refetch } = useContext(AuthContext);
  const {
    data: message,
    isLoading,
    refetch: mRefetch,
  } = Loader(`/message/${id}`, "singleMessage");

  useEffect(() => {
    axiosSecure.put(`/notify-mail/${id}`);
  }, [id]);

  if (isLoading) {
    return <Lottie animationData={lott} />;
  }

  const emailRegex = /<([^>]+)>/;
  const emailMatch = message?.from.match(emailRegex);
  const email = emailMatch ? emailMatch[1] : null;
  const name = message?.from.replace(emailRegex, "").replace(/"/g, "").trim();

  const date = new Date(message?.created_at);
  // Adjust to UTC+6
  date.setUTCHours(date.getUTCHours() + 6);
  const optionsDate = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Almaty",
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", optionsDate).format(
    date
  );
  const formattedTime = new Intl.DateTimeFormat("en-US", optionsTime).format(
    date
  );
  const formattedString = `${formattedDate} at ${formattedTime}`;

  const htmlString = message?.body_html;

  //add delete function here
  const handleDelete = () => {
    axiosSecure.put(`/update-mail/${id}`).then((res) => {
      if (res.status === 201) {
        toast.success("Email deleted");
        refetch();
        navigate("/");
      }
    });
  };

  // add bookmark function here
  const handleBookmark = (id) => {
    {
      message?.bookmark?.includes(user?.email)
        ? axiosSecure
            .delete(`/bookmark/${id}?email=${user.email}`)
            .then((res) => {
              if (res.status === 201) {
                toast.success("Bookmarked Removed");
                mRefetch();
                refetch();
              }
            })
        : axiosSecure.put(`/bookmark/${id}?email=${user.email}`).then((res) => {
            if (res.status === 201) {
              toast.success("Bookmarked");
              mRefetch();
              refetch();
            }
          });
    }
  };

  //download function here
  const handleDownload = () => {
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "email_page.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  //print function here
  const handlePrint = () => {
    window.print();
  };

  // label function here
  const handleLabel = (e) => {
    axiosSecure
      .put(`/label/${id}?label=${e.target.value}`)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Label Updated");
          mRefetch();
        }
      })
      .catch((error) => {
        toast.error("Label not added");
        console.log(error);
      });
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
    <>
      <Particlesanimation2></Particlesanimation2>
      <Helmet>
        <title>SwiftInbox | Inbox Details</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 0 }} // Initial animation state (hidden and slightly shifted)
        animate={{ opacity: 1, y: 60 }} // Animation to reveal the component
        transition={{ duration: 0.5 }} // Duration of the animation
        className="pt-10 lg:px-10"
      >
        <Link onClick={() => navigate(-1)}>
          <button className="mb-3 flex bg-white btn items-center">
            <FaArrowLeft className="text-lg mr-3" />
            Go Back
          </button>
        </Link>
        {/* email subject here */}
        <section className="lg:flex justify-between mb-5">
          <div className="flex items-center gap-5 flex-wrap mb-5">
            <h1 title="Subject" className="text-2xl text-white font-semibold ">
              {message?.subject}
            </h1>
            {message?.label && (
              <div className="badge badge-accent gap-2">{message?.label}</div>
            )}
            <select
              onChange={handleLabel}
              className="select select-accent select-sm max-w-xs"
              title="Select Label"
            >
              <option></option>
              <option value="Default">Default</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Scam">Scam</option>
            </select>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleBookmark(message._id)}
              className="btn btn-sm lg:btn-md"
              title="Bookmark"
            >
              {message?.bookmark?.includes(user?.email) ? (
                <FaBookmark />
              ) : (
                <FaRegBookmark />
              )}
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDownload}
              className="btn btn-sm lg:btn-md"
              title="Download"
            >
              <GoDownload />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrint}
              className="btn btn-sm lg:btn-md"
              title="Print"
            >
              <IoPrintOutline />
            </motion.button>
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => document.getElementById("deleteModal").showModal()}
              className="btn btn-sm lg:btn-md"
              title="Delete"
            >
              <MdOutlineDelete />
            </motion.button>
          </div>
        </section>

        {/* email description here  */}
        <section className="bg-base-200 p-5 rounded-md min-h-[calc(100vh-160px)]">
          <div className="lg:flex items-center justify-between mb-5">
            <div className="flex gap-2 items-center">
              <Avatar email={email} />
              <div>
                {/* user info */}
                <div className="">
                  <p className="lg:mr-3 font-bold">{name}</p>
                  <p className="font-medium">{"From: " + email}</p>
                </div>

                {/* sender mail  */}
                <p className="flex items-center gap-1">
                  {"To: " + message?.to}
                </p>
                <p className="">{formattedString}</p>
              </div>
              {/* date */}
              {/* <div className="lg:text-end">
              <p className="">{currentData?.time}</p>
            </div> */}
            </div>

            {/* email info */}
          </div>
          <p
            className="lg:px-5 xl:px-20 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: htmlString }}
          ></p>
        </section>
        {/* delete modal here  */}
        <dialog id="deleteModal" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-5">
              Are you sure you want to delete this email ?
            </h3>
            <div className="">
              <form
                method="dialog"
                className="flex items-center justify-center gap-6"
              >
                <button
                  onClick={handleDelete}
                  className="btn bg-red-600 text-white"
                >
                  Confirm
                </button>
                <button className="btn">Cancel</button>
              </form>
            </div>
          </div>
        </dialog>
      </motion.div>
    </>
  );
};

export default InboxDetails;
