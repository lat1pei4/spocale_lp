import React from "react";
import "./achievement.scss";
import Image from "next/image";
import Title from "../Commons/Title";

function Achievement() {
  return (
    <section id="achievements">
      <Title backgroundImage="bg-bg-achieve">実績</Title>
      <div className="w-full h-[90dvh] bg-blue flex justify-center items-center ">
        <div className="achievement__container ">
          <div className="item i1 flex justify-center items-center p-2">
            <Image
              src="/images/acheivement_4.svg"
              width={350}
              height={100}
              alt="acheivement"
            />
          </div>
          <div className="item i2 flex justify-center items-center p-2">
            <Image
              src="/images/acheivement_5.svg"
              alt="acheivement"
              width={250}
              height={500}
            />
          </div>
          <div className="item i3 flex justify-center items-center p-2">
            <Image
              src="/images/acheivement_1.svg"
              alt="acheivement"
              width={300}
              height={500}
            />
          </div>
          <div className="item i4 flex justify-center items-center p-2">
            <Image
              src="/images/acheivement_3.svg"
              alt="acheivement"
              width={250}
              height={500}
            />
          </div>
          <div className="item i5 flex justify-center items-center p-2">
            <Image
              src="/images/acheivement_2.svg"
              alt="acheivement"
              width={350}
              height={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
