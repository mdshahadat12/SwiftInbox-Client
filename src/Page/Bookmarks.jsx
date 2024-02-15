import { Helmet } from "react-helmet";
import Particlesanimation2 from "../Components/Animation/Particlesanimation2";
import Inbox from "./Inbox";

const Bookmarks = () => {
  const bookmarkPage = true;
  return (
    <div>
      <Particlesanimation2></Particlesanimation2>
      <Helmet>
        <title>SwiftInbox | Bookmarks</title>
      </Helmet>
      <Inbox bookmarkPage={bookmarkPage}></Inbox>
    </div>
  );
};

export default Bookmarks;
