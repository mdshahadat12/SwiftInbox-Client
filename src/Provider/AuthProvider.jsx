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
import { axiosSecure, baseUrl } from "../Components/useAxios";
import app from "../firebase/firebase.config";
import { useQuery } from "@tanstack/react-query";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tempMail, setTempMail] = useState(null);
  const [userData, setUserData] = useState(null);

  const {
    isLoading,
    refetch,
    data: messages,
  } = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      let data = []; // Declare data outside the if block

      if (localStorage.getItem("email")) {
        const response = await fetch(
          `${baseUrl}/messages?email=${localStorage.getItem("email")}`
        );
        data = await response.json();
      }

      return data;
    },
  });

  // const {
  //   isLoading,
  //   data: messages,
  //   refetch,
  // } = Loader(`/messages?email=${tempMail}`, "userEmail");

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

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setUser(currentUser);

        const userEmail = currentUser?.email || user?.email;
        const loggedUser = userEmail ? { email: userEmail } : null;

        if (currentUser) {
          // get and set user data
          axiosSecure
            .get(`/get-user?email=${currentUser?.email}`)
            .then((res) => {
              setUserData(res.data);
            });

          // create token on login
          axiosSecure.post(`/jwt`, loggedUser);
        } else {
          // logout user without token
          axiosSecure.post(`/logout`, loggedUser, { withCredentials: true });
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
    const intervalId = setInterval(() => {
      refetch(); // Call refetch every 10 seconds
    }, 7000);

    return () => {
      clearInterval(intervalId);
      unSubscribe();
    };
  }, [refetch, user?.email]);

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
      tempMail: localStorage.getItem("email"),
    };
    axiosSecure.post(`${baseUrl}/manage-user`, userData).then((res) => {
      setUserData(res.data);
    });
  };

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
