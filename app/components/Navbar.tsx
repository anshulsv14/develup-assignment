import React from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-10">
          <Link href="/" className="text-2xl font-bold text-blue-500">
            Devel<span className="text-black">Up</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-black">
            <Link className="hover:text-blue-500" href="#">
              Post a job
            </Link>
            <Link className="hover:text-blue-500" href="#">
              Become a trainer
            </Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6 text-sm font-medium">
          <FiSearch className="text-gray-500 text-lg cursor-pointer" />

          <span className="hidden md:inline-block text-black hover:text-blue-500">
            Log in
          </span>

          <Button
            text="Get started"
            className="bg-gradient-to-r from-blue-300 to-blue-600"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
