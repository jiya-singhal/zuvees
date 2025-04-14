import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../redux/slice/cartSlice";
import { db } from "../../firebase/config";
import CheckoutSummary from "../checkoutSummary/CheckoutSummary";
import Header from "../header/Header";

const CheckoutForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const { email, userId } = useSelector((store) => store.auth);
  const { cartItems, totalAmount } = useSelector((store) => store.cart);
  const { shippingAddress } = useSelector((store) => store.checkout);

  const saveOrder = async () => {
    const orderDetails = {
      userId,
      email,
      orderDate: new Date().toDateString(),
      orderTime: new Date().toLocaleTimeString(),
      orderAmount: totalAmount,
      orderStatus: "Order Placed",
      cartItems,
      shippingAddress,
      createdAt: Timestamp.now().toDate(),
    };
    try {
      await addDoc(collection(db, "orders"), orderDetails);
      dispatch(clearCart());
      toast.success("Order placed successfully!");
      navigate("/checkout-success", { replace: true });
    } catch (error) {
      toast.error("Failed to place order");
    }
  };

  const handleMockPayment = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      saveOrder();
      setIsLoading(false);
    }, 1500); // simulate network delay
  };

  return (
    <>
      <Header text="Mock Payment" />
      <section className="w-full mx-auto p-4 md:p-10 md:w-9/12 md:px-6 flex flex-col h-full">
        <div className="flex flex-col-reverse md:flex-row gap-4 justify-evenly">
          <div className="w-full md:w-2/5 h-max p-4 bg-base-100 rounded-md shadow-xl">
            <CheckoutSummary />
          </div>
          <div className="rounded-md shadow-xl pt-4 pb-8 px-10">
            <h1 className="text-3xl font-light mb-2">Complete Your Order</h1>
            <form className="md:w-[30rem]" onSubmit={handleMockPayment}>
              <button
                disabled={isLoading}
                className="btn bg-blue-600 text-white px-6 py-2 mt-4"
              >
                {isLoading ? "Processing..." : "Place Order"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckoutForm;
