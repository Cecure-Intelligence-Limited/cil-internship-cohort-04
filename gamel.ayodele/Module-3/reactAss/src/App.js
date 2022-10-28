import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./component/Home";
import AddInfo from "./component/AddInfo";
import UpdateInfo from "./component/UpdateInfo";
import Footer from "./component/Footer";
import About from "./component/About";
import { InfoProvider } from "./context/InfoContext";

function App() {
  return (
    <InfoProvider>
      <Router basename={window.location.pathname || ""}>
        <div>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddInfo />}></Route>
            <Route path="/update" element={<UpdateInfo />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    </InfoProvider>
  );
}

export default App;
