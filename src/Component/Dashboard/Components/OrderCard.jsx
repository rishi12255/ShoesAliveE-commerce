import React from "react";
import { LuDot } from "react-icons/lu";

const OrderCard = ({ data }) => {
  return (
    <div className="border rounded-xl bg-sky-100 text-gray-600 text-xs font-medium 
                    w-full h-[350px] flex flex-col justify-between p-4 shadow-md">
      
      {/* Customer Details */}
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold italic text-gray-900 text-center">
          Customer Details
        </div>
        <div className="text-xs flex justify-between w-full flex-col font-medium">
          <p>Name:{data.cName}</p>
          <p>Number:{data.contactNumber}</p>
        </div>
        <div className="flex justify-between flex-col w-full text-xs">
          <p>City:{data.city}</p>
          <p>Street:{data.street}</p>
        </div>
        <div className="w-full">
          <p className="font-semibold">Delivery Details:</p>
          <p className="truncate justify">{data.deliveryDescription}</p>
        </div>
      </div>

      {/* Items */}
      <div className="mt-3 flex flex-col gap-2 overflow-y-auto">
        <div className="text-sm font-semibold italic text-gray-900 text-center">Items</div>
        <div className="flex justify-between text-sm">
          <p>Total Amount:</p>
          <p>{data.totalAmount}</p>
        </div>
        <div className="w-full max-h-[120px] overflow-y-auto pr-1">
          {data.items.map((item, index) => (
            <div key={index} className="flex justify-between w-full text-xs">
              <div className="flex gap-1 items-center">
                <LuDot />
                <p>{item.itemName}</p>
              </div>
              <div>{item.quantity}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
