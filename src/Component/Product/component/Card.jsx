import AddToCart from "../../Button/AddToCart";
import StarCalc from "./StarCalc";
import ProductModal from "../Modal/ProductModal";
import { useState } from "react";
import addToCart from "../../LocalStorage/addToCart";
import { BsFillTrash3Fill } from "react-icons/bs";
import deleteProductApi from "../../Api/product/deleteProductApi";

const Card = ({ data }) => {
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  const [showModal, setShowModal] = useState(false);
  const [cartBoolean, setCartBoolean] = useState(false);

  const addItemToCart = () => {
    if (!cartBoolean) {
      addToCart(data);
    }
  };

  const handelDelete = () => {
    deleteProductApi({ id: data._id });
  };

  return (
    <>
      <div
        className="group relative w-full max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-xs xl:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        
        {userData?.role === "admin" && (
          <div
            className="absolute top-2 right-2 z-10 bg-red-600 hover:bg-red-700 text-white p-1 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              handelDelete();
            }}
          >
            <BsFillTrash3Fill size={14} />
          </div>
        )}

        
        <div className="w-full h-48 sm:h-44 md:h-52 overflow-hidden bg-gray-100">
          <img
            src={data.image}
            alt={data.pName}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Product Details */}
        <div className="p-4 flex flex-col gap-2">
          <div className="text-sm text-gray-500 font-medium text-center">
            {data.category}
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-base font-semibold text-gray-800 truncate w-[60%]">
              {data.pName}
            </h2>
            <StarCalc rating={Math.floor(Number(data.rating))} />
          </div>

          <div
            className="flex items-center justify-between mt-2"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xl font-bold text-orange-500">
              ${data.price}
            </div>
            <AddToCart
              cartBoolean={cartBoolean}
              onClick={() => {
                setCartBoolean(true);
                addItemToCart();
              }}
            />
          </div>
        </div>
      </div>

      
      {showModal && (
        <ProductModal
          data={data}
          setShowModal={setShowModal}
          cartBoolean={cartBoolean}
          setCartBoolean={setCartBoolean}
          addItemToCart={addItemToCart}
        />
      )}
    </>
  );
};

export default Card;
