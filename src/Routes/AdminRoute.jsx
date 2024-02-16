import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CustomSpinner from "../Components/CustomSpinner";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";

const AdminRoute = ({ children }) => {
  const { roleLoading, userData } = useContext(AuthContext);

  const location = useLocation();

  if (roleLoading) {
    return (
      <>
        <Particlesanimation2></Particlesanimation2>
        <CustomSpinner />
      </>
    );
  } else if (userData?.role === "admin") {
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

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
