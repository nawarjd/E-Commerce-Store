import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import { useContext } from "react";
import { StoreContext } from "../context/context.jsx";
import StarRating from "../components/StarRating.jsx";
import Footer from "../components/Footer.jsx";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, quantity, setQuantity } = useContext(StoreContext);
  const [selectedImage, setSelectedImage] = useState(0);
  // const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        // console.log(data);
        setLoading(false);
        setQuantity(1);
      });
  }, [id]);

  if (loading)
    return (
      <HashLoader
        color="#000"
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
    );
  if (!product)
    return <h2 className="text-center text-4xl">Product not found</h2>;

  return (
    <>
      <div className="max-w-7xl m-auto py-6 px-5 max-md:px-6 flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="flex flex-wrap justify-center w-full md:w-1/2">
          <img
            src={product?.images[selectedImage]}
            className="max-md:w-[300px] md:aspect-9/5 aspect-9/9 object-contain"
          />
          <div className="flex flex-wrap justify-center gap-1 mt-3">
            {product?.images.length > 1 &&
              product?.images.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl}
                  className="max-w-[115px] md:max-w-20 aspect-square object-contain cursor-pointer hover:border border-blue-600 rounded-md"
                  onClick={() => setSelectedImage(index)}
                />
              ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <h1 className="text-[40px] font-semibold mb-3.5">{product?.title}</h1>
          <div className="flex items-center mb-3.5 gap-2.5">
            <StarRating rating={product?.rating} />
            <p>{product?.rating.toFixed(1)}/5</p>
          </div>
          <h3 className="text-[32px] font-medium mb-3.5 flex items-center gap-3">
            $
            {(
              product?.price -
              (product?.price * product?.discountPercentage.toFixed(2)) / 100
            ).toFixed(2)}{" "}
            <span className="line-through text-[#B3B3B3]">
              ${product?.price}
            </span>
            <span className="text-[16px] bg-red-100 py-3.5 px-1.5 rounded-full text-[#FF3333]">
              -{product?.discountPercentage}%
            </span>
          </h3>
          <p className="text-[#666666] mb-3.5">{product?.description}</p>
          <hr className="text-gray-400 mb-3.5" />
          <div className="flex gap-5 ">
            <div className="flex rounded-[62px]">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev == 1 ? prev : prev - 1))
                }
                className="font-serif text-[20px] font-black cursor-pointer pl-5 pr-3.5 bg-[#F0F0F0] rounded-bl-[62px] rounded-tl-[62px] hover:bg-[#c2c2c2]"
              >
                -
              </button>
              <span className="text-[16px] leading-[30px] px-7 py-[11px] bg-[#F0F0F0] max-md:px-3.5 max-md:py-2">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                className="font-serif text-[20px] font-black cursor-pointer pr-5 pl-3.5 bg-[#F0F0F0] rounded-br-[62px] rounded-tr-[62px]  hover:bg-[#c2c2c2]"
              >
                +
              </button>
            </div>
            <button
              onClick={() =>
                addToCart(
                  product.id,
                  product.title,
                  product.thumbnail,
                  product.price,
                  product.discountPercentage,
                  quantity
                )
              }
              className="bg-black px-[54px] py-2 cursor-pointer hover:bg-gray-800 text-white rounded-full max-md:px-5 max-md:w-full"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
// #FFC633
