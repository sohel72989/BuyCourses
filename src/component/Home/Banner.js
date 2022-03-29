import React from "react";
import Typewriter from "typewriter-effect";
import { NavLink } from "react-bootstrap";
import Header from "../Shared/Header";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner text-light">
      <div className="dark-overly">
        <Header />
        <div className="text-position">
          <div className="w-100">
            <h4 className="title-des header-text">
              <Typewriter
                options={{
                  strings: [" START LEARNING TODAY."],
                  autoStart: true,
                  loop: true,
                }}
              />
             
            </h4>
            <h1 className="title-font">
              Explore Interests And <br />
              Career With Courses
            </h1>

            <NavLink to={`/home`}>
              <button className="btn btn-col"> FIND COURSES</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
