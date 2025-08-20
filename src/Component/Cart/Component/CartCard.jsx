import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import StarCalc from "../../Product/component/StarCalc";
import removeFromCart from "../../LocalStorage/removeFromCart";
import Quantity from "./Quantity";

const CartCard = ({ data, setCartData }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-5 relative">
      {/* Remove Button */}
      <button
        onClick={() => removeFromCart(data, setCartData)}
        className="absolute top-4 right-4 text-red-600 hover:text-red-800 transition-colors"
        aria-label="Remove item"
      >
        <BsFillTrash3Fill size={20} />
      </button>

      {/* Product Image */}
      <div className="w-28 h-28 md:w-32 md:h-32 rounded-lg overflow-hidden border border-gray-300 flex-shrink-0">
        <img
          src={data.image}
          alt={data.pName}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow gap-1 md:gap-3">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 truncate">
          {data.pName}
        </h3>
        <p className="text-sm text-gray-600">{data.category}</p>
        <StarCalc rating={Math.floor(data.rating)} />
        <Quantity data={data} setCartData={setCartData} />
      </div>

      {/* Price Section */}
      <div className="flex flex-col items-end gap-2 md:gap-4 w-28 md:w-36">
        <span className="text-orange-600 font-extrabold text-lg md:text-2xl">
          ${data.price}
        </span>
        <button
          onClick={() => removeFromCart(data, setCartData)}
          className="md:hidden text-red-600 hover:text-red-800 font-medium"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
