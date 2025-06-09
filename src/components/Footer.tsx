import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin, CiFacebook } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-[#1F2A44] w-full h-20 text-white flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0 sm:space-x-4 p-7">
      <p>© 2025 LMS. All rights reserved.</p>
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <li>About</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex space-x-4 align-middle items-center">
        <FaXTwitter size={25} />
        <CiLinkedin size={30} />
        <CiFacebook size={30} />
      </div>
    </div>
  );
};

export default Footer;
