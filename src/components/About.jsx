import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className=" mt-8 py-20 bg-base-300 align-element" id="about">
      <SectionTitle text="about me" />
      <div className=" grid  md:grid-cols-3 items-center gap-16 mt-16">
        <img src={aboutSvg} className="w-full h-64 bg-base-100 rounded-xl" />
        <article className="md:col-span-2">
          <p className="text-accent-content  leading-loose">
            A highly motivated and detail-oriented junior Front-End Developer
            specializing in building dynamic, user-friendly web applications
            using React.js. Proficient in modern JavaScript frameworks and
            libraries, with a passion for clean code, responsive design, and
            delivering seamless user experiences. Skilled in translating complex
            UI/UX designs into efficient, reusable components while optimizing
            performance. Adept at collaborating in agile teams, continuously
            learning new technologies, and committed to maintaining the highest
            standards of front-end development.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
