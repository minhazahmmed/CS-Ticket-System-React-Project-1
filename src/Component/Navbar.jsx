import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-white shadow">
      <Container>
        <div className="flex justify-between items-center py-5 px-4">

          <div className="flex items-center gap-2">
            <h1 className="text-lg md:text-xl font-bold text-black">
              CS — Ticket System
            </h1>
          </div>

         
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-black font-medium">
              <li><a className="hover:border-b-2 hover:border-black" href="#">Home</a></li>
              <li><a className="hover:border-b-2 hover:border-black" href="#">FAQ</a></li>
              <li><a className="hover:border-b-2 hover:border-black" href="#">Changelog</a></li>
              <li><a className="hover:border-b-2 hover:border-black" href="#">Blog</a></li>
              <li><a className="hover:border-b-2 hover:border-black" href="#">Download</a></li>
              <li><a className="hover:border-b-2 hover:border-black" href="#">Contact</a></li>
            </ul>
            <button className="px-5 py-3 bg-gradient-to-r from-[#6b35e5] to-[#9d60f2] text-white text-lg font-semibold rounded-lg cursor-pointer">
              + New Ticket
            </button>
          </div>

       
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-4 shadow bg-white text-black rounded-lg w-[250px] right-0"
            >
              <li><a href="#">Home</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Contact</a></li>
              <li>
                <button className="mt-3 px-5 py-2 w-full bg-gradient-to-r from-[#6b35e5] to-[#9d60f2] text-white text-lg font-semibold rounded-lg">
                  + New Ticket
                </button>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default Navbar;
