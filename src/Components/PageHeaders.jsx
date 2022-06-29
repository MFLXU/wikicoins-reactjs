import React from "react";

const PageHeaders = (props) => {
  return (
    <section className="bg-base-100">
      <div className="container py-16 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="flex gap-4 flex-col ">
            <h2 className="text-4xl font-bold">{props.headtitle}</h2>
            <p>{props.desc}</p>
          </div>
          <div className="">
            <img src={props.img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHeaders;
