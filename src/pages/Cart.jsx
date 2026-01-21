import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/context.jsx";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer.jsx";
import OrderSummary from "../components/OrderSummary.jsx";

export default function Cart() {
  const { cartProduct, setCartProduct , navHeight} = useContext(StoreContext);
  const [subtotal, setSubtotal] = useState(0);
  const [totalDiscounts, setTotalDiscounts] = useState(0);

  useEffect(() => {
    const originalTotal = cartProduct.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discountTotal = cartProduct.reduce((acc, item) => acc + ((item.price * item.discountPercentage / 100) * item.quantity), 0);
    setSubtotal(originalTotal - discountTotal);
    setTotalDiscounts(discountTotal)
  }, [cartProduct]);

  const deletItem = (id) => {
    const updatedCart = cartProduct.filter((item) => item.id !== id);
    setCartProduct(updatedCart);
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartProduct.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartProduct(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartProduct.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartProduct(updatedCart);
  };

  console.log(cartProduct);
  return (
    <>
      <div className="max-w-7xl m-auto px-6 max-md:px-4" style={{paddingTop: navHeight}}>
        <h1 className="text-[40px] mt-5 font-extrabold max-md:mb-1 max-md:text-[32px]">Your Cart</h1>
        <div className="flex items-start gap-5 max-md:flex-col">
          <div className="py-6 flex flex-col justify-center items-center gap-6 max-md:py-0 max-md:w-full">
            {cartProduct.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div className="px-6 py-5 border border-[#E6E6E6] rounded-4xl max-md:p-3.5 max-md:w-full">
                {cartProduct.map((item) => {
                  return (
                    <>
                      <div
                        className={`max-md:w-full pt-6 pb-6 first:pt-0 last:pb-0 max-md:pt-3.5 max-md:pb-3.5 first:max-md:pt-0 last:max-md:pb-0 ${
                          cartProduct.length > 1
                            ? "border-b border-[#E6E6E6] last:border-0"
                            : ""
                        }`}
                      >
                        <div className="flex gap-4 w-[667px] max-md:w-full max-md:gap-0.5">
                          <img
                            className="w-[124px] h-[124px] object-contain max-md:w-[99px] max-md:h-[99px]"
                            src={item?.image}
                            alt={`${item?.title} Image`}
                          />
                          <div className="flex flex-col justify-between items-center w-full py-2.5 max-md:py-0.5">
                            <div className="flex justify-between items-top w-full h-full">
                              {/* Product Title */}
                              <h3 className="font-bold text-[20px] max-md:text-[16px]">
                                {item?.title}
                              </h3>
                              {/* Delete Icon */}
                              <Icon
                                onClick={() => deletItem(item.id)}
                                icon="mdi:trash-can"
                                width={24}
                                className="cursor-pointer text-red-500 hover:text-red-700"
                              />
                            </div>
                            <div className="flex justify-between items-end w-full h-full">
                              {/* Product Price */}
                              <p className="font-bold text-2xl max-md:text-[20px]">
                                ${((item?.price * (1 - item.discountPercentage / 100)) * item.quantity).toFixed(2)}
                              </p>
                              {/* Quantity Controls */}
                              <div className="flex py-[7px] rounded-[62px] max-md:py-0">
                                <button
                                  onClick={() => decreaseQuantity(item.id)}
                                  className="font-serif text-[20px] font-black cursor-pointer pl-5 pr-3.5 bg-[#F0F0F0] rounded-bl-[62px] rounded-tl-[62px] hover:bg-[#c2c2c2]"
                                >
                                  -
                                </button>
                                <span className="text-[14px] leading-[30px] px-1.5 bg-[#F0F0F0]">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => increaseQuantity(item.id)}
                                  className="font-serif text-[20px] font-black cursor-pointer pr-5 pl-3.5 bg-[#F0F0F0] rounded-br-[62px] rounded-tr-[62px]  hover:bg-[#c2c2c2]"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
          {cartProduct.length > 0 && <OrderSummary subtotal={subtotal} totalDiscounts={totalDiscounts} />}
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
