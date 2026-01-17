import { useEffect, useState, useMemo } from "react";
import { data, Link } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { Icon } from "@iconify/react";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import StarRating from "../components/StarRating.jsx";
import Form from "../components/Form.jsx";
import Footer from "../components/Footer.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState([50, 200]);
  const [colorSwatches, setColorSwatches] = useState([
    {
      id: 1,
      title: "Green",
      color: "bg-[#00C12B]",
      checked: false,
    },
    {
      id: 2,
      title: "Red",
      color: "bg-[#F50606]",
      checked: false,
    },
    {
      id: 3,
      title: "Yellow",
      color: "bg-[#F5DD06]",
      checked: false,
    },
    {
      id: 4,
      title: "Orange",
      color: "bg-[#F57906]",
      checked: false,
    },
    {
      id: 5,
      title: "Sky Blue",
      color: "bg-[#06CAF5]",
      checked: false,
    },
    {
      id: 6,
      title: "Blue",
      color: "bg-[#063AF5]",
      checked: true,
    },
    {
      id: 7,
      title: "Purple",
      color: "bg-[#7D06F5]",
      checked: false,
    },
    {
      id: 8,
      title: "Pink",
      color: "bg-[#F506A4]",
      checked: false,
    },
    {
      id: 9,
      title: "White",
      color: "bg-[#ffffff]",
      checked: false,
    },
    {
      id: 10,
      title: "Black",
      color: "bg-[#000000]",
      checked: false,
    },
  ]);
  const [sizeButtons, setSizeButtons] = useState([
    {
      id: 1,
      title: "XX-Small",
      checked: false,
    },
    {
      id: 2,
      title: "X-Small",
      checked: false,
    },
    {
      id: 3,
      title: "Small",
      checked: false,
    },
    {
      id: 4,
      title: "Medium",
      checked: false,
    },
    {
      id: 5,
      title: "Large",
      checked: true,
    },
    {
      id: 6,
      title: "X-Large",
      checked: false,
    },
    {
      id: 7,
      title: "XX-Large",
      checked: false,
    },
    {
      id: 8,
      title: "3X-Large",
      checked: false,
    },
    {
      id: 9,
      title: "4X-Large",
      checked: false,
    },
  ]);
  const [showMenu, setShowMenu] = useState(false);
  const [appliedValue, setAppliedValue] = useState(value);

  const filteredProducts = useMemo(() => {
    const [min, max] = appliedValue;
    return products.filter((p) => p?.price >= min && p?.price <= max);
  }, [products, appliedValue]);

  const applyFilters = () => setAppliedValue(value);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleColorChange = (id) => {
    setColorSwatches((prev) =>
      prev.map((swatch) => ({
        ...swatch,
        checked: swatch.checked && !swatch.checked,
      }))
    );
    setColorSwatches((prev) =>
      prev.map((swatch) => ({
        ...swatch,
        checked: swatch.id === id ? !swatch.checked : swatch.checked,
      }))
    );
  };

  const handleSizeChange = (id) => {
    setSizeButtons((prev) =>
      prev.map((size) => ({
        ...size,
        checked: size.checked && !size.checked,
      }))
    );
    setSizeButtons((prev) =>
      prev.map((size) => ({
        ...size,
        checked: size.id === id ? !size.checked : size.checked,
      }))
    );
  };

  return (
    <>
      <HashLoader
        loading={loading}
        color="#000"
        cssOverride={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        }}
      />
      {!loading && (
        <>
        <div className="flex gap-5 max-w-7xl m-auto py-6 px-5 max-md:px-6 relative">
          <div
            className={`flex flex-col gap-6 w-full bg-white max-w-[295px] h-fit py-5 px-6 border border-[#E6E6E6] rounded-4xl ${
              showMenu ? "max-lg:flex" : "max-lg:hidden"
            } max-lg:fixed max-lg:max-w-2xl max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-3/6 max-lg:h-dvh`}
          >
            {/* Filters */}
            <div className="flex justify-between">
              <h3 className="text-[20px] font-bold">Filters</h3>
              {/* for desktop not clickable */}
              <Icon
                width={24}
                icon="mdi:mixer-settings-vertical"
                color="#999999"
                className="max-lg:hidden"
              />
              {/* on mobile & clickable */}
              <Icon
                width={24}
                icon="mdi:mixer-settings-vertical"
                color="#999999"
                className="lg:hidden cursor-pointer"
                onClick={()=>setShowMenu(false)}
              />
            </div>
            <hr className="text-[#E6E6E6]" />
            {/* product type */}
            <div className="flex flex-col gap-5">
              <a className="flex justify-between text-[#666]" href="#">
                T-shirt <Icon width={24} icon="mdi:chevron-right" />
              </a>
              <a className="flex justify-between text-[#666]" href="#">
                Shorts <Icon width={24} icon="mdi:chevron-right" />
              </a>
              <a className="flex justify-between text-[#666]" href="#">
                Shirts <Icon width={24} icon="mdi:chevron-right" />
              </a>
              <a className="flex justify-between text-[#666]" href="#">
                Hoodie <Icon width={24} icon="mdi:chevron-right" />
              </a>
              <a className="flex justify-between text-[#666]" href="#">
                Jeans <Icon width={24} icon="mdi:chevron-right" />
              </a>
            </div>
            <hr className="text-[#E6E6E6]" />
            {/* Price Range */}
            <div className="flex flex-col gap-5">
              <Label htmlFor="slider" className="text-[20px] font-bold">
                Price
              </Label>
              <Slider
                id="slider"
                max={5000}
                min={0}
                onValueChange={setValue}
                value={value}
              />
              <div className="flex items-center justify-between text-muted-foreground text-sm">
                <span>${value[0]}</span>
                <span>${value[1]}</span>
              </div>
            </div>
            <hr className="text-[#E6E6E6]" />
            {/* Colors */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] font-bold">Colors</h3>
              <div className="flex flex-wrap gap-[15px]">
                {colorSwatches.map((swatch) => (
                  <div
                    key={swatch.id}
                    className={`w-9 h-9 rounded-full ${swatch.color} border-2 border-black/20 cursor-pointer flex justify-center items-center`}
                    onClick={() => handleColorChange(swatch.id)}
                  >
                    {swatch.checked && (
                      <Icon
                        width={16}
                        icon="mdi:check-bold"
                        color={
                          swatch.color == "bg-[#ffffff]" ? "#000000" : "#ffffff"
                        }
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <hr className="text-[#E6E6E6]" />
            {/* Size */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] font-bold">Size</h3>
              <div className="flex flex-wrap gap-2">
                {sizeButtons.map((size) => (
                  <button
                    key={size.id}
                    className={`px-5 py-2.5 border rounded-full cursor-pointer hover:bg-black hover:text-white transition ${
                      size.checked
                        ? "bg-black text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => handleSizeChange(size.id)}
                  >
                    {size.title}
                  </button>
                ))}
              </div>
            </div>
            <hr className="text-[#E6E6E6]" />
            {/* Dress Style */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[20px] font-bold">Dress Style</h3>
              <div className="flex flex-col gap-5">
                <a className="flex justify-between text-[#666]" href="#">
                  Casual <Icon width={24} icon="mdi:chevron-right" />
                </a>
                <a className="flex justify-between text-[#666]" href="#">
                  Formal <Icon width={24} icon="mdi:chevron-right" />
                </a>
                <a className="flex justify-between text-[#666]" href="#">
                  Party <Icon width={24} icon="mdi:chevron-right" />
                </a>
                <a className="flex justify-between text-[#666]" href="#">
                  Gym <Icon width={24} icon="mdi:chevron-right" />
                </a>
                <button onClick={applyFilters} className="w-full bg-black text-white px-14 py-4 rounded-full text-[14px] cursor-pointer border border-black hover:bg-white hover:text-black transition">
                  Apply Filtre
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full">
            {/* top section heading title */}
            <div className="flex justify-between items-center">
              <h2 className="text-[32px]">Casual</h2>
              <p className="flex gap-1 text-[16px] text-[#666666]">
                Showing {filteredProducts.length} of {products.length} Products{" "}
                <span className="max-lg:hidden">Sort by:</span>{" "}
                <span className="font-medium max-lg:hidden">Most Popular</span>{" "}
                <Icon
                  width={24}
                  icon="mdi:chevron-down"
                  className="cursor-pointer max-lg:hidden"
                />
                {/* Mobile filter icon */}
                <Icon
                  width={24}
                  icon="mdi:mixer-settings-vertical"
                  color="#999999"
                  className="lg:hidden cursor-pointer"
                  onClick={() => setShowMenu((prev) => !prev)}
                />
              </p>
            </div>
            {/* products grid */}
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5">
              {filteredProducts.length === 0 && (
                <p className="text-center col-span-full text-4xl font-semibold">
                  No products found in this price range.
                </p>
              )}
              {filteredProducts.map((product) => (
                <Link
                  to={`/products/${product.id}`}
                  className="rounded-2xl text-center flex flex-col justify-between align-middle gap-3.5"
                  key={product.id}
                >
                  <img
                    src={product.images[0]}
                    className="aspect-square w-full object-contain bg-[#F0EFED] rounded-2xl"
                  />
                  <div className="text-left flex flex-col gap-2">
                    <h3 className="text-[20px] font-bold">{product.title}</h3>
                    <div className="flex gap-2.5">
                      <StarRating rating={product.rating} />
                      <p>{product?.rating.toFixed(1)}/5</p>
                    </div>

                    <h3 className="text-2xl font-bold mb-3.5 flex items-center gap-3">
                      $
                      {(
                        product?.price -
                        (product?.price *
                          product?.discountPercentage.toFixed(2)) /
                          100
                      ).toFixed(2)}{" "}
                      <span className="line-through text-[#B3B3B3] font-medium">
                        ${product?.price}
                      </span>
                      <span className="text-[12px] bg-red-100 py-3.5 px-1.5 rounded-full text-[#FF3333] font-medium">
                        -{product?.discountPercentage}%
                      </span>
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            {/* pagination */}
            <hr className="text-[#E6E6E6]" />
            {/* <div></div> */}
           
          </div>
        </div>
         {/* Form */}
        {/* <Form className="absolute"/> */}
        {/* Footer */}
        <Footer />
        </>
      )}
    </>
  );
}
