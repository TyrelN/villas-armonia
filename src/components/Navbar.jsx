"use client";

import { useScrollDirection } from "@/app/hooks/useScrollDirection";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import UserButton from "./UserButton";

export default function Navbar() {
  const scrollDirection = useScrollDirection();
  const { isSignedIn } = useAuth();

  return (
    <nav 
      className="fixed top-0 left-0 right-0 w-full h-20 z-[100] transform-gpu"
      style={{ 
        transform: scrollDirection === "down" ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 300ms ease-in-out"
      }}
    >
      <div className="bg-white/50 backdrop-blur-lg shadow-lg px-4 py-3 rounded-b-2xl">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Villa Armonia Home Button */}
            <Link 
              href="/" 
              className="group relative"
            >
              <div className="gradient-warm backdrop-blur-sm rounded-xl px-5 py-2.5 shadow-lg hover-lift transition-all duration-300 hover:scale-[1.02] relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/20 to-accent-sand/30 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                <div className="relative z-10">
                  <h1 className="text-xl font-bold text-primary-color tracking-wide">
                    Villa Armonia
                  </h1>
                  <p className="text-xs text-secondary-color font-medium uppercase tracking-wider -mt-1">
                    Welcome Home
                  </p>
                </div>
              </div>
            </Link>

            {/* Navigation Links */}
            <ul className="flex items-center gap-6">
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

            {/* Auth Section */}
            <div className="flex items-center gap-3">
              {isSignedIn ? (
                <>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-accent-sand/20 shadow-md">
                    <UserButton />
                  </div>
                </>
              ) : (
                <Link href="/login">
                  <button className="px-4 py-2 bg-[#335420] rounded-lg hover:bg-[#A9BBB2] transition">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}