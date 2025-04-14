import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateSubtotal, calculateTotalQuantity } from "../../redux/slice/cartSlice";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import Loader from "../../components/loader/Loader";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateSubtotal());
    dispatch(calculateTotalQuantity());
  }, [dispatch, cartItems]);

  return (
    <main>
      <CheckoutForm />
    </main>
  );
};

export default Checkout;
