import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import loginImg from "../../../public/Resources/login.png";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import SharedAuth from "../SharedAuth/SharedAuth";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import EmailBoxAnimation from "../../Components/Animation/EmailBoxAnimation ";

const Login = () => {
  const { signIn, loginGoogle, loginGithub, checkUser, saveUser } =
    useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(() => {
        toast.success("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleGoogleLogIn = () => {
    loginGoogle().then((result) => {
      const loggedInUser = result.user;

      const userExists = checkUser(loggedInUser.email);

      if (userExists) {
        navigate(from, { replace: true });
        toast.success("You Are Successfully Logged In");
      } else {
        saveUser(loggedInUser.email, loggedInUser.displayName);
      }
      // const saveUser = {
      //   name: loggedInUser.displayName,
      //   email: loggedInUser.email,
      //   photoURL: loggedInUser.photoURL,
      // };
      // axiosPublic.post("/users", saveUser);
      toast.success("You Are Successfully Logged In");
      navigate(from, { replace: true });
    });
  };

  const handleGithubLogin = () =>
    loginGithub()
      .then((res) => {
        const loggedInUser = res.user;

        const userExists = checkUser(loggedInUser.email);

        if (userExists) {
          navigate(location?.state ? location.state : "/");
          toast.success("You Are Successfuly Logged In");
        } else {
          saveUser(loggedInUser.email, loggedInUser.displayName);
        }
        // const saveUser = {
        //   name: loggedInUser.displayName,
        //   email: loggedInUser.email,
        //   photoURL: loggedInUser.photoURL,
        // };
        // axiosPublic.post("/users", saveUser);

        toast.success("You Are Successfuly Logged In");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => console.log(err));

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Helmet>
        <title>SwiftInbox | Login</title>
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <EmailBoxAnimation></EmailBoxAnimation>
        <div className="hero flex flex-col lg:flex-row min-h-screen">
          <div className="hero-content px-16 flex-1 flex-col md:flex-row-reverse">
            <img src={loginImg} alt="Login" />
          </div>
          <div className="card flex-1 max-w-sm shadow-2xl bg-base-100 p-10">
            <h2 className="text-2xl font-black bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-transparent bg-clip-text">
              Login with
            </h2>
            <form onSubmit={handleLogin} className="card-body">
              <div className="mx-auto font-semibold text-center w-full border-black-900 rounded-lg">
                <button
                  onClick={handleGoogleLogIn}
                  className="p-3 border font-bold w-full rounded-lg border-black flex justify-center items-center gap-3"
                >
                  <FcGoogle></FcGoogle>
                  <span className="hover:text-blue-500">Google</span>
                </button>
              </div>
              <div className="mx-auto font-semibold text-center w-full rounded-lg">
                <button
                  onClick={handleGithubLogin}
                  className="p-3 border font-bold w-full rounded-lg border-black flex justify-center items-center gap-3"
                >
                  <FaGithub></FaGithub>
                  <span className="hover:text-blue-800">Github</span>
                </button>
              </div>
              <h2 className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-transparent bg-clip-text text-center  py-2 my-3 border-b border-t">
                Or
              </h2>
              <h2 className="text-sm font-bold">
                exisiting email and password
              </h2>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="enter your email"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-full"
                  />
                  <span
                    onClick={handlePasswordVisibility}
                    className="absolute -ml-7 mt-4"
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="p-3 rounded-lg bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white font-black hover:bg-gradient-to-l">
                  Login
                </button>
              </div>
            </form>
            <div>
              {errorMessage && (
                <p className="text-center font-bold text-sm text-red-600 mb-5 px-4">
                  ERROR: {errorMessage}
                </p>
              )}
            </div>
            <p className="text-lime-500 font-bold text-center text-sm mb-5 px-4">
              Not a registered user?
              <Link to="/register"> register first </Link>
            </p>
          </div>
        </div>
      </motion.div>

      <div className="bg-blue-800/15 p-3">
        <SharedAuth />
      </div>
    </>
  );
};

export default Login;
