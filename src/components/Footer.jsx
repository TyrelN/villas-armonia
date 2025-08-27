"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full gradient-footer backdrop-blur-lg shadow-lg border-t border-accent-sand/20 relative z-20">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Column 1: Mexico Updates */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Mexico Updates
            </h4>
            <div className="space-y-3">
              <div className="group">
                <Link href="#" className="block p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover-lift">
                  <h5 className="font-medium text-white group-hover:text-accent-sand transition-colors duration-300">
                    Local Development News
                  </h5>
                  <p className="text-sm text-gray-300 mt-1">
                    Stay updated on the latest developments in the region
                  </p>
                </Link>
              </div>
              <div className="group">
                <Link href="#" className="block p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover-lift">
                  <h5 className="font-medium text-white group-hover:text-accent-sand transition-colors duration-300">
                    Community Events
                  </h5>
                  <p className="text-sm text-gray-300 mt-1">
                    Discover local events and cultural activities
                  </p>
                </Link>
              </div>
              <div className="group">
                <Link href="#" className="block p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover-lift">
                  <h5 className="font-medium text-white group-hover:text-accent-sand transition-colors duration-300">
                    Investment Opportunities
                  </h5>
                  <p className="text-sm text-gray-300 mt-1">
                    Explore real estate and investment news
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Quick Links
            </h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-accent-sand transition-colors duration-300 py-1">
                Contact Us
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-accent-sand transition-colors duration-300 py-1">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-accent-sand transition-colors duration-300 py-1">
                Terms of Service
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-accent-sand transition-colors duration-300 py-1">
                FAQ
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="mt-6 p-4 mt-10 rounded-lg bg-white/10 backdrop-blur-sm">
              <h5 className="font-medium text-white mb-2">Get in Touch</h5>
              <p className="text-sm text-gray-300">
                Email: villasarmonias@gmail.com
              </p>
              <p className="text-sm text-gray-300">
                Phone: +1 (250) 123-4567
              </p>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">
              Follow Us
            </h4>
            <div className="space-y-3">
              <Link href="https://www.youtube.com/@villas.armonia" className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover-lift">
                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-white hover:text-accent-sand transition-colors duration-300 font-medium">YouTube</span>
              </Link>
              <Link href="https://www.instagram.com/villas_armonia?igsh=MXM1NWJ3dDNiejkwbA%3D%3D&utm_source=qr" className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover-lift">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
                <span className="text-white hover:text-accent-sand transition-colors duration-300 font-medium">Instagram</span>
              </Link>
              <Link href="https://www.facebook.com/share/16t9Pn6gBc/?mibextid=wwXIfr" className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover-lift">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-white hover:text-accent-sand transition-colors duration-300 font-medium">Facebook</span>
              </Link>
            </div>
            
            <div className="mt-6 p-4 rounded-lg bg-white/10 backdrop-blur-sm">
              <h5 className="font-medium text-white mb-2">Stay Connected</h5>
              <p className="text-sm text-gray-300">
                Follow us for the latest updates, community events, and exclusive content from Villa Armonia.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © 2025 Villa Armonia. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-300 hover:text-accent-sand transition-colors duration-300 text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-gray-300 hover:text-accent-sand transition-colors duration-300 text-sm">
                Terms
              </Link>
              <Link href="#" className="text-gray-300 hover:text-accent-sand transition-colors duration-300 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
