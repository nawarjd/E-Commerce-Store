import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const overlayMenuStyles = {
    position: "fixed",
    top: "60px",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
    padding: "10px 0",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    fontSize: "20px",
  }
  return (
    <nav className="max-w-7xl m-auto bg-white shadow-2xs py-4 flex items-center justify-between px-5">
      {/* Logo */}
      <Link to="/" className="logo text-2xl font-bold text-blue-600">
        NJ.Store
      </Link>

      {/* Links */}
      <div className={`flex items-center gap-6 text-blue-600 font-normal ${showMenu ? "" : "max-md:hidden"}`}
      style={showMenu ? overlayMenuStyles : {}}
      >
        <Link onClick={() => setShowMenu(false)} to="/">Home</Link>
        <Link onClick={() => setShowMenu(false)} to="/products">Products</Link>
        <Link onClick={() => setShowMenu(false)} to="/cart">Cart</Link>
        <Link onClick={() => setShowMenu(false)} to="/supa">Supa</Link>
      </div>
      <Icon
          icon="mdi:menu"
          width={28}
          className="cursor-pointer text-blue-600 hover:text-blue-800 md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
    </nav>
  );
}
