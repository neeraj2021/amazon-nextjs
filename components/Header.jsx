import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <header>
      {/* Top nav*/}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>

        {/* Search */}
        <div className="hidden sm:flex rounded-md flex-grow cursor-pointer items-center h-10 bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 px-4 focus:outline-none flex-grow flex-shrink rounded-l-md"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p>Hello Neeraj Kumar</p>
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>

          <div className="link">
            <p className="font-extrabold md:text-sm">Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="relative link flex items-center">
            <span className="absolute top-0 md:right-10 h-4 w-4 bg-yellow-400 text-center text-black rounded-full font-bold right-0">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:inline hidden md:text-sm">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom nav */}
      <div className="flex space-x-3 p-2 pl-6 items-center bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="hidden lg:inline-flex link">Electronics</p>
        <p className="hidden lg:inline-flex link">Food & Grocery</p>
        <p className="hidden lg:inline-flex link">Prime</p>
        <p className="hidden lg:inline-flex link">Buy Again</p>
        <p className="hidden lg:inline-flex link">Shopper Toolkit</p>
        <p className="hidden lg:inline-flex link">Health & Personal</p>
      </div>
    </header>
  );
};

export default Header;
