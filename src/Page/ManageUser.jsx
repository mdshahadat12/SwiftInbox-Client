import Lottie from "lottie-react";
import lott from "../assets/lott.json";
import Loader from "../Components/Loader";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import { Helmet } from "react-helmet";
import { axiosSecure } from "../Components/useAxios";
import toast from "react-hot-toast";

const ManageUser = () => {
  const { data, isLoading, refetch } = Loader("/all-users", "userinfo");

  const handleRoleChange = (email, role, existedRole) => {
    if (role === existedRole) {
      toast.error("You can't change your role to the same one");
    } else {
      axiosSecure
        .put("/change-role", { email: email, role: role })
        .then((res) => {
          if (res.status == 201) {
            toast.success("Role changed successfully");
            refetch();
          } else {
            toast.error("Something went wrong");
          }
        });
    }
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center ">
          <Lottie className="w-[200px]" animationData={lott}></Lottie>
        </div>
      ) : (
        <div className="text-white">
          <Particlesanimation2></Particlesanimation2>
          <Helmet>
            <title>SwiftInbox | Manage User</title>
          </Helmet>
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
                      <button
                        onClick={() => {
                          document.getElementById(data._id).showModal();
                        }}
                        className="btn btn-xs"
                      >
                        Change Role
                      </button>
                    </th>
                    {/* modal here  */}
                    <dialog id={data._id} className="modal">
                      <div className="modal-box bg-stone-800 rounded-lg p-5">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                          </button>
                        </form>
                        <h3 className="font-bold text-lg text-center">
                          Changing the role for{" "}
                          <span className="underline">{data.displayName}</span>{" "}
                          <br />
                          Currently Set to{" "}
                          <span className="underline">{data.role}</span>
                        </h3>
                        <div className="flex justify-center gap-5 mt-5">
                          <button
                            onClick={() =>
                              handleRoleChange(
                                data.userEmail,
                                "admin",
                                data.role
                              )
                            }
                            className="btn btn-accent"
                          >
                            Set to Admin
                          </button>
                          <button
                            onClick={() =>
                              handleRoleChange(
                                data.userEmail,
                                "user",
                                data.role
                              )
                            }
                            className="btn btn-accent"
                          >
                            Set to User
                          </button>
                        </div>
                      </div>
                    </dialog>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <RoleUpdateModal refetch={refetch} email={email} closeModal={closeModal} isOpen={isOpen} /> */}
        </div>
      )}
    </>
  );
};

export default ManageUser;
