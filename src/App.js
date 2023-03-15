/** @format */
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Meme from "./Components/Meme";
// import WindowTracker from "./WindowTracker";
function App() {
// const [show, setShow] = useState(true)

//   const toggle = () => {
//   setShow(prevShow => !prevShow)
// }
  return (
    <div>
      <Header />
      <Meme />

      {/* <div className="container">
        <button onClick={toggle}>Toggle WindowTracker</button>
        { show && <WindowTracker />}
      </div> */}
    </div>
  );
}

export default App;
