import { IoIosRefresh } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
import { FaRegCopy } from "react-icons/fa";

import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect } from "react";
import { axiosSecure, baseUrl } from "./useAxios";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const EmailBox = () => {
  const { refetch, setTempMail, tempMail, user } = useContext(AuthContext);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // Call the refetch function every 7 seconds
  //     refetch();
  //   }, 7000);

  //   // Clean up the interval when the component is unmounted
  //   return () => clearInterval(intervalId);
  // }, [refetch]);

  const { refetch: tempFetch } = useQuery({
    queryKey: ["userEmail"],
    queryFn: async () => {
      if (localStorage.getItem("email")) {
        setTempMail(localStorage.getItem("email") || "");
        return localStorage.getItem("email");
      }
      const response = await fetch(`${baseUrl}/get-mail`);
      const data = await response.json().then((data) => {
        setTempMail(data?.email);
        localStorage.setItem("email", data?.email);
        if (user) {
          axiosSecure
            .post(`/manage-user`, {
              userEmail: user?.email,
              displayName: user?.displayName,
              tempMail: data?.email,
            })
            .then((res) => {
              if (res.status === 201) {
                console.log("email synced");
              }
            });
        }
      });
      return data.email;
    },
  });

  // change this to the temp email we get from the website
  const userEmail = tempMail || "Loading.....";

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(userEmail);
    toast.success("Email copied to clipboard");
  };

  //add refetch function here
  const handleRefresh = () => {
    refetch();
  };

  //add change email function here
  const handleChangeEmail = () => {
    const customEmail = document.getElementById("customEmail").value;

    if (`${customEmail}@1secmail.com` === tempMail) {
      toast.error("This is your current email");
      return;
    }

    axiosSecure(`/get-mail?customMail=${customEmail}`).then((res) => {
      if (res.status === 201) {
        setTempMail(`${customEmail}@1secmail.com`);
        localStorage.removeItem("email");
        localStorage.setItem("email", `${customEmail}@1secmail.com`);
        toast.success("Email changed successfully");
        tempFetch();
        if (user) {
          axiosSecure
            .post(`/manage-user`, {
              userEmail: user?.email,
              displayName: user?.displayName,
              tempMail: `${customEmail}@1secmail.com`,
            })
            .then((res) => {
              if (res.status === 201) {
                console.log("email synced");
              }
            });
        }
      } else {
        toast.error("Email already taken");
      }
    });
  };

  //add delete function here
  const handleDelete = () => {
    localStorage.removeItem("email");
    toast.success("Email address deleted");
    tempFetch();
    // if (user) {
    //   axiosSecure
    //     .post(`/manage-user`, {
    //       userEmail: user?.email,
    //       displayName: user?.displayName,
    //       tempMail: tempMail,
    //     })
    //     .then((res) => {
    //       if (res.status === 201) {
    //         console.log("email synced");
    //       }
    //     });
    // }
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

  // Animation controls for the card
  const cardControls = useAnimation();

  useEffect(() => {
    // Trigger the fade-in animation on mount
    cardControls.start({
      opacity: 4,
      transition: { duration: 4 },
    });
  }, [cardControls]);

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={cardControls}
        className="flex items-center justify-center my-8"
      >
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">
              Your Temporary Email Address
            </h2>
            <div className="border flex justify-around rounded-3xl my-2 border-accent py-3">
              <h3 className="text-center font-semibold text-lg">{userEmail}</h3>
              <button onClick={handleCopyToClipboard} title="Click to Copy">
                <FaRegCopy></FaRegCopy>
              </button>
            </div>
            <div className="flex items-center justify-around gap-2">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleRefresh}
                className="btn btn-accent"
              >
                {" "}
                <IoIosRefresh />
                Refresh
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() =>
                  document.getElementById("changeModal").showModal()
                }
                className="btn btn-accent"
              >
                {" "}
                <CiEdit /> Change
              </motion.button>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={() =>
                  document.getElementById("deleteModal").showModal()
                }
                className="btn btn-accent"
              >
                {" "}
                <AiOutlineDelete /> Delete
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
      {/* delete modal here  */}
      <dialog id="deleteModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Are you sure you want to delete this temporary email address?
          </h3>
          <p className="py-4">
            Deleting this email address will also delete all the messages in the
            inbox.
          </p>
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
      {/* change email modal here  */}
      <dialog id="changeModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-center flex justify-center items-center gap-2">
            <input
              type="text"
              placeholder="New Email address...."
              className="input input-bordered input-accent text-center w-3/5 max-w-xs"
              defaultValue={tempMail?.split("@")[0]}
              id="customEmail"
            />
            <p className="font-bold text-xl text-accent">@1secmail.com</p>
          </div>
          <p className="py-4">
            Changing this email address will also delete all the messages in the
            inbox.
          </p>
          <div>
            <form
              method="dialog"
              className="flex items-center justify-center gap-6"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleChangeEmail}
                className="btn bg-accent text-white"
              >
                Change
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
    </div>
  );
};

export default EmailBox;
