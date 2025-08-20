import React from "react";
import OrangeButton from "../../Button/OrangeButton";
import totalAmount from "../../CoustomFunction/totalAmount";
import generateCartItem from "../../CoustomFunction/generateCartItem";
import { LuDot } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import addOrderApi from "../../Api/order/addOrderApi";

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  const navigate = useNavigate();

  const handleOrder = () => {
    const tempData = {
      totalAmount: totalAmount(cartData),
      items: generateCartItem(cartData),
    };
    addOrderApi(tempData, navigate);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-white/30 backdrop-blur-md flex justify-center items-center z-50 p-4"
      onClick={() => setVisible(false)}
    >
      <div
        className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto p-6 shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-5 text-center">
          Checkout Summary
        </h2>

        <div className="space-y-4 mb-6">
          {cartData.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b border-gray-200 pb-2"
            >
              <div className="flex items-center gap-3 font-semibold text-gray-700 flex-1 min-w-0">
                <LuDot size={24} className="text-orange-500 flex-shrink-0" />
                <span className="truncate">{item.pName}</span>
              </div>
              <div className="flex items-center gap-6 ml-4 flex-shrink-0">
                <span className="w-12 text-center text-gray-600">{item.quantity}</span>
                <span className="w-20 text-right text-gray-900 font-bold">${item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-lg font-bold border-t border-gray-300 pt-4 mb-6 text-gray-900">
          <span>Total Amount:</span>
          <span>${totalAmount(cartData).toFixed(2)}</span>
        </div>

        <OrangeButton
          title="Proceed to Payment"
          onClick={handleOrder}
          className="w-full py-3 rounded-md text-lg"
        />

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
          onClick={() => setVisible(false)}
          aria-label="Close checkout modal"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default CheckOutModal;
