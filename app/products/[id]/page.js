import React from "react";
import Link from "next/link";

const page = async ({ params }) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await response.json();

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="bg-white p-6 max-w-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 object-contain mb-4"
        />
        <h2 className="text-2xl font-semibold text-blue-500 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <strong className="text-xl font-bold text-blue-500">
          Price: ${product.price}
        </strong>
      </div>
      <Link href="/products">
        <button className="bg-gray-600 text-white text-xl font-bold px-6 py-2 rounded-2xl">
          back to shopping
        </button>
      </Link>
    </div>
  );
};

export default page;
