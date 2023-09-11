import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-6xl mx-auto">
      {cart.length > 0 ? (
        <div className="flex">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>
          <div>
            <div>
              <div className="text-xl text-green-700 font-semibold uppercase ">
                Your Cart
              </div>
              <div className="text-5xl font-semibold text-green-700 uppercase">
                Summary
              </div>
              <p>
                <span className="text-gray-700 font-semibold text-lg">
                  Total Items : {cart.length}
                </span>
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold text-lg">
                Total Amount :<span className="font-bold"> ${totalAmount}</span>
              </p>
              <button className="w-full bg-green-700 text-xl px-4 text-white font-bold rounded-md">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center flex-col">
          <h1 className="text-gray-700 font-semibold text-2xl mb-6">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase text-white font-semibold px-8 py-4 border-2 rounded-md hover:bg-white  hover:border-green-700 hover:text-green-700  bg-green-600 transition-all ease-in duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
