import React, { useEffect, useRef } from "react";
import Card from "./component/Card";
import { useLocation } from "react-router-dom";

const Product = ({ productData }) => {
  const productsRef = useRef(null);

  useEffect(() => {
    if (sessionStorage.getItem("scrollToProducts") === "true") {
      sessionStorage.removeItem("scrollToProducts"); // remove flag
      productsRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 flex items-center justify-center gap-2">
          🛍️ Our Products
        </h1>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Explore our latest collection and find your perfect match!
        </p>
      </div>

      {/* This is the scroll target */}
      <div ref={productsRef} className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center shadow-2xs">
        {productData.map((item) => (
          <Card data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default Product;
