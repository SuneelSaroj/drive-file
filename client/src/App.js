import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { usePopUpContext } from "./Context/PopupMessage";
import FileUploader from "./components/FileUploader";
// import NavBar from "./components/NavBar";
import "./components/NavBar.css";

function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Router>
        <Routes>
          <Route path="/fileUploader" element={<FileUploader />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
