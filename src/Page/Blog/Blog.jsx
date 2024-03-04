// import { Link, useLoaderData } from "react-router-dom";
// import Navbar from "../../Components/Home/Navbar";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import { useState } from "react";
// import { Helmet } from "react-helmet";
// import SingleBlogCard from "./SingleBlog.Card";

// const Blog = () => {
//   const blogData = useLoaderData();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };
//   return (
//     <>
//       <Helmet>
//         <title>SwiftInbox | Blog</title>
//       </Helmet>
//       <div className="min-h-screen flex flex-col">
//         <div className="sticky z-50 top-0 h-58px bg-white bg-transparent">
//           <Navbar></Navbar>
//         </div>
//         <div className="flex-1 py-10 flex justify-center">
//           <div className="w-2/3">
//             <div className="my-2 flex">
//               <img
//                 src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
//                 className="h-9 mr-3"
//               />
//               <span className="self-center text-2xl font-extrabold whitespace-nowrap text-blue-700">
//                 SwiftInbox
//               </span>
//             </div>
//             <div className="pb-4 flex justify-between">
//               <div>
//                 <Link to="/">
//                   <span className="hover:underline hover:text-blue-500">
//                     SwiftInbox Home
//                   </span>
//                 </Link>{" "}
//                 / <span className="underline">Blog</span>
//               </div>
//               <div className="flex items-center align-middle gap-1">
//                 <IoMdAddCircleOutline />
//                 <button onClick={openModal}>Add a Blog</button>

//                 {/* MODAL PART STARTS*/}
//                 {isModalOpen && (
//                   <div className="modal-container">
//                     <dialog
//                       id="To_Donate"
//                       className="modal modal-bottom sm:modal-middle"
//                       open
//                     >
//                       <div className="modal-box bg-black text-black z-100 shadow-2xl">
//                         <h3 className="font-semibold text-lg text-yellow-300 text-center">
//                           Please write your blog
//                         </h3>
//                         <form
//                           // onSubmit={handlePetAdoption}
//                           className="flex flex-col gap-4 px-5 py-9"
//                         >
//                           <input
//                             type="text"
//                             name="title"
//                             placeholder="Add a title"
//                             className="input input-bordered "
//                             required
//                           />
//                           <input
//                             type="text"
//                             name="article"
//                             placeholder="Write blog details"
//                             className="input input-bordered"
//                             required
//                           />
//                           <input
//                             type="date"
//                             name="date"
//                             placeholder="date"
//                             className="input input-bordered "
//                             required
//                           />
//                           <input
//                             type="text"
//                             name="imageUrl"
//                             placeholder="Input image url"
//                             className="input input-bordered"
//                             required
//                           />
//                           <div className="form-control border-none mt-6">
//                             <button className="btn bg-yellow-600 hover:bg-yellow-700 text-black">
//                               Add
//                             </button>
//                           </div>
//                         </form>
//                         <div className="flex justify-center">
//                           <div className="modal-action">
//                             <p
//                               onClick={closeModal}
//                               className="underline text-xs text-red-700 hover:text-red-600"
//                             >
//                               close
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </dialog>
//                   </div>
//                 )}
//                 {/* MODAL PART ENDS*/}
//               </div>
//             </div>
//             <hr />
//             {/* BLOG BODY STARTS */}
//             <div className="py-9 flex flex-col gap-5">
//               {blogData.map((blogData) => (
//                 <SingleBlogCard
//                   key={blogData.id}
//                   blogData={blogData}
//                 ></SingleBlogCard>
//               ))}
//             </div>
//             {/* BLOG BODY ENDS */}
//           </div>
//         </div>
//         <div className="sticky z-50 bottom-0 h-96px ">
//           <div className="z-50 w-full p-10 bg-blue-600/10 flex justify-center items-center align-middle">
//             <p className="text-black text-xs font-semibold">
//               Copyright © 2024 - All right reserved by Team CodeCrafters
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;

