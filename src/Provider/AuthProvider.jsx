/* eslint-disable react/prop-types */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../public/firebase/firebase.config";
import Loader from "../Components/Loader";
import { axiosSecure, baseUrl } from "../Components/useAxios";
// import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tempMail, setTempMail] = useState(null);
  const [userData, setUserData] = useState(null);

  const {
    isLoading,
    data: messages,
    refetch,
  } = Loader(`/messages?email=${tempMail}`, "userEmail");
  // const axiosPublic = useAxiosPublic();
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginGithub = () => {
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // checking if the user is already registered
  const checkUser = (email) => {
    if (userData?.email == email) {
      return true;
    } else {
      return false;
    }
  };

  // saving the user data to the database
  const saveUser = (email, name) => {
    const userData = {
      userEmail: email,
      displayName: name,
      tempMail: tempMail,
    };
    axiosSecure.post(`${baseUrl}/manage-user`, userData).then((res) => {
      console.log(res.data);
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setUser(currentUser);
        console.log("Current Active USER:", currentUser);
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };
        if (currentUser) {
          // get and set user data
          axiosSecure.get(`/get-user?${loggedUser?.email}`).then((res) => {
            setUserData(res.data);
          });

          // create token on login
          axiosSecure.post(`/jwt`, loggedUser).then((res) => {
            console.log(res.data);
          });
        } else {
          // logout user without token
          axiosSecure
            .post(`/logout`, loggedUser, { withCredentials: true })
            .then((res) => {
              console.log(res.data);
            });
        }
        // get and set token
        // if (currentUser) {
        //   const response = await axiosPublic.post("/jwt", {
        //     email: currentUser.email,
        //   });
        //   console.log(response.data.token);
        //   localStorage.setItem("access-token", response.data.token);
        // } else {
        //   localStorage.removeItem("access-token");
        // }
      } catch (error) {
        console.error("Error in AuthProvider useEffect:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    loginGoogle,
    loginGithub,
    updateUserProfile,
    logOut,
    refetch,
    isLoading,
    messages,
    tempMail,
    setTempMail,
    userData,
    checkUser,
    saveUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
