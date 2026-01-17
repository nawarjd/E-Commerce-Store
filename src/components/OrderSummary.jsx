import { Icon } from "@iconify/react";

export default function OrderSummary({ subtotal ,totalDiscounts }) {
  const deliveryFee = 15;
  const total = subtotal + deliveryFee;
  return (
    <div className="w-full py-6 max-md:py-0">
      <div className="flex flex-col gap-6 px-6 py-5 border border-[#E6E6E6] rounded-4xl max-md:p-5 max-md:w-full max-md:gap-4">
        <h2 className="text-2xl max-md:text-[20px]">Order Summary</h2>
        <div className="flex flex-col gap-5">

          <div className="flex justify-between items-center">
            <span className="text-[20px] text-[#666] max-md:text-[16px]">Subtotal</span>
            <span className="font-bold text-[20px] max-md:text-[16px]">${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[20px] text-[#666] max-md:text-[16px]">Discount</span>
            <span className="font-bold text-[20px] text-red-500 max-md:text-[16px]">-${totalDiscounts.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[20px] text-[#666] max-md:text-[16px]">Delivery Fee</span>
            <span className="font-bold text-[20px] max-md:text-[16px]">$15</span>
          </div>

          <hr />
          <div className="flex justify-between items-center">
            <span className="text-[20px] max-md:text-[16px]">Total</span>
            <span className="font-bold text-[24px] max-md:text-[20px]">${total.toFixed(2)}</span>
          </div>

        </div>
        {/* promo code */}
        <form className="flex flex-nowrap gap-3">
          <input
            type="text"
            className="w-full border border-[#E6E6E6] rounded-full px-4 py-3 text-[20px] max-md:w-2/3 max-md:text-[14px]"
            placeholder="Add promo code"
          />
          <button className="w-50 cursor-pointer bg-black text-white font-medium py-3 px-4 rounded-full text-[16px] hover:bg-gray-800 transition-colors max-md:w-1/3 max-md:text-[14px]">
            Apply
          </button>
        </form>
        {/* go to checkout BTN */}
        <button className="w-full flex justify-center items-center gap-3 cursor-pointer font-medium bg-black text-white py-3 px-4 rounded-full text-[20px] hover:bg-gray-800 transition-colors max-md:text-[14px]">
          Go to Checkout
          <Icon
            icon="mdi:arrow-right"
            width={24}
            className="cursor-pointer text-white"
          />
        </button>
      </div>
    </div>
  );
}
