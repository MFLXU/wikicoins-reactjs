import React from "react";
import { Link } from "react-router-dom";
const Content = () => {
  return (
    <section className="py-16 px-4 md:px-0" id="get-started">
      <div className="container">
        <h2 className="text-center text-5xl font-bold mb-12">
          What Are You Looking For ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Card */}
          <div className="card card-body border hover:shadow-xl duration-300 gap-4 hover:scale-105">
            <h2 className="text-4xl font-bold">Real Time Ranking</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              pariatur.
            </p>
            <Link className="btn hover:btn-primary" to="/coins">
              Let's start
            </Link>
          </div>
          {/* Card */}
          <div className="card card-body border hover:shadow-xl duration-300 gap-4 hover:scale-105">
            <h2 className="text-4xl font-bold">Real Time Price</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              pariatur.
            </p>
            <Link className="btn hover:btn-primary" to="/coins">
              Let's start
            </Link>
          </div>
          {/* Card */}
          <div className="card card-body border hover:shadow-xl duration-300 gap-4 hover:scale-105">
            <h2 className="text-4xl font-bold">Coin's History</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa,
              pariatur.
            </p>
            <Link className="btn hover:btn-primary" to="/coins">
              Let's start
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
