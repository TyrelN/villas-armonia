import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import FooterWrapper from "../components/FooterWrapper";
import Providers from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Villa Armonia",
  description: "Reserve your place in a budding community",
};

export default function RootLayout({ children }) {
  return (
    <Providers>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Navbar />
          <main>
            {children}
          </main>
          <FooterWrapper />
        
      </body>
    </html>
    </Providers>
  );
}
