import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CustomSpinner from "../Components/CustomSpinner";
import ParticlesAnimation from "../Components/Animation/ParticlesAnimation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <>
       <ParticlesAnimation></ParticlesAnimation>
        <CustomSpinner />
      </>
    );
  } else if (user) {
    return (
      <>
        <ParticlesAnimation></ParticlesAnimation>
        {children}
      </>
    );
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
