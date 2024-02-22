import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../../../public/Resources/register.jpg";
import SharedAuth from "../SharedAuth/SharedAuth";
import toast from "react-hot-toast";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile, saveUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        updateUserProfile(data.name, data.photoURL).then(() => {
          reset();
          toast.success("Registration Successful");
          navigate("/");
          saveUser(loggedUser.email, loggedUser.displayName);
          // }
        });
      })
      .catch((error) => console.log(error));
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Helmet>
        <title>SwiftInbox | Register</title>
      </Helmet>

      <div className="hero flex flex-col lg:flex-row-reverse min-h-screen">
        <div className="hero-content p-16 flex-1 flex-col md:flex-row-reverse">
          <img src={signUpImg} className="w-full" alt="Register" />
        </div>
        <div className="card flex-1 max-w-sm shadow-2xl bg-base-100 p-10">
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
                {...register("photoURL", { required: false })}
                placeholder="Photo URL"
                className="input input-bordered"
              />
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
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                <span
                  onClick={handlePasswordVisibility}
                  className="absolute -ml-7 mt-4"
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </span>
              </div>
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
          <p className="px-6 text-purple-800">
            <small>
              Already have an account <Link to="/login">Login</Link>
            </small>
          </p>
        </div>
      </div>
      <div>
        <SharedAuth />
      </div>
    </>
  );
};

export default Register;
