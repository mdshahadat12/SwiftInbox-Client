import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet";
import EmailBoxAnimation from "../Components/Animation/EmailBoxAnimation ";
import { axiosSecure } from "../Components/useAxios";
import toast from "react-hot-toast";

const Profile = () => {
  const { user, userData, setUserData } = useContext(AuthContext);
  const handleEdit = (e) => {
    e.preventDefault();
    const email = user?.email;
    const address = e.target.address.value;
    const country = e.target.country.value;
    const dateOfBirth = e.target.date.value;
    const phoneNumber = e.target.phone.value;
    const data = {
      email,
      address,
      country,
      dateOfBirth,
      phoneNumber,
    };
    axiosSecure.put("/update-profile", data).then((res) => {
      if (res.status === 201) {
        e.target.reset();
        setUserData(res.data);
        toast.success("Details Updated");
      }
    });
  };
  return (
    <>
      <EmailBoxAnimation></EmailBoxAnimation>
      <Helmet>
        <title>SwiftInbox | Profile</title>
      </Helmet>
      <div className={`lg:p-10 text-white rounded-lg`}>
        <div>
          <img
            className="h-[150px] w-[150px] rounded-full ring-4 ring-gray-400 mx-auto my-10"
            src={
              user?.photoURL
                ? user?.photoURL
                : "https://i.ibb.co/t23zmR8/Logo.png"
            }
            alt=""
          />
        </div>
        <h1 className="text-center text-xl font-semibold">
          Name: {user?.displayName}
        </h1>
        <h1 className="text-center text-xl font-semibold">
          Role: {userData?.role?.toUpperCase()}
        </h1>
        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="lg:px-20">
            <h2>E-mail</h2>
            <h2>{user?.email ? user?.email : "E-imail@mail.com"}</h2>
            <hr />
            <h2 className="mt-5">Country</h2>
            <h2 className="mb-5">{userData?.country}</h2>
            <hr />
            <h2>Phone</h2>
            <h2>{userData?.phoneNumber}</h2>
          </div>
          <div className="lg:px-20">
            <h2>Address</h2>
            <h2>{userData?.address}</h2>
            <hr />
            <h2 className="mt-5">Date of Birth</h2>
            <h2 className="mb-5">{userData?.dateOfBirth}</h2>
            <hr />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => document.getElementById("my_modal_2").showModal()}
            className="btn btn-accent w-1/4"
          >
            Edit
          </button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-center text-xl">Edit Details</h3>
          <form onSubmit={handleEdit} className="flex flex-col gap-4 px-5 py-9">
            <label>Address</label>
            <input
              type="text"
              name="address"
              placeholder="Add Your Address"
              className="input input-bordered"
              required
            />
            <label>Country</label>
            <input
              type="text"
              name="country"
              placeholder="Add your Country"
              className="input input-bordered"
              required
            />
            <label>Date of Birth</label>
            <input
              type="text"
              name="date"
              placeholder="Enter Your Date of Birth"
              className="input input-bordered"
              required
            />
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter your Phone Number"
              className="input input-bordered"
              required
            />
            <div className="form-control border-none mt-6">
              <button className="btn btn-accent text-black">Update</button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Profile;
