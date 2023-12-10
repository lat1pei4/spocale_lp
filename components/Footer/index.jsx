"use client";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";

const Footer = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-200, -300]);

  return (
    <footer className=" w-[100dvw] z-[-1]">
      <div className="padding-container  flex w-full flex-col gap-14 h-[80dvh] bg-[#67bff7]">
        <div className="flex flex-col items-start justify-center gap-[10%] ">
          <Link href="/" className="mb-2 pl-2">
            <Image
              src="images/logo_white.svg"
              alt="logo"
              width={225}
              height={45}
            />
          </Link>
          <h2 className="pl-1.5 text-2xl font-bold text-white">
            無料で手に入れよう！
          </h2>
          <p className="pl-1.5 text-xl text-white">スポーツ観戦情報アプリ</p>
          <div className="flex p-0 m-0">
            <Image
              src="images/ios_qrcode.png"
              alt="appstore"
              width={120}
              height={40}
            />
            <Image
              src="images/ios_qrcode.png"
              alt="googleplay"
              width={120}
              height={40}
            />
          </div>
          <div className="flex flex-col flex-wrap pl-2 gap-2 sm:justify-between md:flex-1">
            <div className="flex flex-col gap-5">
              <FooterColumn>
                <ul className="regular-14 flex gap-4 text-white">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image src={link} alt="logo" width={24} height={24} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title}>
                <ul className="regular-14 flex flex-row gap-4 text-white">
                  {columns.links.map((link, i) => (
                    <Link href={columns.hrefs[i]} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
          </div>
        </div>
        <p className="regular-14 w-full text-left pl-2 text-white">
          COPYRIGHT @ SPOCALE 2023 All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export default Footer;
