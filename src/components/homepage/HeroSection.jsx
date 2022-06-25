import React from "react";
import GreenText from "../reusable/GreenText";

const HeroSection = () => {
  return (
    <section>
      <div className="flex-between">
        <div className="text-5xl font-extrabold px-6 py-56">
          <GreenText>
            Decentralised Student <br /> Information Database
          </GreenText>
          
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
