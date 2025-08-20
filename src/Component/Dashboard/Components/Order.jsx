import OrderCard from "./OrderCard";

const Order = ({ orderData }) => {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%]
                 h-[90vh] bg-white shadow-2xl rounded-xl
                 overflow-y-auto p-6 z-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {orderData.map((item) => (
          <OrderCard key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Order;
