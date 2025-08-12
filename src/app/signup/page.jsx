import { SignUp } from '@clerk/nextjs';

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#002D18]">
      <SignUp
        appearance={{
          elements: {
            card: "bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-6",
          },
          variables: {
            colorPrimary: "#335420",
          },
        }}
      />
    </div>
  );
}