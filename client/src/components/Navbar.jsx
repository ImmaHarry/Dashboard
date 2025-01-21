import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-zinc-900 border-b border-zinc-800 h-16">
      {/* Search Bar */}
      <div className="flex items-center bg-zinc-800 rounded-md px-4 py-2 w-1/3">
        <BiSearch className="text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent focus:outline-none text-sm text-white ml-2 w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <IoMdNotificationsOutline className="text-gray-400 text-2xl cursor-pointer" />

        {/* Divider */}
        <div className="h-6 w-px bg-gray-700"></div>

        {/* Profile Picture */}
        <div className="w-8 h-8 rounded-full bg-gray-600">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="text-white text-sm">John Doe</h3>
          <p className="text-gray-400 text-xs">johndoe@llmonitor.org</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
