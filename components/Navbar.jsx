import { NAV_LINKS } from "@/constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Button from "./Commons/Button";
import Rounded from "./Commons/RoundedButton";
import Magnetic from "./Commons/Magnetic";
import styles from "./style.module.scss";
import { useRef, useState, useEffect, useLayoutEffect } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <nav className="flexBetween max-container padding-container gap-5 absolute z-30 py-5 inset-x-0 top-0">
        <Link href="/">
          <Image
            src="images/logo_w.svg"
            alt="logo"
            width={210}
            height={40}
            style={{ width: 210, height: 40 }}
          />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="無料ダウンロード"
            icon="/images/downloads.png"
            variant="btn_dark_green"
          />
        </div>

        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        />
      </nav>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button} z-10`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            } z-11`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
};

export default Navbar;
