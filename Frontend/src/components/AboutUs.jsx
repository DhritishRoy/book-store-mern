import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto mt-15">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(../../public/Bookcover.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">BookNook</h1>
              <p className="mb-5">
                Welcome to BookNook, your one-stop destination for discovering
                the world of books. We believe that reading opens doors to new
                ideas, adventures, and experiences, which is why we are
                dedicated to offering a diverse collection of books for every
                taste and interest. Join our community of readers and embark on
                your next literary journey with us.
              </p>
              <Link to="/">
                <button className="btn btn-primary text-white rounded-md px-3 py-1 hover:bg-blue-600 duration-200">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
