import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Users Panel",
  description: "Next.js SSR Assignment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white min-h-screen">
        {/* Navbar */}
        <header className="flex justify-between items-center px-8 py-4 bg-black border-b border-zinc-800">
          <h1 className="text-xl font-bold tracking-wide">Users Panel</h1>
          <nav className="flex gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-blue-400 transition">Home</Link>
            <Link href="/users" className="hover:text-blue-400 transition">All Users</Link>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}