import React from "react";
import { NavLink } from "react-router-dom";
import bg from "../../components/blogbg.jpg"

function Menu() {
  return (
    <div>
      <div>
        <div className="B-navbar-container">
          <NavLink to="/Blog/blog" className="b-navbar-text">
            Blogs
          </NavLink>
          <NavLink to="/Blog/review" className="b-navbar-text">
            Reviews
          </NavLink>
          <NavLink to="/Blog/story" className="b-navbar-text">
            Stories
          </NavLink>

          <NavLink to="/Blog/shareYourStory" className="b-navbar-text">
            Share
          </NavLink>
          <NavLink to="/Blog" className="b-navbar-text navbar-b-back">
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Menu;
