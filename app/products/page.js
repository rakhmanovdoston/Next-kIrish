import React from "react";
import Link from "next/link";

const page = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return (
    <div className="container mx-auto p-4 grid  sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white justify-between rounded-lg hover:shadow-xl transform hover: transition duration-400 flex flex-col items-center"
        >
          <div>
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-72 object-contain p-4"
            />
            <div className="p-4 text-center">
              <Link href={`/products/${p.id}`}>
                <h2 className="text-xl font-semibold text-indigo-500 underline ">
                  {p.title}
                </h2>
              </Link>
            </div>
          </div>

          <div className="mb-5">
            <strong className="text-lg font-bold text-red-500 block mt-4">
              price: ${p.price}
            </strong>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
