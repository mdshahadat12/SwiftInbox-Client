import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CustomSpinner from "../Components/CustomSpinner";
import ParticlesAnimation from "../Components/Animation/ParticlesAnimation";

const AdminRoute = ({ children }) => {
  const { roleLoading, userData } = useContext(AuthContext);

  const location = useLocation();

  if (roleLoading) {
    return (
      <>
        <ParticlesAnimation></ParticlesAnimation>
        <CustomSpinner />
      </>
    );
  } else if (userData?.role === "admin") {
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

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
