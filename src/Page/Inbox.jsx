import { useContext, useState } from "react";
import Lottie from "lottie-react";
import lott from "../assets/lott.json";
import InboxCard from "../Components/InboxCard";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";

const Inbox = () => {
  const { messages,  } = useContext(AuthContext);
  // const [emailData, setEmailData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  let filteredMessages = [];
  filteredMessages = messages?.filter((message) => {
    return message.status !== "deleted";
  });

  // if(tempMail){
  //   axiosSecure.get(`/messages?email=${tempMail}`).then((res) => {
  //     console.log(res.data);
  //     setEmailData(res.data);
  //   });
  // }

  // useEffect(() => {
  //   if (tempMail) {
  //     axiosSecure.get(`/messages?email=${tempMail}`).then((res) => {
  //       console.log(res.data);

  //       setEmailData(res.data);
  //     });
  //   }
  // }, [tempMail]);

  // Calculate the indexes of the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMessages?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4">
      {filteredMessages?.length === 0 && (
        <div className="md:w-96 mx-auto">
          <h1 className="text-center font-bold text-2xl">No messages yet</h1>
          <Lottie animationData={lott} />
        </div>
      )}
      {filteredMessages?.length > 0 && (
        <div>
          <h1 className="text-4xl font-bold mb-5">
            Inbox ({filteredMessages?.length})
          </h1>

          <div>
            {currentItems?.map((data) => (
              <InboxCard key={data._id} data={data}></InboxCard>
            ))}
          </div>

          {/* Pagination UI */}
          <div className="flex flex-col items-center justify-center mt-8 sm:flex-row">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 mb-2 text-sm font-semibold border-2 border-accent rounded-full ${
                currentPage === 1
                  ? "text-gray-500 bg-gray-200 cursor-not-allowed"
                  : "text-gray-400 hover:bg-blue-100"
              } transition duration-300`}
            >
              Previous
            </button>

            {/* Display page numbers */}
            <div className="flex flex-wrap justify-center mb-2 sm:flex-nowrap">
              {Array.from({
                length: Math.ceil(filteredMessages?.length / itemsPerPage),
              }).map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`px-4 py-2 mx-2 text-sm font-semibold border-2 rounded-full ${
                    currentPage === index + 1
                      ? "text-white bg-accent cursor-not-allowed"
                      : "text-gray-500 hover:bg-accent hover:text-white"
                  } transition duration-300`}
                >
                  {index + 1}
                </motion.button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={
                currentPage ===
                Math.ceil(filteredMessages?.length / itemsPerPage)
              }
              className={`px-4 py-2 mx-2 mb-2 text-sm font-semibold border-2 border-accent rounded-full ${
                currentPage ===
                Math.ceil(filteredMessages?.length / itemsPerPage)
                  ? "text-gray-500 bg-gray-200 cursor-not-allowed"
                  : "text-gray-400 hover:bg-blue-100"
              } transition duration-300`}
            >
              Next
            </button>

            {/* Items per page dropdown */}
            <div className="flex items-center justify-center mb-2">
              <label htmlFor="itemsPerPage" className="mr-2"></label>
              <select
                id="itemsPerPage"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="p-2 border-2 text-gray-500 border-accent rounded-md"
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={25}>25</option>
                <option value={30}>30</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
