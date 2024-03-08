import { Helmet } from "react-helmet";
import Inbox from "./Inbox";
import ParticlesAnimation from "../Components/Animation/ParticlesAnimation";

const Bookmarks = () => {
  const bookmarkPage = true;
  return (
    <div>
     <ParticlesAnimation></ParticlesAnimation>
      <Helmet>
        <title>SwiftInbox | Bookmarks</title>
      </Helmet>
      <Inbox bookmarkPage={bookmarkPage}></Inbox>
    </div>
  );
};

export default Bookmarks;
