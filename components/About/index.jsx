import Image from "next/image";
import React from "react";
import "./about.scss";
import Title from "../Commons/Title";

const About = () => {
  return (
    <section id="aboutUs">
      <Title
        backgroundImage="bg-bg-about"
        blue={true}
        className="flex justify-start"
      >
        スポカレについて
      </Title>
      <div className="flex flex-1 lg:min-h-[900px] overflow-hidden">
        <Image
          src="/images/phone.png"
          alt="phone"
          width={1000}
          height={100}
          className="absolute right-0 bottom-0 z-[0]"
        />
        <div className="flex flex-col justify-center p-20 w-[50vw]">
          <h2 className="text-3xl font-bold">
            国内外スポーツの観戦情報を集約！
          </h2>
          <p className="mt-5 z-10 text-2xl">
            <span>掲載競技数は約100競技。</span>
            <br />
            <span>
              国内外のプロ・アマチュアスポーツを問わず1,500大会、50,000試合分の試合観戦情報を網羅しています。
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
