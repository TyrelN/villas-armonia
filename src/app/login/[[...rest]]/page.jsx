"use client";

import { SignIn } from '@clerk/nextjs';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#002D18]">
    <SignIn
      appearance={{
        elements: {
          card: "bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-6",
        },
        variables: {
          colorPrimary: "#335420", // your green accent
          colorBackground: "#FFFFFF",
          colorText: "#000000",
        },
      }}
    />
  </div>
  );
}