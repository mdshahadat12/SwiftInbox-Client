import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import { Helmet } from "react-helmet";


const Profile = () => {
  const { user, userData } = useContext(AuthContext);
  return (
    <>
    <Particlesanimation2></Particlesanimation2>
    <Helmet>
        <title>SwiftInbox | Profile</title>
      </Helmet>
    <div className={`p-10 text-white rounded-lg`}>
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
        <div className="md:px-20">
          <h2>E-mail</h2>
          <h2>{user?.email ? user?.email : "E-imail@mail.com"}</h2>
          <hr />
          <h2 className="mt-5">Country</h2>
          <h2 className="mb-5">Bangladesh</h2>
          <hr />
          <h2>Phone</h2>
          <h2>+88017xxxxxxxx</h2>
        </div>
        <div className="md:px-20">
          <h2>Address</h2>
          <h2>Dhaka, Bangladesh</h2>
          <hr />
          <h2 className="mt-5">Date of Birth</h2>
          <h2 className="mb-5">None</h2>
          <hr />
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
