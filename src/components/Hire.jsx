import React from "react";
import aboutSvg from "../assets/contact_us.svg";
import SectionTitle from "./SectionTitle";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const Hire = () => {
  return (
    <section className="mt-8 py-20 bg-base-100 align-element" id="about">
      <SectionTitle text="contact me" />
      <div className=" grid  md:grid-cols-3 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64  rounded-xl " />
        <article className="md:col-span-2">
          <div className="flex gap-x-4 justify-center items-center mt-8 ">
            <a
              href="https://github.com/ma7madAshraf"
              target="_blank"
              aria-label="github account"
            >
              <FaGithubSquare className="h-16 w-16 hover:translate-y-1 hover:text-slate-500 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadashrafezzat/"
              target="_blank"
              aria-label="linkedin account"
            >
              <FaLinkedin className="h-16 w-16  hover:translate-y-1 hover:text-slate-500 duration-300" />
            </a>
            <a
              href="mailto:ma7mad.ashraf@gmail.com"
              target="_blank"
              aria-label="send mail"
            >
              <IoIosMail className="h-20 w-20  hover:translate-y-1 hover:text-slate-500 duration-300" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Hire;
