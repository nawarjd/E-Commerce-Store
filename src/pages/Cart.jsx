import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/context.jsx";
import { Icon } from "@iconify/react";
import Footer from "../components/Footer.jsx";

export default function Cart() {
  const { cartItemID, cartProduct, setCartProduct } = useContext(StoreContext);

  const deletItem = (id) => {
    const updatedCart = cartProduct.filter((item) => item.id !== id);
    setCartProduct(updatedCart);
  };

  const editQuantity = (id, newQuantity) => {
    const updatedCart = cartProduct.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartProduct(updatedCart);
  };

  console.log(cartProduct);
  return (
    <>
      <div className="max-w-7xl m-auto py-6 px-5 max-md:px-6 flex flex-col justify-center items-center gap-6">
        <h1>Shopping Cart</h1>
        {cartProduct.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartProduct.map((item) => {
            return (
              <div className="px-6 py-5 border border-[#E6E6E6] rounded-4xl">
                <div className="flex gap-4 w-[667px]">
                  <img
                    className="w-[124px] h-[124px] object-contain"
                    src={item?.image}
                    alt={`${item?.title} Image`}
                  />
                  <div className="flex justify-between items-center w-full py-2.5">
                    <div className="flex flex-col justify-between h-full">
                      <h3 className="font-bold text-[20px]">{item?.title}</h3>
                      <p className="font-bold text-2xl">
                        ${(item?.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between h-full">
                      <Icon
                        onClick={() => deletItem(item.id)}
                        icon="mdi:trash-can"
                        width={24}
                        className="self-end cursor-pointer text-red-500 hover:text-red-700"
                      />
                      <div className="flex py-[7px] rounded-[62px]">
                        <button
                          onClick={() =>
                            editQuantity(item.id, item.quantity - 1)
                          }
                          className="font-serif text-[20px] font-black cursor-pointer pl-5 pr-3.5 bg-[#F0F0F0] rounded-bl-[62px] rounded-tl-[62px] hover:bg-[#c2c2c2]"
                        >
                          -
                        </button>
                        <span className="text-[14px] leading-[30px] px-1.5 bg-[#F0F0F0]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            editQuantity(item.id, item.quantity + 1)
                          }
                          className="font-serif text-[20px] font-black cursor-pointer pr-5 pl-3.5 bg-[#F0F0F0] rounded-br-[62px] rounded-tr-[62px]  hover:bg-[#c2c2c2]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
