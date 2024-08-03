import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-6xl m-auto flex items-center gap-10 text-xl font-bold mt-5 max-sm:mt-5 px-5 max-sm:justify-between max-sm:px-3 max-sm:gap-3">
          <Link href="/home">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
        </div>
        <main className="max-w-6xl m-auto mt-10 px-5 max-sm:mt-5">
          {children}
        </main>
      </body>
    </html>
  );
}
