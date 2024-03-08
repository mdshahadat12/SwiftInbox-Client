import { motion } from "framer-motion";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { axiosSecure } from "../Components/useAxios";
import toast from "react-hot-toast";
const Opinion = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const rating = e.target.Rating.value;
    const opinion = e.target.opinion.value;
    const email = user.email;
    const photo = user.photoURL || "https://i.ibb.co/bWNb6W5/user.png";
    const timeStamp = new Date().toLocaleString();
    const data = {
      name,
      email,
      photo,
      rating,
      opinion,
      timeStamp,
    };
    axiosSecure.post("/reviews", data).then((res) => {
      if (res.status === 201) {
        e.target.reset();
        toast.success("Opinion Submitted");
      }
    });
  };
  return (
    <div className="text-white text-center mt-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        Share Your Opinions
      </motion.h1>
      <button className="my-6  w-44 h-1 text-white bg-[#37B3E6] rounded-full hover:bg-[#164863]"></button>
      <div className="text-center py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 py-10 md:px-6 px-2 rounded-lg mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="flex flex-col flex-1 gap-5 text-black"
          >
            <div className="flex items-center justify-center gap-5">
              <motion.input
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                type="text"
                name="name"
                placeholder="Your Name"
                className="py-2 px-4 border w-full border-cyan-500 rounded focus:outline-none focus:border-cyan-700"
              />
              <motion.select
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="py-2 px-4 border w-full border-cyan-500 rounded focus:outline-none focus:border-cyan-700"
                name="Rating"
                id=""
              >
                <option>Select Your Rating</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
              </motion.select>
            </div>
            <motion.textarea
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              placeholder="Your Opinion"
              name="opinion"
              rows={10}
              className="py-2 px-4 border border-cyan-500 rounded focus:outline-none focus:border-cyan-700"
            ></motion.textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-accent"
              type="submit"
            >
              Send Opinion
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Opinion;
