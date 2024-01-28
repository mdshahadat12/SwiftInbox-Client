import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import signUpImg from "../../../public/Resources/signUp.jpg";

const Register = () => {
  // const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, saveUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.photoURL).then(() => {
          // create user entry in the database
          // const userInfo = {
          //   name: data.name,
          //   email: data.email,
          //   photoURL: data.photoURL,
          // };
          // axiosPublic.post("/users", userInfo).then((res) => {
          // if (res.data.insertedId) {
          // console.log("user added to the database");
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
          saveUser(loggedUser.email, loggedUser.displayName);
          // }
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>SwiftInbox | Register</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 p-20">
            <h2 className="text-2xl font-black bg-gradient-to-r from-green-700 via-lime-600 to-lime-800 text-transparent bg-clip-text uppercase">
              Register first to join our global community
            </h2>
            <img className="w-full h-full object-contain" src={signUpImg} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-5 py-10">
            <h2 className="text-2xl font-black bg-gradient-to-r from-green-700 via-lime-600 to-purple-700 text-transparent bg-clip-text">
              Please register
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-gradient-to-r from-green-700 via-lime-700 to-lime-600 text-white"
                  type="submit"
                  value="REGISTER"
                />
              </div>
            </form>
            <p className="px-6">
              <small>
                Already have an account <Link to="/login">Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
