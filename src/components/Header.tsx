import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Button2 from "./shared/Button2";

const navLinks = ["About", "Features", "Contact"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("About");
  const sidebarRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // 60% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveLink(id.charAt(0).toUpperCase() + id.slice(1));
          }
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className=" z-50 w-full px-4 sm:px-8 md:px-16 sticky top-0 bg-white">
      {/* Desktop Navigation */}
      <nav
        className="hidden md:flex justify-between items-center py-6 w-full"
        aria-label="Primary navigation"
      >
        <a
          href="/"
          className="text-[#FF6A00] font-bold text-xl"
          aria-label="Homepage"
        >
          LOGO
        </a>

        <ul className="flex space-x-10">
          {navLinks.map((link) => (
            <motion.li
              key={link}
              className={`relative cursor-pointer ${
                activeLink === link ? "text-blue-600" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveLink(link)}
                className="relative focus:outline-none"
              >
                {link}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: activeLink === link ? "100%" : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex space-x-4">
          <Button2
            text="Sign up"
            classname="hover:bg-[#1E40AF] w-32 bg-[#2563EB] text-base lg:text-lg font-bold text-white"
          />
          <Button2
            text="Log In"
            classname="hover:bg-[#1E40AF] w-32 bg-white border border-[#2563EB] text-[#2563EB] hover:text-white hover:border-white text-base lg:text-lg font-bold"
          />
        </div>
      </nav>

      {/* Mobile Header */}
      <nav
        className="relative md:hidden flex items-center justify-center py-6 bg-white"
        aria-label="Mobile navigation"
      >
        <a
          href="/"
          className="text-[#FF6A00] font-bold text-xl absolute left-1/2 -translate-x-1/2"
          aria-label="Homepage"
        >
          LOGO
        </a>
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
          title="Open menu"
          className="absolute right-4 text-gray-700"
        >
          <HiMenuAlt3 size={28} />
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
            <motion.aside
              ref={sidebarRef}
              className="fixed top-0 right-0 h-full bg-white w-[80%] max-w-sm p-6 flex flex-col z-50 shadow-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              role="dialog"
              aria-modal="true"
            >
              <header className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-xl">Menu</h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  title="Close menu"
                >
                  <HiX size={28} />
                </button>
              </header>

              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-lg text-left w-full block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col space-y-4">
                <Button2
                  text="Sign up"
                  classname="w-full bg-[#2563EB] text-white"
                />
                <Button2
                  text="Log In"
                  classname="w-full bg-white border border-[#2563EB] text-[#2563EB] hover:text-white hover:bg-[#2563EB]"
                />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
