import React from "react";
import heroImg from "../assets/hello.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Hero = () => {
  return (
    <div className="bg-secondary py-24 text-neutral-content">
      <div className="align-element grid md:grid-cols-3 items-center gap-8">
        <article className="md:col-span-2">
          <div className="animation-container text-6xl md:text-8xl font-bold tracking-wider ">
            <p>Hello </p>
            <div className="flex items-center text-3xl md:text-5xl">
              {" "}
              I'm{" "}
              <section className="animation text-2xl md:text-3xl leading-5 sm:text-2xl w-fit text-nowrap ">
                <div className="first ">
                  <div>Mohamed Ashraf</div>
                </div>
                <div className="second text-lg md:text-2xl">
                  <div>FrontEnd Developer</div>
                </div>
              </section>{" "}
            </div>
          </div>
          <div className="w-fit mt-6 ">
            <p className="cursor typewriter-animation capitalize  tracking-wide text-lg md:text-xl">
              {" "}
              turning ideas into interactive reality
            </p>
          </div>

          <div className="flex gap-x-4 items-center ">
            <a href="https://github.com/ma7madAshraf" target="_blank">
              <FaGithubSquare className="h-8 w-8 md:h-12 md:w-12 hover:translate-y-1 hover:text-slate-500 duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammadashrafezzat/"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 md:h-12 md:w-12  hover:translate-y-1 hover:text-slate-500 duration-300" />
            </a>
            <a
              href="mailto:ma7mad.ashraf@gmail.com"
              target="_blank"
              aria-label="send mail"
            >
              <IoIosMail className="h-12 w-12 md:h-16 md:w-16  hover:translate-y-1 hover:text-slate-500 duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} alt="hero" className=" h-80 lg:h-96 " />
        </article>
      </div>
    </div>
  );
};

export default Hero;
