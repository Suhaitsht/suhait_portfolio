"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { MoonOutline, SunOutline } from "heroicons-react";
import { FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";

export default function NavaBar() {
  const theme = "dark";
  const [isMobileMenuOpen, SetIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    SetIsMobileMenuOpen((isMobileMenuOpen) => !isMobileMenuOpen);
  };

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-white/10  dark:bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4 bg-primary-600">
        {/* Desktop Menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>
          {/* Desktop Menus */}
          <div className="hidden  md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className={` hover:text-primary transition-colors font-medium${
                    isActive ? "font-semibold text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <button className="p-2 rounded-lg cursor-pointer hover:bg-gray-100 text-primary dark:hover:bg-gray-800 ">
              {theme === "dark" ? (
                <SunOutline className="w-5 h-5" />
              ) : (
                <MoonOutline className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu  button*/}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 hover:text-blue-800 dark:hover:bg-gray-800 cursor-pointer transition-colors"
          >
            {" "}
            {isMobileMenuOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <HiBars3 className="h-6 w-6" />
            )}
          </button>
        </div>
        {/* mobile menu  */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="py-4 space-y-4">
              {menuItems.map((items, index) => (
                <div key={index}>
                  <Link
                    href={items.href}
                    className="block p-2 hover:text-primary transition-colors"
                  >
                    {items.label}
                  </Link>
                </div>
              ))}
              <div>
                <button className="flex items-center py-2 hover:text-primary transition-colors">
                  {theme === "dark" ? (
                    <SunOutline className="w-5 h-5 mr-2" />
                  ) : (
                    <MoonOutline className="w-5 h-5 mr-2" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
