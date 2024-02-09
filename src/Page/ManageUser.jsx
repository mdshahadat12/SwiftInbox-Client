import { useState } from "react";
// import RoleUpdateModal from "./RoleUpdateModal";
// import { useQuery } from "@tanstack/react-query";
// import Spiner from "../Shared/Spiner";
// import { axiosSecure } from "../Components/useAxios";
import Lottie from "lottie-react";
import lott from "../assets/lott.json";
import Loader from "../Components/Loader";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";

const ManageUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {setIsOpen(false);}
  function openModal() {setIsOpen(true);}
  const [email , setEmail] = useState(null)
  const {data,isLoading} = Loader("/all-users","userinfo")
  console.log(data);
  return (
    <>
    {
      isLoading? <Lottie animationData={lott}></Lottie>      :
      <div className="text-white">
    <Particlesanimation2></Particlesanimation2>
      <h1 className="text-center font-bold text-4xl my-5">Manage User</h1>
                <hr />
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th>S:</th>
              <th>Name</th>
              <th>Email</th>
              <th>Current Temp Mail</th>
              <th>Role</th> 
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((data, idx) => (
              <tr key={data._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="font-bold">{data.displayName}</div>
                </td>
                <td>{data.userEmail}</td>
                <td>{data.tempMail}</td>
                <td>{data.role}</td>
                <th>
                  <button onClick={()=>{openModal();setEmail(data.email)}} className="btn btn-xs">
                    Change Role
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <RoleUpdateModal refetch={refetch} email={email} closeModal={closeModal} isOpen={isOpen} /> */}
    </div>
    }
    </>
  );
};

export default ManageUser;
