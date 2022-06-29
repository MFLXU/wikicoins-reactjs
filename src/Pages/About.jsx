import React from "react";
import aboutImg from '../Images/about.svg'
const About = () => {
  return (
    <section className="mt-16 min-h-[81vh] flex justify-center items-center">
      <div className="container ">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-4 bg-base-200 rounded-sm">
            <h1 className="text-4xl font-extrabold link-primary mb-2">
              WIKICOINS
            </h1>
            <p className="mb-4">
              Small front-end ReactJS project made by{" "}
              <a className="link-primary" href="https://github.com/MFLXU" target='_blank'>
                Louaye Kazar
              </a>
              .
            </p>
            <h2 className="text-xl link-primary mb-2">Technologies Used :</h2>
            <ul className="ml-4">
              <li>ReactJS</li>
              <li>Tailwind CSS</li>
              <li>DaisyUI</li>
              <li>CoinGecko API</li>
            </ul>
          </div>
          <div>
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
