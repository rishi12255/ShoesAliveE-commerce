import React from "react";
import addQuantity from "../../LocalStorage/addQuantity";
import subQuantity from "../../LocalStorage/subQuantity";

const Quantity = ({ data, setCartData }) => {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => subQuantity(data, setCartData)}
        className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-md bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition"
        aria-label="Decrease quantity"
      >
        –
      </button>
      <span className="text-orange-600 font-semibold text-lg md:text-xl min-w-[24px] text-center">
        {data.quantity}
      </span>
      <button
        onClick={() => addQuantity(data, setCartData)}
        className="flex justify-center items-center w-8 h-8 md:w-10 md:h-10 rounded-md bg-green-600 text-white font-bold text-lg hover:bg-green-700 transition"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
