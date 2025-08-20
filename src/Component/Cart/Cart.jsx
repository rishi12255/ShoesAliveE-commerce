import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";
import totalAmount from "../CoustomFunction/totalAmount";
import OrangeButton from "../Button/OrangeButton";
import CheckOutModal from "./Component/CheckOutModal";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Cart = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("cart1");
    if (data) setCartData(JSON.parse(data));
  }, []);

  const handleGoToShopping = () => {
    sessionStorage.setItem("scrollToProducts", "true");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar searchText={searchText} setSearchText={setSearchText} />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 pt-24">
        {cartData.length === 0 ? (
          <div className="flex flex-col justify-center items-center text-center space-y-6 mt-10 sm:mt-20">
            <AiOutlineShoppingCart className="text-7xl sm:text-8xl text-orange-500" />
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">
              Your Cart is Empty
            </h2>
            <p className="text-gray-500 max-w-md text-sm sm:text-base">
              Looks like you haven't added anything to your cart yet.
            </p>
            <OrangeButton
              title="Go to Shopping"
              onClick={handleGoToShopping}
              className="mt-4 sm:mt-6 px-5 sm:px-6 py-2 sm:py-3"
            />
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col space-y-6">
              {cartData.map((item) => (
                <CartCard
                  key={item._id}
                  data={item}
                  setCartData={setCartData}
                />
              ))}
            </div>

            {/* Order Summary for desktop */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="fixed top-24 right-[4rem] bg-white rounded-lg border border-gray-200 shadow-lg p-6 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
                <h3 className="text-2xl font-extrabold text-gray-900 border-b border-gray-300 pb-3">
                  Order Summary
                </h3>
                <div className="flex justify-between items-center text-base font-semibold text-gray-700">
                  <span>Total Items:</span>
                  <span>{cartData.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex gap-3 justify-between items-center text-2xl font-bold text-orange-600">
                  <span>Total Price:</span>
                  <span>${totalAmount(cartData).toFixed(2)}</span>
                </div>
                <OrangeButton
                  title="Proceed to Checkout"
                  onClick={() => setVisible(true)}
                  className="w-full py-3 rounded-md text-lg shadow-md hover:shadow-lg transition"
                />
              </div>
            </div>

            {/* Order Summary for mobile & tablet */}
            <div className="lg:hidden w-full bg-white rounded-lg border border-gray-200 shadow-lg p-5 flex flex-col gap-5 mt-6">
              <h3 className="text-xl font-extrabold text-gray-900 border-b border-gray-300 pb-3">
                Order Summary
              </h3>
              <div className="flex justify-between items-center text-base font-semibold text-gray-700">
                <span>Total Items:</span>
                <span>{cartData.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="flex gap-3 justify-between items-center text-2xl font-bold text-orange-600">
                <span>Total Price:</span>
                <span>${totalAmount(cartData).toFixed(2)}</span>
              </div>
              <OrangeButton
                title="Proceed to Checkout"
                onClick={() => setVisible(true)}
                className="w-full py-3 rounded-md text-lg shadow-md hover:shadow-lg transition"
              />
            </div>
          </div>
        )}
      </main>
      <CheckOutModal visible={visible} setVisible={setVisible} cartData={cartData} />
    </div>
  );
};

export default Cart;
