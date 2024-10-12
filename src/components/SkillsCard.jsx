import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span className="h-16 w-16">{icon}</span>
      <h4 className="mt-6 font-bold text-lg md:text-xl">{title}</h4>
      <p className="mt-2 text-accent-content">{text}</p>
    </article>
  );
};

export default SkillsCard;
