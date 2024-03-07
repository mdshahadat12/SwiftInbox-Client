import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";
import CustomSpinner from "../Components/CustomSpinner";
import ParticlesAnimation from "../Components/Animation/ParticlesAnimation";

// eslint-disable-next-line react/prop-types
const UserRoute = ( {children}) => {
    const { roleLoading, userData } = useContext(AuthContext);

    const location = useLocation();
    if (roleLoading) {
        return (
          <>
            <ParticlesAnimation></ParticlesAnimation>
            <CustomSpinner />
          </>
        );
      } else if (userData?.role === "user") {
        return (
          <>
            <ParticlesAnimation></ParticlesAnimation>
            {children}
          </>
        );
      }
      return (
        <Navigate state={location.pathname} to="/dashboard/profile"></Navigate>
      );
};

export default UserRoute;