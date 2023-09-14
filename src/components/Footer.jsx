import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./Icon";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center text-center py-8">
      <span className="flex items-center gap-4 justify-center">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <YoutubeIcon />
      </span>
      <ul className="flex items-center gap-4 justify-center font-bold py-3">
        <li>Conditions of Use</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </ul>
      <p> © 2021 MovieCompass by Ojoachele Onuh </p>
    </footer>
  );
};

export default Footer;
