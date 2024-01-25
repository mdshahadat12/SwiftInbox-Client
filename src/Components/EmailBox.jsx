import { IoIosRefresh } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import toast from "react-hot-toast";
const EmailBox = () => {
  const userEmail = "example@tempmail.com"; // change this to the temp email we get from the website

  //add refetch function here
  const handleRefresh = () => {
    window.location.reload();
  };

  //add change email function here
  const handleChangeEmail = () => {
    toast.success("Email changed successfully");
  };

  //add delete function here
  const handleDelete = () => {
    toast.success("Email address deleted");
  };
  return (
    <div className="max-w-screen-xl mx-auto my-12 px-4">
      <div className="flex items-center justify-center my-8">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">
              Your Temporary Email Address
            </h2>
            <div className="border rounded-3xl my-2 border-accent py-3">
              <h3 className="text-center font-semibold text-lg">{userEmail}</h3>
            </div>
            <div className="flex items-center justify-around gap-2">
              <button onClick={handleRefresh} className="btn btn-accent">
                {" "}
                <IoIosRefresh />
                Refresh
              </button>
              <button
                onClick={() =>
                  document.getElementById("changeModal").showModal()
                }
                className="btn btn-accent"
              >
                {" "}
                <CiEdit /> Change
              </button>
              <button
                onClick={() =>
                  document.getElementById("deleteModal").showModal()
                }
                className="btn btn-accent"
              >
                {" "}
                <AiOutlineDelete /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
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
      {/* change email modal here  */}
      <dialog id="changeModal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="text-center">
            <input
              type="text"
              placeholder="New Email address...."
              className="input input-bordered input-accent text-center w-full max-w-xs"
              defaultValue={userEmail}
            />
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
              <button
                onClick={handleChangeEmail}
                className="btn bg-accent text-white"
              >
                Change
              </button>
              <button className="btn">Cancel</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EmailBox;
