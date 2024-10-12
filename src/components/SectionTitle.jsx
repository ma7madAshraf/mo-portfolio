import React from "react";

const SectionTitle = ({ text }) => {
  return (
    <div className=" border-b border-neutral pb-5">
      <h2 className="text-3xl md:text-4xl text-neutral font-medium md:font-bold tracking-wider capitalize">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
