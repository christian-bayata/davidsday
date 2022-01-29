import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <section>
      <nav className="navbar navbar-light">
        <div className="container-fluid row">
          <div className="col col-sm-4">
            <NavLink to="/">
              <button className="btn" type="submit">
                <h2 className="cheers">Happy Birthday David </h2>
              </button>
            </NavLink>
          </div>
          <div className="col-sm-8">
            <NavLink to="/prayers">
              <button type="button" className="btn-left btn btn-light">
                My Prayers
              </button>
            </NavLink>
            <NavLink to="prophecies">
              <button type="button" className="btn-right btn btn-light">
                Prophecies
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
