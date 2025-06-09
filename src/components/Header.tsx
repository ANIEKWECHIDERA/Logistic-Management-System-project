import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Button2 from "./shared/Button2";

const navLinks = ["About", "Features", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("About");
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50 w-full px-16">
      {/* Desktop Nav */}
      <nav className="hidden md:flex justify-between items-center p-7 w-full bg-white">
        <h3 className="font-bold text-xl text-[#FF6A00]">LOGO</h3>
        <ul className="flex space-x-10">
          {["About", "Features", "Contact"].map((link) => (
            <motion.li
              key={link}
              className={`relative cursor-pointer ${
                activeLink === link ? "text-blue-600" : ""
              }`}
              onClick={() => handleLinkClick(link)}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span>{link}</span>
              <motion.div
                className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600"
                initial={{ width: 0 }}
                animate={{ width: activeLink === link ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <Button2
            text="Sign up"
            classname="hover:bg-[#1E40AF] w-32 bg-[#2563EB]"
          />
          <Button2
            text="Log In"
            textColor="text-[#2563EB]"
            classname="hover:bg-[#1E40AF] w-32 bg-white border border-[#2563EB] text-[#2563EB] hover:text-white hover:border-white"
          />
        </div>
      </nav>

      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-7 bg-white">
        <h3 className="font-bold text-xl text-[#FF6A00]">LOGO</h3>
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          title="Open menu"
        >
          <HiMenuAlt3 size={28} />
        </button>
      </div>

      {/* Mobile Sidebar and Backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              className="fixed top-0 right-0 h-full bg-white w-[60%] p-6 flex flex-col space-y-6 z-50 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  title="Close menu"
                >
                  <HiX size={28} />
                </button>
              </div>
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li
                    key={link}
                    className="text-lg cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col space-y-4">
                <Button2 text="Sign up" classname="w-full bg-[#2563EB]" />
                <Button2
                  text="Log In"
                  classname="w-full bg-white border border-[#2563EB] text-[#2563EB] hover:text-white hover:bg-[#2563EB]"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
