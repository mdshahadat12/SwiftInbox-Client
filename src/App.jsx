import { Helmet } from "react-helmet";
import EmailBox from "./Components/EmailBox";
import Inbox from "./Page/Inbox";
import Faq from "./Page/Faq";
import WhyChooseUs from "./Page/WhyChooseUs";
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
      <div className="max-w-screen-xl mx-auto">
        <div className="max-w-screen-xl mx-auto">
        <hr />
      </div>
      <WhyChooseUs></WhyChooseUs>
      <hr />
      </div>
      <Faq></Faq>
    
    </>
  );
}

export default App;
