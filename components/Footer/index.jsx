"use client";
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = ({ deviceType }) => {
  return (
    <section id="footer" className="w-full flex-col">
      <div className=" relative flex w-full  flex-col justify-between gap-32 overflow-hidden bg-[#284c68] px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 lg:max-h-[598px]">
        <div className=" flex w-full flex-1 flex-col items-start justify-center gap-4">
          <div className="flex flex-1 items-center justify-end">
            <Image
              src="/images/feat_01_phone.webp"
              alt="phone"
              width={430}
              height={670}
              className="top-[10%] right-[5%] lg:absolute"
            />
          </div>
          <h2 className="bold-40 lg:bold-64 lg:max-w-[320px] pt-10">
            <span className="relative  dot">無料</span>で手に入れよう！
          </h2>
          <p className="regular-18 sm:regular-24  text-gray-10">
            スポーツ観戦情報アプリ
          </p>
          <Image
            src="images/logo_w.svg"
            alt="logo"
            width={210}
            height={40}
            className="h-auto w-[125px] md:w-[150px] lg:w-[200px]"
          />
          <div className="flex w-full gap-3 whitespace-nowrap xl:flex-row">
            {deviceType === "Mobile" ? (
              <>
                <Link
                  href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwieoI7B4ZeDAxWZglYBHTvgAjIQFnoECBoQAQ&url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.spocale.android%26hl%3Dja%26gl%3DUS&usg=AOvVaw05wCXUdx7RsCE1B6HNQqD9&opi=89978449
"
                >
                  <Image
                    src="/images/playstore.webp"
                    alt="play store download qr code"
                    width="160"
                    height="50"
                  />
                </Link>
                <Link href="https://apps.apple.com/jp/app/%E3%82%B9%E3%83%9D%E3%82%AB%E3%83%AC/id1337649882">
                  <Image
                    src="/images/appstore.webp"
                    alt="app store download qr code"
                    width="150"
                    height="50"
                  />
                </Link>
              </>
            ) : (
              <>
                <Image
                  src="/images/an_qrcode.webp"
                  alt="play store download qr code"
                  width="150"
                  height="150"
                />
                <Image
                  src="/images/ios_qrcode.webp"
                  alt="app store download qr code"
                  width="150"
                  height="150"
                />
              </>
            )}
          </div>
          <div className="flex flex-col gap-5">
            <FooterColumn>
              <ul className="regular-14 flex gap-4 text-white">
                {SOCIALS.links.map((link, index) => (
                  <li key={link}>
                    <Link href={SOCIALS.urls[index]}>
                      <Image
                        src={link}
                        alt="logo"
                        width={24}
                        height={24}
                        style={{ width: "24px", height: "24px" }}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title}>
                <ul className="regular-14 flex flex-col sm:flex-row gap-4 text-white">
                  {columns.links.map((link, i) => (
                    <li key={link}>
                      <Link href={columns.hrefs[i]}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <p className="regular-14 w-full text-left pb-4 text-white">
              COPYRIGHT @ SPOCALE 2023 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
    // <footer className=" z-[-1]">
    //   <div className="padding-container  flex w-full flex-col gap-14 h-[110dvh] pt-[200px] bg-[#000]">
    //     <div className="flex flex-col items-start justify-center gap-[10%] ">
    //       <Link href="/" className="mb-2 pl-2">
    //         <Image
    //           src="images/logo_white.svg"
    //           alt="logo"
    //           width={225}
    //           height={45}
    //         />
    //       </Link>
    //       <h2 className="pl-1.5 text-2xl font-bold text-white">
    //         無料で手に入れよう！
    //       </h2>
    //       <p className="pl-1.5 text-xl text-white">スポーツ観戦情報アプリ</p>
    //       <div className="flex p-0 m-0">
    //         <Image
    //           src="images/ios_qrcode.png"
    //           alt="appstore"
    //           width={120}
    //           height={40}
    //         />
    //         <Image
    //           src="images/ios_qrcode.png"
    //           alt="googleplay"
    //           width={120}
    //           height={40}
    //         />
    //       </div>

    //   </div>
    // </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return <div className="flex flex-col gap-5">{children}</div>;
};

export default Footer;
