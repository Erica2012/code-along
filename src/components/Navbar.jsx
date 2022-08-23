import React from "react";
import { NavLink } from "react-router-dom";
import NavItem from "./Navitem";

const links = [
  {
    label: "Home",
    to: "/",
  },

  {
    label: "Product",
    to: "/products",
  },

  {
    label: "TaskManager",
    to: "/task-manager",
  },

  {
    label: "About",
    to: "/about",
  },

  {
    label: "Contacts",
    to: "/contacts",
  },
];

const NavBar = () => {
  return (
    <div className="shadow-md py-5">
      <nav className="flex justify-between max-w-7xl mx-auto">
        <h3>PreMest</h3>
        <ul className="flex gap-5">
          {links.map((link, index) => (
            <NavItem key={index} label={link.label} to={link.to} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
