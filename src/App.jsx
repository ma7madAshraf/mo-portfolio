import React from "react";
import {
  Navbar,
  Hero,
  Hire,
  Skills,
  About,
  Projects,
  Courses,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Courses />
      <Projects />
      <Hire />
      <Footer />
    </>
  );
};

export default App;
