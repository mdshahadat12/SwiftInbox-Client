import PropTypes from "prop-types";
import { useEffect } from "react";
import { axiosSecure } from "../../Components/useAxios";

const MessageLoader = ({ tempMail, setEmailData }) => {
  useEffect(() => {
    if (tempMail) {
      axiosSecure.get(`/messages?email=${tempMail}`).then((res) => {
        setEmailData(res.data);
      });
    }
  }, [setEmailData, tempMail]);
};

MessageLoader.propTypes = {
  tempMail: PropTypes.string,
  setEmailData: PropTypes.func,
};

export default MessageLoader;
