import Form from "./Form";

export default function Footer() {
  return (
    <footer className="bg-[#F0F0F0] text-black flex flex-col justify-center mt-40 relative max-sm:mt-60">
      <Form />
      <div className="flex flex-col gap-10 max-w-7xl mx-auto px-5 pt-[130px] max-xl:pt-36 max-sm:pt-[200px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          {/* Column 1 - Logo & Description */}
          <div>
            <h2 className="text-4xl font-bold mb-4">NJ.Store</h2>
            <p className="text-sm text-gray-400 mb-6">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="X" className="hover:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.207-6.807-5.974 6.807H2.882l7.532-8.614L1.505 2.25h6.969l4.734 6.267 5.454-6.267zM17.15 18.75h1.828L5.293 4.002H3.32L17.15 18.75z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a6 6 0 0 0-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h1z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path
                    d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    fill="black"
                  />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="hover:text-gray-300">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
          {/* Column 2 - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Career
                </a>
              </li>
            </ul>
          </div>
          {/* Column 3 - Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Column 4 - FAQ */}
          <div>
            <h3 className="text-lg font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Manage Deliveries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Payments
                </a>
              </li>
            </ul>
          </div>
          {/* Column 5 - Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-400 pb-2.5">
          <p>NJ.Store &copy; 2000-2025, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
