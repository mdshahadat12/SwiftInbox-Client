import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar";
import { FaQuestionCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import EmailBoxAnimation from "../../Components/Animation/EmailBoxAnimation ";
import Payment from "../../Components/Payment/Payment";
import { useState } from "react";

const BuyCoffee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = ()=>setIsOpen(false)
  const openModal = ()=>setIsOpen(true)
  return (
    <>
      <Helmet>
        <title>SwiftInbox | Payment</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <EmailBoxAnimation></EmailBoxAnimation>
        <div className="min-h-screen flex flex-col bg-green-500/5 text-white">
          <div className="sticky z-50 top-0 h-58px bg-transparent">
            <Navbar></Navbar>
          </div>
          <div className="md:m-10 p-10 flex gap-3 md:flex-row flex-col-reverse items-stretch justify-center">
            <div className="md:w-1/2 w-full bg-slate-300/25 rounded-2xl p-5 flex flex-col">
              <div className="my-2 pb-3 flex">
                <img
                  src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
                  className="h-9 mr-1"
                />
                <Link to="/">
                  <span className="self-center text-2xl font-extrabold whitespace-nowrap">
                    SwiftInboxaa
                  </span>
                </Link>
              </div>
              <hr />
              <div className="p-3 flex flex-col gap-5 flex-1">
                <Link to="/">
                  <span className="font-semibold hover:underline hover:text-blue-500">
                    Home
                  </span>
                </Link>
                <div>
                  <h2 className="font-bold text-lg">About Us</h2>
                  <p className="text-sm">
                    The Temp Email project is a user-friendly web application
                    designed to provide temporary email addresses, effectively
                    shielding users from spam, advertising, and potential
                    security threats associated with revealing personal email
                    addresses. This innovative platform generates unique
                    disposable email addresses, allowing users to receive emails
                    and attachments securely. Developed by a team of six skilled
                    software engineers - Abir Hossain, Antu Bhatta, Ayan Kumar
                    Das, Hassan Sabbir, Pallab Kumar, and Shahadat Hossain - the
                    system ensures privacy and security by automatically
                    deleting emails after a set duration, offering a seamless
                    and anonymous email experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full bg-white/10 rounded-2xl shadow-lg p-5 flex flex-col">
              <div className="pb-5">
                SwiftInbox /
                <span className="underline text-green-500"> Payment</span>
              </div>
              <hr />
              <div className="flex flex-col flex-1 pt-3">
                <h1 className="font-bold text-xl flex items-center gap-1">
                  Buy SwiftInbox temp mail a coffee{" "}
                  <FaQuestionCircle title="Show your appreciation for SwiftInbox with a symbolic 'coffee'! Each one is just 50tk and helps fuel our helpful platform." />
                </h1>
                {/* FORM STARTS */}
                <form className="card-body flex-1">
                  <div className="form-control">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control">
                    <input
                      type="text"
                      name="text"
                      placeholder="Say Something Good About Us"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control"></div>
                </form>
                  <div className="form-control mt-6">
                    <button onClick={openModal} className="p-3 rounded-lg bg-green-500 w-full font-bold">
                      Support 50 Tk
                    </button>
                  </div>
                {/* FORM ENDS */}
              </div>
            </div>
          </div>

          <div className="sticky z-50 bottom-0 h-96px">
            <div className="w-full p-10 flex justify-center items-center align-middle">
              <p className="text-sm font-semibold text-center">
                Copyright © 2024 - All right reserved by Team CodeCrafters
              </p>
            </div>
          </div>
        </div>
        <Payment closeModal={closeModal} isOpen={isOpen} />
      </motion.div>
    </>
  );
};

export default BuyCoffee;
