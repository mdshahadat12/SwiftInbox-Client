import { Helmet } from "react-helmet";
import EmailBox from "./Components/EmailBox";
import Inbox from "./Page/Inbox";
function App() {
  return (
    <>
      <Helmet>
        <title>SwiftInbox | Inbox</title>
      </Helmet>{" "}
      <EmailBox></EmailBox>
      <div className="max-w-screen-xl mx-auto">
        <hr />
      </div>
      <Inbox></Inbox>
    </>
  );
}

export default App;
