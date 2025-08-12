"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  
  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-[100]">
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
              {session ? (
                <>
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-accent-sand/20 shadow-md">
                    <span className="text-sm text-[#121212] font-medium">
                      Hi, {session.user?.name?.split(" ")[0] || "Guest"}
                    </span>
                  </div>
                  <button
                    onClick={() => signOut()}
                    className="bg-white/90 backdrop-blur-sm hover-lift text-[#121212] px-3 py-1.5 rounded-xl text-sm font-medium border border-accent-sunset/30 shadow-md transition-all duration-300 hover:scale-105 hover:border-accent-sunset/50 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-accent-sunset/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                    <span className="relative z-10">Sign Out</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => signIn()}
                  className="gradient-warm hover-lift text-white px-5 py-1.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                  <span className="relative z-10 text-black">Sign In</span>
                </button>
              )}
            </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}