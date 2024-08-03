import React from "react";
import Link from "next/link";

const page = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <p className="text-gray-600 font-bold text-center">About Page</p>
    </div>
  );
};

export default page;
