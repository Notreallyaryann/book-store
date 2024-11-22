
import React, { useState } from "react";
import Logo from "../../assets/website/logo.png";
import { FaCartShopping, FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Best Seller", link: "/#services" },
];

const DropdownLinks = [
  { name: "Trending Books", link: "/#" },
  { name: "Best Selling", link: "/#" },
  { name: "Authors", link: "/#" },
];

const Navbar = () => {
  const [isOrderPopupVisible, setIsOrderPopupVisible] = useState(false);

  const handleOrderPopup = () => {
    setIsOrderPopupVisible(!isOrderPopupVisible); // Toggle popup visibility
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
                <img src={Logo} alt="Logo" className="w-10" />
                Books
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <DarkMode />
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block py-4 px-4 hover:text-primary duration-200"
                    >
                      {menu.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown Menu */}
                <li className="group relative cursor-pointer">
                  <a href="/#home" className="flex h-[72px] items-center gap-[2px]">
                    Quick Links{" "}
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </a>
                  <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
                    <ul className="space-y-3">
                      {DropdownLinks.map((data) => (
                        <li key={data.name}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
              <button
                onClick={handleOrderPopup}
                className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3"
              >
                Order
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Order Popup */}
      {isOrderPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={handleOrderPopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">Your Order</h2>
            <p>Order content goes here...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
