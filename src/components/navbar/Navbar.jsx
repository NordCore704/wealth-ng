import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import MobileNavbar from "./MobileNavbar";
import gsap, { Power3 } from "gsap";
import { Inter, Poppins, Archivo, Alatsi, Alata } from "next/font/google";
import { logo } from "@/exports/images";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const archivo = Archivo({
  subsets: ["latin"],
});
const alatsi = Alatsi({
  subsets: ["latin"],
  weight: "400",
});

const alata = Alata({
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: "500",
});

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleNav = () => {
    setToggle((prev) => !prev);
  };
  const router = useRouter();
  const currentRoute = router.pathname;

  const navRef = useRef();
  const logoRef = useRef();
  const listRefOne = useRef();
  let timeline = gsap.timeline();
  useEffect(() => {
    timeline
      .to(navRef.current, {
        visibility: "visible",
        duration: 0.5,
        ease: "ease-in",
      })
      .to(logoRef.current, {
        y: 0,
        opacity: 1,
        ease: "ease-in",
        duration: 1,
      })
      .to(listRefOne.current, {
        y: 0,
        opacity: 1,
        ease: "ease-in",
        transition: Power3.easeInOut,
        duration: 0.7,
      });
  });

  useEffect(() => {
    // Disable scroll when navbar is open
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Close navbar when screen width becomes larger than 640px (if navbar was left open initially)
    const handleResize = () => {
      if (window.innerWidth > 640 && !toggle) {
        setToggle(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [toggle]);

  return (
    <header
      className={`header overflow-hidden bg-scheme-ash-blue text-scheme-white border-gray-700 ${
        currentRoute === "/contact" ? "border-none" : ""
      }
      ${
        currentRoute === "/register" ? "border-none" : ""
      }  bg-transparent py-2`}
      ref={navRef}
    >
      <nav className="nav flex justify-between items-center h-12 p-4">
        <div
          className=" py-3 md:py-2 flex justify-center items-center h-[64px] opacity-0 sm:ml- lg:ml-10 translate-y-4"
          ref={logoRef}
        >
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-28" />
          </Link>
        </div>
        <div className="details--div sm:mr-4 lg:mr-10 flex items-center justify-between gap-10 lg:gap-20">
          {toggle ? (
            <RxHamburgerMenu
              onClick={toggleNav}
              className="hamburger flex cursor-pointer md:hidden lg:hidden transition-opacity duration-300 z-40 text-scheme-black text-xl hover:text-scheme-yellow"
            />
          ) : (
            <div className="border p-1 border-scheme-yellow rounded-full hamburger flex cursor-pointer z-40 md:hidden lg:hidden sm:mr-4">
              <AiOutlineClose
                onClick={toggleNav}
                className="transition-opacity duration-300 text-xl text-scheme-black hover:text-scheme-yellow"
                alt="hamburger"
              />
            </div>
          )}
          <ul
            className={`gap-3 lg:gap-5 hidden list-none lg:flex md:flex font-semibold translate-y-4 opacity-0 text-scheme-black`}
            ref={listRefOne}
          >
            <li className="hover:text-scheme-yellow">
              <Link href={"/"} className="">
                Timeline
              </Link>
            </li>
            <li className="hover:text-scheme-yellow">
              <Link href={"/"} className={currentRoute === "/" ? "active" : ""}>
                Overview
              </Link>
            </li>
            <li className="hover:text-scheme-yellow">
              <Link href={"/"}>FAQs</Link>
            </li>
            <li className="hover:text-scheme-yellow">
              <Link
                href={"/contact"}
                className={currentRoute === "/contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>

          <Link
            href={"/register"}
            className={`p-1.5 w-28 items-center  justify-center rounded-sm  hidden md:flex font-semibold text-scheme-black hover:text-scheme-yellow`}
          >
            Register
          </Link>
        </div>

        {!toggle ? (
          <MobileNavbar alata={alata} setToggle={setToggle} toggle={toggle} />
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
