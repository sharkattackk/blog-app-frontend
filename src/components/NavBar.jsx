import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { useAppContext } from "../AppContext";

export default function NavBar() {
  const {scrolled} = useAppContext();

  const categories = [
    "Genetic Counselling",
    "Biology",
    "Genetics",
  ];

  const location = useLocation();
  
  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out
        ${scrolled || location.pathname === "/admin"
          ? "bg-black/40 backdrop-blur-lg"
          : "bg-transparent"}
      `}
    >
      <div
        className={`
          mx-auto px-8
          flex items-center justify-between
          transition-all duration-300
          ${scrolled ? "py-3" : "py-5"}
        `}
      >
        {/* Left */}
        <div className="flex items-center space-x-16">
          <Link to="/" className="group">
            <span className="text-2xl tracking-wide font-semibold text-white">
              KANETICS
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-base font-semibold text-white">
            <div className="hover:opacity-80 transition cursor-pointer">
              Latest
            </div>

            {categories.map((c, idx) => (
              <div
                key={idx}
                className="hover:opacity-80 transition cursor-pointer"
              >
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="hidden lg:flex items-center">
          <div
            className={`
              flex items-center
              w-56
              px-4 py-2
              rounded-full
              border
              transition-all duration-300
              ${scrolled
                ? "bg-white/10 border-white/20"
                : "bg-white/5 border-white/10"}
              focus-within:bg-white/15
              focus-within:border-white/40
            `}
          >
            <FaSearch className="text-white/60 mr-3 text-sm" />

            <input
              type="text"
              placeholder="Search topics..."
              className="
                bg-transparent
                outline-none
                text-sm
                text-white
                placeholder-white/60
                w-full
              "
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2">
            <SocialIcon
              url="https://www.instagram.com"
              style={{ height: 20, width: 20 }}
              bgColor="transparent"
              fgColor="white"
            />
            <SocialIcon
              url="https://ca.linkedin.com"
              style={{ height: 20, width: 20 }}
              bgColor="transparent"
              fgColor="white"
            />
            <SocialIcon
              url="https://www.facebook.com"
              style={{ height: 20, width: 20 }}
              bgColor="transparent"
              fgColor="white"
            />
          </div>

          <div className="hidden sm:block h-6 w-px bg-white/40" />

          <button
            className="
              px-4 py-2
              text-sm font-semibold
              text-white
              bg-main-accent
              rounded-lg
              shadow
              hover:shadow-md
              hover:scale-[1.03]
              transition
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}
