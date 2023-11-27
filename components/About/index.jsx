import Image from "next/image";
import React from "react";
import "./about.scss";

const About = () => {
  return (
    <div className="w-full h-screen relative intro">
      <div className="flex flex-1 lg:min-h-[900px]">
        <Image
          src="/images/phone.png"
          alt="phone"
          width={1000}
          height={100}
          className="absolute right-0 z-[0]"
        />
        <div className="flex flex-col justify-center p-20 w-[50vw]">
          <h2 className="text-4xl font-bold">
            国内外スポーツの観戦情報を集約！
          </h2>
          <p className="mt-5 z-10">
            <span>掲載競技数は約100競技。</span>
            <br />
            <span>
              国内外のプロ・アマチュアスポーツを問わず1,500大会、50,000試合分の試合観戦情報を網羅しています。
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
