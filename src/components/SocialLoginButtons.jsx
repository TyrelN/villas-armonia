"use client";

import { signIn } from "next-auth/react";

export default function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <button
        onClick={() => signIn("google")}
        className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Continue with Google
      </button>
      <button
        onClick={() => signIn("apple")}
        className="p-2 bg-black text-white rounded hover:bg-gray-800"
      >
        Continue with Apple
      </button>
    </div>
  );
}