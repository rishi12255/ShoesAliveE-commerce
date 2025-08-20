import React, { useState } from "react";

const icons = [
  { name: "All", src: "./Icons/Shoes.png" },
  { name: "Nike", src: "./Icons/Nikes.png" },
  { name: "Adidas", src: "./Icons/adidas-logo.png" },
  { name: "Lacoste", src: "./Icons/lacoste12.png" },
  { name: "Puma", src: "./Icons/Puma3.png" },
];

const Categories = ({ mainData, setProductData }) => {
  const [pick, setPick] = useState("All");

  const setCategories = (category) => {
    setPick(category);
    if (category === "All") {
      setProductData(mainData);
    } else {
      setProductData(mainData.filter((item) => item.category === category));
    }
  };

  return (
    <div className="my-4 mx-3 md:mx-8">
      <h2 className="text-gray-800 font-extrabold md:text-3xl text-center tracking-wide flex items-center justify-center gap-3">
        Find Your Perfect Pair
      </h2>

      <div className="w-fit flex flex-wrap gap-6 sm:gap-10 lg:gap-20 mx-auto my-6 justify-center">
        {icons.map((item) => {
          const isActive = item.name === pick;
          return (
            <div
              key={item.name}
              onClick={() => setCategories(item.name)}
              className={`flex flex-col items-center gap-2 cursor-pointer group transition-all duration-300 ${
                isActive ? "scale-110" : "opacity-80 hover:opacity-100"
              }`}
            >
              <div
                className={`rounded-full p-2 transition-transform duration-300 transform group-hover:scale-110 ${
                  isActive
                    ? "ring-2 ring-orange-500 shadow-md shadow-orange-300"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-10 w-10 md:h-14 md:w-14 object-contain"
                />
              </div>
              <p
                className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-gray-700 font-semibold"
                    : "text-gray-500 group-hover:text-gray-700"
                }`}
              >
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
