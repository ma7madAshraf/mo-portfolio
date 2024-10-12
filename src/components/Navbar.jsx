import React, { useState } from "react";
import { links } from "../data";
import ThemeController from "./ThemeController";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 align-element">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links.map((link) => {
              const { id, href, text } = link;
              return (
                <li
                  key={id}
                  className="capitalize text-lg tracking-wide hover:text-cyan-600 duration-300"
                >
                  <a href={href}> {text}</a>{" "}
                </li>
              );
            })}
          </ul>
        </div>
        <h2 className="text-3xl font-bold">
          Web<span className="text-cyan-600">Dev</span>
        </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <li
                key={id}
                className="capitalize text-lg tracking-wide hover:text-cyan-600 duration-300"
              >
                <a href={href}> {text}</a>{" "}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <ThemeController />
      </div>
    </div>
  );
};

export default Navbar;
