import React from "react";
import Home from "./home/home";
import { Routes, Route } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      {/* <Home />
      <Course /> */}
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
