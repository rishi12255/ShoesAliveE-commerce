import React from "react";
import StarCalc from "../component/StarCalc";
import { LuDot } from "react-icons/lu";
import AddToCart from "../../Button/AddToCart";
import { IoMdArrowRoundBack } from "react-icons/io";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router-dom";

const ProductModal = ({
  data,
  setShowModal,
  cartBoolean,
  setCartBoolean,
  addItemToCart,
}) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  const navigateFunction = () => {
    navigate("/product", { state: data });
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-4 sm:px-6"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-white rounded-3xl shadow-xl max-w-5xl w-full md:h-[75vh] h-auto flex flex-col md:flex-row overflow-hidden animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className="md:w-1/2 w-full h-72 md:h-full relative bg-gray-100 flex items-center justify-center">
          <div className="absolute p-3 bg-orange-500 rounded-full top-5 left-5 shadow-lg cursor-pointer transition hover:bg-orange-600 z-10">
            <IoMdArrowRoundBack
              className="text-white text-2xl"
              onClick={() => setShowModal(false)}
            />
          </div>
          <img
            src={data.image}
            alt={data.pName}
            className="w-full h-full object-contain p-6 mix-blend-multiply"
            draggable={false}
          />
        </div>

        
        <div className="flex-1 p-8 flex flex-col justify-between gap-6">
          {/* Title & Rating */}
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-semibold text-gray-900 max-w-[70%] leading-tight">
              {data.pName}
            </h2>
            <StarCalc rating={Math.floor(Number(data.rating))} />
          </div>

       
          <p className="text-base text-gray-700 leading-relaxed">{data.description}</p>

        
          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Features</h3>
            <ul className="space-y-3">
              {data.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-gray-600 text-sm font-medium"
                >
                  <LuDot className="text-orange-500 text-xl" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price & Button */}
          <div className="flex justify-between items-center pt-3 border-t border-gray-200">
            <div className="text-3xl font-extrabold text-orange-500">${data.price}</div>
            {userData?.role === "admin" ? (
              <OrangeButton
                title="Update"
                onClick={navigateFunction}
                className="hover:brightness-110 transition"
              />
            ) : (
              <AddToCart
                cartBoolean={cartBoolean}
                onClick={() => {
                  setCartBoolean(true);
                  addItemToCart();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
