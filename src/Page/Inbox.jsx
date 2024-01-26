import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import lott from "../assets/lott.json";
import InboxCard from "../Components/InboxCard";

const Inbox = () => {
  const [emailData, setEmailData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Default items per page

  useEffect(() => {
    fetch("./emailData.json")
      .then((res) => res.json())
      .then((data) => setEmailData(data));
  }, []);

  // Calculate the indexes of the items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = emailData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };

  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4">
      {emailData.length === 0 && (
        <div className="md:w-96 mx-auto">
          <h1 className="text-center font-bold text-2xl">No messages yet</h1>
          <Lottie animationData={lott} />
        </div>
      )}

      {emailData.length > 0 && (
        <div>
          <h1 className="text-4xl font-bold mb-5">
            Inbox ({emailData.length})
          </h1>

          <div>
            {currentItems.map((data) => (
              <InboxCard key={data._id} data={data}></InboxCard>
            ))}
          </div>

          {/* Pagination UI */}
          <div className="flex items-center justify-center mt-8">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 mx-2 text-sm font-semibold border-2 border-accent rounded-full ${
                currentPage === 1 ? "text-gray-500 bg-gray-200 cursor-not-allowed" : "text-gray-400 hover:bg-blue-100"
              } transition duration-300`}
            >
              Previous
            </button>

            {/* Display page numbers */}
            {Array.from({ length: Math.ceil(emailData.length / itemsPerPage) }).map((_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 mx-2 text-sm font-semibold border-2 rounded-full ${
                  currentPage === index + 1
                    ? "text-white bg-accent cursor-not-allowed"
                    : "text-gray-500 hover:bg-accent hover:text-white"
                } transition duration-300`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === Math.ceil(emailData.length / itemsPerPage)}
              className={`px-4 py-2 mx-2 text-sm font-semibold border-2 border-accent rounded-full ${
                currentPage === Math.ceil(emailData.length / itemsPerPage)
                  ? "text-gray-500 bg-gray-200 cursor-not-allowed"
                  : "text-gray-400 hover:bg-blue-100"
              } transition duration-300`}
            >
              Next
            </button>
            {/* Items per page dropdown */}
          <div className=" flex items-center justify-center">
            <label htmlFor="itemsPerPage" className="mr-2">
            </label>
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
