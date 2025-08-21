import Link from 'next/link'

export default function AuthCodeError() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#002D18]">
      <div className="bg-white/30 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Authentication Error</h1>
        <p className="text-white/80 mb-6">
          There was an error during the authentication process. Please try again.
        </p>
        <Link 
          href="/login"
          className="inline-block bg-[#335420] text-white py-3 px-6 rounded-lg hover:bg-[#A9BBB2] transition-colors duration-200"
        >
          Back to Login
        </Link>
      </div>
    </div>
  )
}
