import { useContext, useEffect, useState } from "react";
import Lottie from "lottie-react";
import lott from "../assets/lott.json";
import InboxCard from "../Components/InboxCard";
import { motion } from "framer-motion";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Components/Loader";

// eslint-disable-next-line react/prop-types
const Inbox = ({ bookmarkPage }) => {
  const { user, messages } = useContext(AuthContext);
  const [filteredMessages, setFilteredMessages] = useState([]);
  const [bookmarkedMessages, setBookmarkedMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page
  let checkMessage = [];
  checkMessage = messages?.filter((message) => {
    return message.status !== "deleted";
  });
  const { data: allMessages, refetch: bookFetch } = Loader(
    `/all-messages`,
    "allMessages"
  );
  useEffect(() => {
    setFilteredMessages(
      messages?.filter((message) => {
        return message.status !== "deleted";
      })
    );
    setBookmarkedMessages(
      allMessages?.filter(
        (messages) =>
          messages?.bookmark?.includes(user?.email) &&
          messages.status !== "deleted"
      )
    );
  }, [allMessages, messages, user?.email]);

  // Calculate the indexes of the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bookmarkPage
    ? bookmarkedMessages?.slice(indexOfFirstItem, indexOfLastItem)
    : filteredMessages?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  const handleLabel = (e) => {
    const sort = e.target.value;
    if (sort === "Default") {
      bookmarkPage
        ? setBookmarkedMessages(
            allMessages?.filter(
              (messages) =>
                messages?.bookmark?.includes(user?.email) &&
                messages.status !== "deleted"
            )
          )
        : setFilteredMessages(
            messages?.filter((message) => {
              return message.status !== "deleted";
            })
          );
    } else if (sort === "Date") {
      bookmarkPage
        ? setBookmarkedMessages(
            allMessages
              ?.filter(
                (messages) =>
                  messages?.bookmark?.includes(user?.email) &&
                  messages.status !== "deleted"
              )
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          )
        : setFilteredMessages(
            messages
              ?.filter((message) => {
                return message.status !== "deleted";
              })
              .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
          );
    } else
      bookmarkPage
        ? setBookmarkedMessages(
            allMessages?.filter(
              (messages) =>
                messages?.bookmark?.includes(user?.email) &&
                messages.status !== "deleted" &&
                messages?.label === sort
            )
          )
        : setFilteredMessages(
            messages?.filter((message) => {
              return message.status !== "deleted" && message?.label === sort;
            })
          );

    setCurrentPage(1);
  };

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4">
      {bookmarkPage
        ? bookmarkedMessages?.length === 0 && (
            //for bookmark page
            <div className="md:w-96 mx-auto">
              <h1 className="text-center font-bold text-2xl text-white">
                No Bookmarks yet
              </h1>
              <Lottie animationData={lott} />
            </div>
          )
        : checkMessage?.length === 0 && (
            //for inbox page
            <div className="md:w-96 mx-auto">
              <h1 className="text-center font-bold text-2xl text-white">
                No messages yet
              </h1>
              <Lottie animationData={lott} />
            </div>
          )}
      {bookmarkPage
        ? bookmarkedMessages?.length > 0 && (
            //for bookmark page
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-4xl text-white font-bold mb-5">
                  {bookmarkPage ? "Bookmarks" : "Inbox"} (
                  {bookmarkedMessages?.length})
                </h1>
                <select
                  onChange={handleLabel}
                  className="select select-accent select-sm max-w-xs"
                  title="Select Label"
                >
                  <option value="Default">Default</option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Scam">Scam</option>
                  <option value="Date">Date</option>
                </select>
              </div>

              <div>
                {currentItems?.map((data) => (
                  <InboxCard
                    key={data._id}
                    data={data}
                    bookFetch={bookFetch}
                  ></InboxCard>
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
                    length: Math.ceil(
                      bookmarkedMessages?.length / itemsPerPage
                    ),
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
                    Math.ceil(bookmarkedMessages?.length / itemsPerPage)
                  }
                  className={`px-4 py-2 mx-2 mb-2 text-sm font-semibold border-2 border-accent rounded-full ${
                    currentPage ===
                    Math.ceil(bookmarkedMessages?.length / itemsPerPage)
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
          )
        : checkMessage?.length > 0 && (
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-4xl text-white font-bold mb-5">
                  {bookmarkPage ? "Bookmarks" : "Inbox"} (
                  {filteredMessages?.length})
                </h1>
                <select
                  onChange={handleLabel}
                  className="select select-accent select-sm max-w-xs"
                  title="Select Label"
                >
                  <option value="Default">Default</option>
                  <option value="Work">Work</option>
                  <option value="Personal">Personal</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Scam">Scam</option>
                  <option value="Date">Date</option>
                </select>
              </div>

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
