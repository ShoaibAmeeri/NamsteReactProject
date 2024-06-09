import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

//  ReactDOM.createRoot(document.getElementById("root")).render(
//   React.createElement("h1", { id: "heading" }, "this is react 🚀")
// );

const heading = <h1 className="head">hey this is react using jsx</h1>;
const Title = () => <h1> <b> this is title Functional Conponent </b> </h1>
const Heading = () => {
return(
  <div className="container">
   <Title />
  <h1>Hello this is React Functional Conponent</h1>
  </div>
)
}
ReactDOM.createRoot(document.getElementById("root")).render(<Heading />);
