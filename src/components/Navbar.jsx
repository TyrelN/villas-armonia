"use client";

import { useScrollDirection } from "@/app/hooks/useScrollDirection";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import UserButton from "./UserButton";
import { useState } from "react";

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const { isSignedIn, isAdmin } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 w-full h-16 md:h-20 z-[100] transform-gpu"
      style={{ 
        transform: scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 300ms ease-in-out"
      }}
    >
      <div className="bg-white/50 backdrop-blur-lg shadow-lg px-3 md:px-4 py-2 md:py-3 rounded-b-2xl">
        <div className="mx-auto">
          <div className="flex items-center justify-between">
            {/* Villa Armonia Home Button */}
            <Link 
              href="/" 
              className="group relative"
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-2 md:p-3 shadow-lg hover-lift transition-all duration-300 hover:scale-[1.02] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-accent-sand/30 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                <div className="relative z-10">
                  <img 
                    src="/images/villas-armonio-logo-gold.jpeg" 
                    alt="Villa Armonia" 
                    className="h-8 md:h-10 w-auto rounded-lg"
                  />
                </div>
              </div>
            </Link>

            {/* Navigation Links - Desktop */}
            <ul className="hidden md:flex items-center gap-6">
              <li>
                <Link 
                  href="/lot-map"
                  className="text-[#121212] font-medium hover:text-accent-clay transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    Lot Map
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-clay group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-[#121212] font-medium hover:text-accent-clay transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-clay group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-[#121212] font-medium hover:text-accent-clay transition-colors duration-300 relative group"
                >
                  <span className="relative">
                    FAQ
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-clay group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link 
                    href="/lot-requests" 
                    className="text-[#121212] font-medium hover:text-accent-clay transition-colors duration-300 relative group"
                  >
                    <span className="relative">
                      Lot Requests
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-clay group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              )}
              {isSignedIn && !isAdmin && (
                <li>
                  <Link 
                    href="/my-requests" 
                    className="text-[#121212] font-medium hover:text-accent-clay transition-colors duration-300 relative group"
                  >
                    <span className="relative">
                      My Requests
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-clay group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </li>
              )}
            </ul>

            {/* Auth Section */}
            <div className="flex items-center gap-2 md:gap-3">
              {isSignedIn ? (
                <>
                  {/* Desktop User Button */}
                  <div className="hidden md:block bg-white/90 backdrop-blur-sm rounded-xl px-2 md:px-3 py-1 md:py-1.5 border border-accent-sand/20 shadow-md">
                    <UserButton />
                  </div>
                </>
              ) : (
                <>
                  {/* Desktop Sign In Button */}
                  <Link href="/login" className="hidden md:block">
                    <button className="px-3 md:px-4 py-1.5 md:py-2 gradient-warm rounded-lg shadow-lg hover-lift transition-all duration-300 hover:scale-[1.02] text-sm md:text-base">
                      Sign In
                    </button>
                  </Link>
                </>
              )}
              
              {/* Mobile Menu Button - Always visible on mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/20 transition-colors border border-accent-sand/20"
                aria-label="Toggle mobile menu"
              >
                <div className="w-5 h-5 flex flex-col justify-center items-center">
                  <span className={`block w-4 h-0.5 bg-[#121212] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                  <span className={`block w-4 h-0.5 bg-[#121212] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block w-4 h-0.5 bg-[#121212] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-[99] top-16">
          <div className="bg-white/95 backdrop-blur-lg shadow-lg rounded-b-2xl mx-4 mt-2 p-4">
            <nav className="space-y-4">
              <Link 
                href="/lot-map"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-primary-color font-medium hover:bg-accent-sand/10 rounded-lg transition-colors"
              >
                Lot Map
              </Link>
              <Link 
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-primary-color font-medium hover:bg-accent-sand/10 rounded-lg transition-colors"
              >
                About
              </Link>
              <Link 
                href="/faq"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-primary-color font-medium hover:bg-accent-sand/10 rounded-lg transition-colors"
              >
                FAQ
              </Link>
              {isAdmin && (
                <Link 
                  href="/lot-requests"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-primary-color font-medium hover:bg-accent-sand/10 rounded-lg transition-colors"
                >
                  Lot Requests
                </Link>
              )}
              {isSignedIn && !isAdmin && (
                <Link 
                  href="/my-requests"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 px-4 text-primary-color font-medium hover:bg-accent-sand/10 rounded-lg transition-colors"
                >
                  My Requests
                </Link>
              )}
              
              {/* Auth Section for Mobile */}
              <div className="pt-4 border-t border-accent-sand/20">
                {isSignedIn ? (
                  <div className="w-full">
                    <UserButton isMobile={true} />
                  </div>
                ) : (
                  <Link 
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full text-center py-3 px-4 gradient-warm rounded-lg shadow-lg hover-lift transition-all duration-300 text-white font-medium"
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}