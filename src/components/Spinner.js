import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="flex justify-center">
        <p className="text-2xl text-white">Loading...</p>
      </div>
    </>
  );
};
export default Spinner
