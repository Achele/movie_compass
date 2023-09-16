import { useEffect, useState } from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./Icon";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <footer className="flex flex-col justify-center text-center py-16">
      <span className="flex items-center gap-4 justify-center">
        <FacebookIcon className=" cursor-pointer" />
        <InstagramIcon className=" cursor-pointer" />
        <TwitterIcon className=" cursor-pointer" />
        <YoutubeIcon className=" cursor-pointer" />
      </span>
      <ul className="lg:flex items-center gap-4 justify-center font-bold py-8  >                                                                                                                                                                                                                                   ">
        <li className="hover:hover:text-red-700 cursor-pointer">
          Conditions of Use
        </li>
        <li className="hover:hover:text-red-700 cursor-pointer">
          Privacy & Policy
        </li>
        <li className="hover:hover:text-red-700 cursor-pointer">Press Room</li>
      </ul>
      <p className="py-8 text-xs">
        {" "}
        &copy; {currentYear} MovieCompass by Ojoachele Onuh{" "}
      </p>
    </footer>
  );
};

export default Footer;
