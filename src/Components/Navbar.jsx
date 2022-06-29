import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-base-100 fixed w-full top-0 z-10">
      <div className="container">
        <div class="navbar bg-base-100">
          <div class="navbar-start">
            <Link
              to="/"
              class="link-primary normal-case text-3xl font-extrabold"
            >
              WIKICOINS
            </Link>
          </div>

          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
