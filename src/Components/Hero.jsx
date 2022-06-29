import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../Images/hero.svg";
const Hero = () => {
  return (
    <section className=" bg-base-100 mt-16">
      <div className="container py-16">
        <div class="hero min-h-[30rem]">
          <div class="hero-content grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <h1 class=" text-6xl md:text-7xl font-extrabold">WIKICOINS</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>

              <div className="flex gap-4">
                <Link to="/about " className="btn btn-ghost">
                  About us
                </Link>
                <a className="btn btn-primary w-fit" href="#get-started">
                  Get Started
                </a>
              </div>
            </div>
            <div>
              <img src={heroImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
