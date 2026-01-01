import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="max-w-7xl m-auto bg-white shadow-2xs py-4 flex items-center justify-between px-5">
      {/* Logo */}
      <Link to="/" className="logo text-2xl font-bold text-blue-600">
        NJ.Store
      </Link>

      {/* Links */}
      <div className="flex items-center gap-6 text-blue-600 font-normal">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/supa">Supa</Link>
      </div>
    </nav>
  );
}
