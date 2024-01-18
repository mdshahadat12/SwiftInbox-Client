import { PulseSpinner, PushSpinner } from "react-spinners-kit";
import PropTypes from "prop-types";

const CustomSpinner = ({ small }) => {
  return (
    <div className="container mx-auto mt-32 text-center px-2 flex justify-center h-screen">
      {small ? (
        <PulseSpinner size={20} color="#EBEE09"></PulseSpinner>
      ) : (
        <PushSpinner size={200} color="#1194DE" loading={true} />
      )}
    </div>
  );
};

CustomSpinner.propTypes = {
  small: PropTypes.bool,
};

export default CustomSpinner;
