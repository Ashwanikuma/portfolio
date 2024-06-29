import React, { useState } from "react";
import pic from "../images/dp.jpg";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Skills",
    },
    {
      id: 4,
      text: "Projects",
    },
    {
      id: 5,
      text: "Contacts",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-large cursor-pointer">
              Ashwan<span>i</span>
              <p>web developer</p>
            </h1>
          </div>

          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-110 duration:150 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
            <div
              onClick={() => setMenu(!menu)}
              className="md:hidden cursor-pointer"
            >
              {!menu ? <IoMenu size={26} /> : <IoClose size={26} />}
            </div>
          </div>
        </div>
        {menu && (
          <div>
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-4 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-110 font-semibold duration:150 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