import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Home/Navbar";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SingleBlogCard from "./SingleBlog.Card";
import axios from "axios"; // Import Axios for making HTTP requests
import { axiosSecure } from "../../Components/useAxios";
import toast from "react-hot-toast";
import Loader from "../../Components/Loader";

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch blog data from backend when component mounts
  useEffect(() => {
    fetchBlogData();
  }, []);

  // Function to fetch blog data from backend
  const fetchBlogData = async () => {
    try {
      const response = await axiosSecure.get("/blog"); // Assuming backend is hosted on the same domain
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to handle form submission and save blog to backend
  const handleAddBlog = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const article = e.target.article.value;
    const imageUrl = e.target.imageUrl.value;
    const date = new Date().toLocaleString();
    const data = {
      title,
      article,
      imageUrl,
      date,
    };
    const { refetch } = Loader;
    axiosSecure.post("/blog", data).then((res) => {
      if (res.status === 201) {
        e.target.reset();
        toast.success("New Blog Successfully Created");
        closeModal();
        refetch;
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>SwiftInbox | Blog</title>
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <div className="sticky z-50 top-0 h-58px bg-white bg-transparent">
          <Navbar></Navbar>
        </div>
        <div className="flex-1 py-10 flex justify-center">
          <div className="w-2/3">
            <div className="my-2 flex">
              <img
                src="https://i.ibb.co/0MtxH7T/Picsart-24-01-18-10-33-37-005.png"
                className="h-9 mr-3"
              />
              <span className="self-center text-2xl font-extrabold whitespace-nowrap text-blue-700">
                SwiftInbox
              </span>
            </div>
            <div className="pb-4 flex justify-between">
              <div>
                <Link to="/">
                  <span className="hover:underline hover:text-blue-500">
                    SwiftInbox Home
                  </span>
                </Link>{" "}
                / <span className="underline">Blog</span>
              </div>
              <div className="flex items-center align-middle gap-1">
                <IoMdAddCircleOutline />
                <button onClick={openModal}>Add a Blog</button>
              </div>
            </div>
            <hr />
            {/* MODAL PART STARTS */}
            {isModalOpen && (
              <div className="modal-container">
                <dialog
                  id="To_Donate"
                  className="modal modal-bottom sm:modal-middle"
                  open
                >
                  <div className="modal-box bg-black text-black z-100 shadow-2xl">
                    <h3 className="font-semibold text-lg text-yellow-300 text-center">
                      Please write your blog
                    </h3>
                    <form
                      onSubmit={handleAddBlog}
                      className="flex flex-col gap-4 px-5 py-9"
                    >
                      <input
                        type="text"
                        name="title"
                        placeholder="Add a title"
                        className="input input-bordered"
                        required
                      />
                      <input
                        type="text"
                        name="article"
                        placeholder="Write blog details"
                        className="input input-bordered"
                        required
                      />

                      <input
                        type="text"
                        name="imageUrl"
                        placeholder="Input image url"
                        className="input input-bordered"
                        required
                      />
                      <div className="form-control border-none mt-6">
                        <button className="btn bg-yellow-600 hover:bg-yellow-700 text-black">
                          Add
                        </button>
                      </div>
                    </form>
                    <div className="flex justify-center">
                      <div className="modal-action">
                        <button
                          onClick={closeModal}
                          className="underline text-xs text-red-700 hover:text-red-600"
                        >
                          close
                        </button>
                      </div>
                    </div>
                  </div>
                </dialog>
              </div>
            )}
            {/* MODAL PART ENDS */}
            <div className="py-9 flex flex-col gap-5">
              {/* Add logging and check if blogData is an array before mapping */}
              {Array.isArray(blogData) ? (
                blogData.map((blog) => (
                  <SingleBlogCard
                    key={blog._id}
                    blogData={blog}
                  ></SingleBlogCard>
                ))
              ) : (
                <p>No blog data available</p>
              )}
            </div>
          </div>
        </div>
        <div className="sticky z-50 bottom-0 h-96px ">
          <div className="z-50 w-full p-10 bg-blue-600/10 flex justify-center items-center align-middle">
            <p className="text-black text-xs font-semibold">
              Copyright © 2024 - All right reserved by Team CodeCrafters
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
