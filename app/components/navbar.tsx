"use client";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import logo from "../../public/Images/logo.png";
import mobileLogo from "../../public/Images/mobile-logo.svg";
import Link from "next/link";

const NAV_ITEMS = [
  "Products",
  "Partnerships",
  "Sponsorships",
  "Education",
  "Docs",
  "Team",
  "Trade Dividends",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Check if an item should be highlighted
  const isHighlighted = (item: string) =>
    item.toLowerCase() === "trade dividends";

  return (
    <header
      className={`
        fixed top-0 w-full z-50 transition-colors duration-300
        ${scrollY > 100 ? "bg-[#131B2F] shadow-md" : "bg-transparent"}
      `}
      role="banner"
    >
      <div className="max-w-[1301px] relative w-full py-5 mx-auto flex justify-between items-center px-5">
        <Link href="/" aria-label="Home">
          <Image
            src={logo}
            width={247}
            height={35}
            alt="Company logo"
            className="hidden lg:block"
            priority
          />
          <Image
            src={mobileLogo}
            width={31}
            height={28}
            alt="Company logo"
            className="lg:hidden"
            priority
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex gap-6 items-center text-base text-[#7B8191] font-normal capitalize">
            {NAV_ITEMS.map((item) => (
              <li key={item}>
                <p
                  className={`
                    hover:text-white transition-colors
                    ${isHighlighted(item) ? "text-white font-bold" : ""}
                  `}
                  aria-current={isHighlighted(item) ? "page" : undefined}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA button */}
        <a
          href="/app"
          className="hero-btn hidden lg:block capitalize px-6 py-2 rounded-[25px] text-center hover:opacity-90 transition-opacity"
          aria-label="Launch application"
        >
          Launch App
        </a>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-blue-500 text-2xl p-2"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`
            fixed inset-0 top-16 bg-[#131B2F] z-40 transition-all duration-300 lg:hidden
            ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          `}
          aria-hidden={!isOpen}
        >
          <nav
            className="container mx-auto px-6 py-8"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-6 text-2xl text-[#7B8191] font-normal capitalize">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <p
                    className={`
                      block py-2 hover:text-white transition-colors
                      ${isHighlighted(item) ? "text-white font-bold" : ""}
                    `}
                    aria-current={isHighlighted(item) ? "page" : undefined}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="/"
              className="hero-btn mt-8 block w-full text-center capitalize px-6 py-3 rounded-[25px] hover:opacity-90 transition-opacity"
              aria-label="Launch application"
            >
              Launch Application
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
