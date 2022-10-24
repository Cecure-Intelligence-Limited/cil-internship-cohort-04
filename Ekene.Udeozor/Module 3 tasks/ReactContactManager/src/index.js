import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Add from "./components/Add";
import Footer from "./components/Footer";
import About from "./components/About";
import contacts from "./components/contacts";
import "./index.css";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
