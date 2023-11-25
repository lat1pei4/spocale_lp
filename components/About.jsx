import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="flex flex-1 lg:min-h-[900px]">
        <Image
          src="/image/phone.png"
          alt="phone"
          width={1000}
          height={100}
          className="absolute right-0"
        />
      </div>
    </div>
  );
};

export default About;
