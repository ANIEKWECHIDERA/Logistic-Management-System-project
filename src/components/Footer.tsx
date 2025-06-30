import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#1F2A44] w-full text-white flex flex-col lg:flex-row items-center justify-between p-7 space-y-4 lg:space-y-0 lg:space-x-4">
      {/* Quick Links */}
      <ul className="flex sm:flex-row text-xs space-x-5 order-1 lg:order-2">
        <li>About</li>
        <li>Privacy </li>
        <li>Terms</li>
        <li>Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex space-x-4 items-center order-2 lg:order-3">
        <FaXTwitter size={25} />
        <CiLinkedin size={30} />
        <CiFacebook size={30} />
      </div>

      {/* © All rights reserved */}
      <p className="order-3 lg:order-1">© 2025 LMS. All rights reserved.</p>
    </div>
  );
};

export default Footer;
