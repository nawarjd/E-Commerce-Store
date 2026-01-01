import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <>
      {/* Hero section */}
      <div className="flex justify-center align-middle h-screen text-center px-[120px] text-blue-600 bg-[#F2F0F1] max-md:px-5 max-md:flex-col max-md:h-auto max-md:pt-12 gap-6">
        <div className="w-1/2 flex flex-col justify-center align-middle gap-4 text-left max-md:w-full">
          <h1 className="max-w-lg text-6xl font-bold max-md:max-w-full max-md:w-full max-md:text-5xl leading-none">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="max-w-[545px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to="/products" className="md:hidden rounded-full py-3.5 text-center cursor-pointer leading-none bg-blue-600 text-white">Shop Now</Link>
        </div>
        <div className="relative flex w-1/2 h-full overflow-hidden max-md:w-full">
          <img
            className="w-14 object-cover absolute left-0 top-1/2"
            src="/small_star.png"
            alt=""
          />
          {/* <img
            className="w-full mx-auto object-contain"
            src="/Rectangle 4.png"
            alt=""
          />     */}
          <img
            className="w-full mx-auto object-cover"
            src="/edited.png"
            alt=""
          />
          
          <img className="w-[104px] absolute right-0 top-1/6" src="/big_star.png" alt="" />
        </div>
      </div>
      {/* LOGOS */}
      <div className="bg-blue-600 flex flex-wrap justify-center align-middle p-6 gap-12 max-md:gap-6 max-md:px-0">
        <img
          className="max-w-[150px] object-contain max-md:max-w-26"
          src="/gucci-Vector.png"
          alt=""
        />
        <img
          className="max-w-[150px] object-contain max-md:max-w-26"
          src="/prada-Vector.png"
          alt=""
        />
        <img
          className="max-w-[75px] object-contain max-md:max-w-16"
          src="/zara-vec.png"
          alt=""
        />
        <img
          className="max-w-[150px] object-contain max-md:max-w-26"
          src="/calvin_klein.png"
          alt=""
        />
        <img
          className="max-w-[150px] object-contain max-md:max-w-26"
          src="/versace.png"
          alt=""
        />
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
}
