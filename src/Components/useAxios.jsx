import axios from "axios";
import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
// export const baseUrl = "https://swift-inbox-server-mu.vercel.app";
export const baseUrl = "http://localhost:5000";
export const axiosSecure = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

const useAxios = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.log(error);
            });
        }
        return Promise.reject(error);
      }
    );
  });
  return axiosSecure;
};

export default useAxios;
