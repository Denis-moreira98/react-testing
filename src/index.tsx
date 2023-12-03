import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Tasks from "./components/Tasks";
//import App from "./App";

const root = ReactDOM.createRoot(
   document.getElementById("root") as HTMLElement
);
root.render(
   <React.StrictMode>
      <Tasks />
   </React.StrictMode>
);
