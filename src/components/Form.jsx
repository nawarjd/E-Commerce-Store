import { useState } from "react";

export default function Form({ onSubmit, initialValues }) {
  const [formData, setFormData] = useState(
    initialValues || { name: "", email: "", message: "" }
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-7xl m-auto py-6 px-5 absolute -top-[30%] left-1/2 transform -translate-x-1/2 max-sm:-top-1/6"
    >
      <div className="flex justify-between items-center max-lg:flex-col max-lg:gap-4 bg-black text-white shadow-md rounded-4xl px-16 py-9 max-sm:px-8">
        <h2 className="text-6xl font-bold text-white max-w-[560px] tracking-[5px] max-lg:self-start max-lg:max-w-full max-sm:text-5xl">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div className="flex flex-col gap-4 w-full max-w-sm max-lg:max-w-full">
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-full bg-white text-black placeholder:text-[#999] focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
          <button className="bg-white text-black font-medium w-full px-4 py-3 rounded-full text-[14px] cursor-pointer border border-black hover:bg-white hover:text-black transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </form>
  );
}
