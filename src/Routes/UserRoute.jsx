import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import CustomSpinner from "../Components/CustomSpinner";

// eslint-disable-next-line react/prop-types
const UserRoute = ( {children}) => {
    const { roleLoading, userData } = useContext(AuthContext);

    const location = useLocation();
    if (roleLoading) {
        return (
          <>
            <Particlesanimation2></Particlesanimation2>
            <CustomSpinner />
          </>
        );
      } else if (userData?.role === "user") {
        return (
          <>
            <Particlesanimation2></Particlesanimation2>
            {children}
          </>
        );
      }
      return (
        <Navigate state={location.pathname} to="/dashboard/profile"></Navigate>
      );
};

export default UserRoute;