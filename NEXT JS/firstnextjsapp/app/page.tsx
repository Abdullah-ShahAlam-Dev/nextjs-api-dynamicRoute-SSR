import React from "react";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black">
      <nav className="bg-blue-600 p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Next.js Project</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center mt-20">
        <h2 className="text-4xl font-bold text-gray-800">
          This is the first Project OF NEXT.JS
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Stay Tuned for more upcoming projects{" "}
        </p>
      </main>
    </div>
  );
}
