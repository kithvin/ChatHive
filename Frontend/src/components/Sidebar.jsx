import React from "react";
import assets, { userDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

// Sidebar shows users list and menu options
const Sidebar = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();
  return (
    <div
      // Main sidebar container with scroll enabled and conditional hiding on small screens

      className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >
      {/* Top section: Logo and user menu */}
      <div className="pb-5">
        <div className="flex justify-between items-center">
          {/* Application logo */}
          <img src={assets.logo} alt="logo" className="max-w-40" />
          {/* User menu with profile and logout options */}
          <div className="relative py-2 group">
            <img
              src={assets.menu_icon}
              alt="Menu"
              className="max-h-5 cursor-pointer"
            />
            {/* Dropdown menu appears on hover */}
            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block">
              <p
                onClick={() => navigate("/profile")}
                className="cursor-pointer text-sm"
              >
                Edit Profile
              </p>
              <hr className="my-2 border-t border-gray-500" />
              {/* Logout option */}
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>
        {/* Search bar to filter users */}
        <div className="bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5">
          <img src={assets.search_icon} alt="Search" className="w-3" />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1"
            placeholder="Search User..."
          />
        </div>
      </div>

      {/* User list display */}
      <div className="flex flex-col">
        {/* Mapping over dummy data to show each user */}
        {userDummyData.map((user, index) => (
          // Set selected user when clicked
          <div
            onClick={() => {
              setSelectedUser(user);
            }}
            key={index}
            className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer max-sm:text-sm ${
              // Highlight selected user
              selectedUser?._id === user._id && "bg-[#282142]/50"
            }`}
          >
            {/* Display user profile image or default avatar */}
            <img
              src={user?.profilePic || assets.avatar_icon}
              alt=""
              className="w-[35px] aspect-[1/1] rounded-full"
            />

            {/* User's name and online/offline status */}
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {index < 3 ? (
                <span className="text-green-400 text-xs">Online</span>
              ) : (
                <span className="text-neutral-400 text-xs">Offline</span>
              )}
            </div>

            {/* Badge/notification counter for offline users */}
            {index > 2 && (
              <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">
                {index}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
