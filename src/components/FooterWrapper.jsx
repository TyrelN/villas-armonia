"use client";

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  
  // Hide footer on lot-map page
  if (pathname === '/lot-map' || pathname === '/login') {
    return null;
  }
  
  return <Footer />;
}
