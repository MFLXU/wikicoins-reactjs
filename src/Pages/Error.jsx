import React from "react";
import errorImg from "../Images/notfound.svg";
const Error = () => {
  return (
    <div className=" mt-16 flex justify-center items-center h-[80vh]">
      <div className="container flex justify-center items-center">
        <img src={errorImg} alt="" />
      </div>
    </div>
  );
};

export default Error;
