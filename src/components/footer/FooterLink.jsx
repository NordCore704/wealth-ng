import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const FooterLink = () => {
  return (
    <div className="w-full flex flex-col gap-8 py-5 border-b">
      <div className="flex gap-8 self-start text-xl">
        <a href="" className="hover:text-scheme-blue">
          <FaFacebook />
        </a>
        <a href="" className="hover:text-scheme-blue">
          <FaTwitter />
        </a>
        <a href="" className="hover:text-scheme-blue">
          <FaInstagram />
        </a>
        <a href="" className="hover:text-scheme-blue">
          <FaWhatsapp />
        </a>
      </div>
      <div className="flex flex-col md:flex-row gap-8 self-start">
        <Link href={'/'} className="self-start hover:text-scheme-blue">About Us</Link>
        <Link href={'/'} className="self-start hover:text-scheme-blue">FAQs</Link>
        <Link href={'/'} className="self-start hover:text-scheme-blue">Contact Us</Link>
        <Link href={'/'} className="self-start hover:text-scheme-blue">Terms & Conditions</Link>
        <Link href={'/'} className="self-start hover:text-scheme-blue">Privacy Policy</Link>
      </div>
    </div>
  );
};

export default FooterLink;
