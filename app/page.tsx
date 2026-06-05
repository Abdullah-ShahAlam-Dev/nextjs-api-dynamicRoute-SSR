import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black px-4">
      
      <div className="text-center space-y-6">
        {/* Main Heading matched with Emerald theme */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">
          User Management System
        </h1>
        
        {/* Short description for assignment */}
        <p className="text-zinc-400 max-w-md mx-auto text-lg">
          A simple assignment demonstrating Server-Side Rendering (SSR) and Dynamic Routing in Next.js.
        </p>
        
        {/* Upgraded Emerald Button with glow effect */}
        <div className="pt-4">
          <Link href="/users">
            <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] border border-emerald-500/50">
              Explore All Users
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}