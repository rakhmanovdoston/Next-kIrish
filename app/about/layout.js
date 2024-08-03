import React from "react";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <div>
      <div>
        <nav className="flex gap-10 text-2xl font-bold text-indigo-600 max-sm:justify-between ">
          <p className="text-gray-500 active:text-black">
            <Link href="/about/students">Students</Link>
          </p>
          <p className="text-gray-500 active:text-black">
            <Link href="/about/teacher">Teacher</Link>
          </p>
        </nav>
        <main className="flex justify-center mt-10">{children}</main>
      </div>
    </div>
  );
};

export default layout;
