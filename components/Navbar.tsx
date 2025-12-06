"use client";
import { MenuIcon, XIcon, ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const path = usePathname();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Our Team", href: "/team" },
    { name: "Events", href: "/events" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const knowledgeCenter = [
    { name: "AWS Resources", href: "/knowledge-center/aws-resources" },
    { name: "Engineering Sub Resources", href: "/knowledge-center/engineering-resources" },
    { name: "AWS Blogs", href: "/knowledge-center/aws-blogs" },
  ];

  const [isOpen, setOpen] = useState<boolean>(false);
  const [isKnowledgeDropdownOpen, setKnowledgeDropdownOpen] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleOpen = () => setOpen((prev) => !prev);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & passed 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) toggleOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  useEffect(() => {
    if (isKnowledgeDropdownOpen) setKnowledgeDropdownOpen(false);
  }, [path]);

  const closeOnCurrent = (href: string) => {
    if (path === href) {
      toggleOpen();
    }
  };

  const isKnowledgeCenterActive = knowledgeCenter.some(item => item.href === path);

  return (
    <motion.nav 
      className="bg-black/80 backdrop-blur-md fixed z-50 w-full top-0 shadow-lg border-b border-purple-600/30"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <>
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="relative flex justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Button
                onClick={() => toggleOpen()}
                variant={"link"}
                aria-expanded={isOpen}
                className={classNames(
                  "inline-flex items-center justify-center rounded-md p-2 text-purple-300 hover:bg-purple-900/30 hover:text-purple-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition",
                  isOpen ? "text-purple-100" : ""
                )}
              >
                <span className="sr-only">Open main menu</span>
                <motion.span
                  key={String(isOpen)}
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: isOpen ? 180 : 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="block"
                >
                  {isOpen ? (
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  )}
                </motion.span>
              </Button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="block h-20 w-auto rounded-sm filter invert"
                  src="/images/logo-2.png"
                  alt="Logo"
                  width={300}
                  height={300}
                />
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-6">
                {navigation.map((item) => (
                  <div key={item.href} className="relative flex items-center">
                    <Link
                      href={item.href}
                      className={classNames(
                        item.href === path
                          ? "text-purple-300"
                          : "text-purple-200 hover:text-purple-100",
                        "inline-flex items-center px-1 py-2 text-base font-semibold transition-colors"
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.href === path && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-0 right-0 bottom-0.5 h-[2px] rounded-full bg-purple-400"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </div>
                ))}
                
                {/* Knowledge Center Dropdown */}
                <div 
                  className="relative flex items-center"
                  onMouseEnter={() => setKnowledgeDropdownOpen(true)}
                  onMouseLeave={() => setKnowledgeDropdownOpen(false)}
                >
                  <button
                    className={classNames(
                      isKnowledgeCenterActive
                        ? "text-purple-300"
                        : "text-purple-200 hover:text-purple-100",
                      "inline-flex items-center px-1 py-2 text-base font-semibold transition-colors"
                    )}
                  >
                    Knowledge Center
                    <ChevronDownIcon 
                      className={classNames(
                        "ml-1 h-4 w-4 transition-transform",
                        isKnowledgeDropdownOpen ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  {isKnowledgeCenterActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 bottom-0.5 h-[2px] rounded-full bg-purple-400"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  <AnimatePresence>
                    {isKnowledgeDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md rounded-lg shadow-lg border border-purple-600/30 py-2 z-50"
                      >
                        {knowledgeCenter.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={classNames(
                              item.href === path
                                ? "text-purple-300 bg-purple-600/20"
                                : "text-purple-200 hover:bg-purple-600/10 hover:text-purple-100",
                              "block px-4 py-2.5 text-sm font-medium transition-colors"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0" />
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.div
              key="mobileMenu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="sm:hidden border-t border-purple-600/30 bg-black/95 backdrop-blur-md"
            >
              <div className="space-y-0.5 py-2">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => closeOnCurrent(item.href)}
                    className={classNames(
                      item.href === path
                        ? "text-purple-300 bg-purple-600/20"
                        : "text-purple-200 hover:bg-purple-600/10 hover:text-purple-100",
                      "block py-2.5 px-4 text-base font-medium transition-colors"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile Knowledge Center Section */}
                <div className="border-t border-purple-600/30 pt-2 mt-2">
                  <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wide">
                    Knowledge Center
                  </div>
                  {knowledgeCenter.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => closeOnCurrent(item.href)}
                      className={classNames(
                        item.href === path
                          ? "text-purple-300 bg-purple-600/20"
                          : "text-purple-200 hover:bg-purple-600/10 hover:text-purple-100",
                        "block py-2.5 px-8 text-base font-medium transition-colors"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </>
    </motion.nav>
  );
}
