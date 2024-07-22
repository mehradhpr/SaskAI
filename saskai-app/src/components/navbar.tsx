"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GithubIcon, Linkedin, Menu, Rows3 } from "lucide-react";

export const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleLinkClick = () => {
    setMobileNavOpen(false);
  };

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 810); // You can adjust this value based on your design
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div>
      <div className="fixed top-0 w-screen bg-gray2 flex justify-between items-center z-20 shadow-4xl">
        {isMobile &&
          (mobileNavOpen ? (
            <Rows3 onClick={mobileNavToggle} className="text-title" />
          ) : (
            <Menu onClick={mobileNavToggle} className="text-title" />
          ))}

        {isMobile ? (
          mobileNavOpen && (
            <div className="absolute top-11 right-0 w-full z-40 shadow-xl bg-gray2">
              <div className="flex flex-col p-2">
                <div className="flex flex-col z-10">
                  <div className="flex flex-row">
                    <Link href="/" className="p-2" onClick={handleLinkClick}>
                      <div className="px-2 py-1 size-fit text-title border border-pink hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300 ml-auto">
                        About
                      </div>
                    </Link>
                    <div className="flex flex-row ml-auto items-end">
                      <Link href="/contact" className="p-2" onClick={handleLinkClick}>
                        <div className="px-4 py-1 bg-gradient-to-r from-blue to-pink size-fit text-title shadow-lg hover:bg-blue cursor-pointer transition-colors duration-300 ml-auto">
                          Contact
                        </div>
                      </Link>
                      <Link href="/blog" className="p-2" onClick={handleLinkClick}>
                        <div className="px-4 py-1 bg-gradient-to-r from-green-500 to-blue size-fit text-title shadow-lg hover:bg-blue cursor-pointer transition-colors duration-300 ml-auto">
                          Blog
                        </div>
                      </Link>
                    </div>
                  </div>

                  <Link href="/ed&ex" className="p-2" onClick={handleLinkClick}>
                    <div className="px-2 py-1 size-fit text-title border border-pink hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300">
                      Education and Experience
                    </div>
                  </Link>
                  <Link href="/projects" className="p-2" onClick={handleLinkClick}>
                    <div className="px-2 py-1 size-fit text-title border-2 border-blue hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300">
                      Projects
                    </div>
                  </Link>
                  <Link href="/volunteering" className="p-2" onClick={handleLinkClick}>
                    <div className="px-2 py-1 size-fit text-title border border-pink hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300">
                      Volunteering
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="flex justify-center sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            <Link
              href="/"
              className="p-2 py-3 hover:bg-pink hover:text-title transition-colors duration-300"
            >
              Chat
            </Link>
            <Link
              href="/about"
              className="p-2 py-3 hover:bg-pink hover:text-title transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="p-2 py-3 hover:bg-blue hover:text-title transition-colors duration-300"
            >
              Contact
            </Link>
          </div>
        )}

        <div className="flex justify-end">
          <Link
            href="/"
            className="text-md text-green-600 min-h-fit min-w-fit z-50 tracking-widest xl:text-xl p-2"
          >
            SASKAI
          </Link>
        </div>
      </div>
      <div className="h-11"></div>
    </div>
  );
};
