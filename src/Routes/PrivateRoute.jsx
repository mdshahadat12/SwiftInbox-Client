import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import CustomSpinner from "../Components/CustomSpinner";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <>
        <Particlesanimation2></Particlesanimation2>
        <CustomSpinner />
      </>
    );
  } else if (user) {
    return (
      <>
        <Particlesanimation2></Particlesanimation2>
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
