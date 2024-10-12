import React from "react";
import coursesSvg from "../assets/courses.svg";
import SectionTitle from "./SectionTitle";
const Courses = () => {
  return (
    <section className="mt-8 py-20 text-neutral align-element" id="about">
      <SectionTitle text="Courses" />
      <div className=" flex flex-col lg:flex-row-reverse lg:items-center gap-16">
        <img src={coursesSvg} className="w-full h-64 mt-12" />
        <article className="min-w-[50%]">
          <ul className="flex flex-col gap-y-8 py-12">
            <li className="card-body shadow-md rounded-2xl bg-base-200 hover:bg-base-300 hover:shadow-xl">
              <h3 className="font-semibold text-secondary text-lg md:text-xl ">
                Front-End Developer roadmap{" "}
              </h3>
              <h5 className="text-base md:text-lg">Osama Elzero</h5>
              <h6 className="text-sm md:text-base text-accent-content ">
                elzero.org
              </h6>
            </li>{" "}
            <li className="card-body shadow-md rounded-2xl bg-base-200 hover:bg-base-300 hover:shadow-xl">
              <h3 className="font-semibold text-secondary text-lg md:text-xl ">
                The Complete JavaScript Course 2024: From Zero to Expert!{" "}
              </h3>
              <h5 className="text-base md:text-lg">Jonas Schmedtmann</h5>
              <h6 className="text-sm md:text-base text-accent-content">
                udemy.com
              </h6>
            </li>
            <li className="card-body shadow-md rounded-2xl bg-base-200 hover:bg-base-300 hover:shadow-xl">
              <h3 className="font-semibold text-secondary text-lg md:text-xl ">
                Complete React, Next.js & TypeScript Projects Course 2024
              </h3>
              <h5 className="text-base md:text-lg">John Smilga</h5>
              <h6 className="text-sm md:text-base text-accent-content">
                udemy.com
              </h6>
            </li>
            <li className="card-body shadow-md rounded-2xl bg-base-200 hover:bg-base-300 hover:shadow-xl">
              <h3 className="font-semibold text-secondary text-lg md:text-xl ">
                Web Development Challenger
              </h3>
              <h6 className="text-sm md:text-base text-accent-content">
                udacity.com
              </h6>
            </li>
            <li className="card-body shadow-md rounded-2xl bg-base-200 hover:bg-base-300 hover:shadow-xl">
              <h3 className="font-semibold text-secondary text-lg md:text-xl ">
                Professional Front-End Web Development{" "}
              </h3>
              <h6 className="text-sm md:text-base text-accent-content">
                udacity.com
              </h6>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Courses;
