import EmailBox from "./Components/EmailBox";
import Inbox from "./Page/Inbox";
function App() {
  return (
    <>
      {" "}
      <EmailBox></EmailBox>
      <div className="max-w-screen-xl mx-auto">
        <hr />
      </div>
      <Inbox></Inbox>
    </>
  );
}

export default App;
