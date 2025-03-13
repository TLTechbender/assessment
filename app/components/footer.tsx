import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import logo from "../../public/Images/logo.png";
const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-[1301px] mx-auto my-4 py-3 border-t border-[#FFFFFF33]">
      <Image src={logo} alt="app logo" />
      <h3 className=" open-sans font-normal leading-[100%] text-[#8CA0B3] text-base">
        Copyright © 2024 Eagle AI
      </h3>
      <span className="flex  gap-4">
        <FaTelegramPlane className="text-blue-400" size={24} />
        <FaXTwitter className="text-blue-400" size={24} />
        <FaMedium className="text-blue-400" size={24} />
      </span>
    </div>
  );
};

export default Footer;
