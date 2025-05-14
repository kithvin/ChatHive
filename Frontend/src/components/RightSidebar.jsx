import React from "react";
import assets, { imagesDummyData } from "../assets/assets";

// RightSidebar component receives 'selectedUser' as a prop
const RightSidebar = ({ selectedUser }) => {
  return (
    selectedUser && ( // Only render if a user is selected
      <div
        className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${
          selectedUser ? "max-md:hidden" : "" // Hide on small screens if user is selected
        }`}
      >
        <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon} // Fallback to default avatar if no profilePic
            alt=""
            className="w-20 aspect-[1/1] rounded-full"
          />
          <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">
            <p className="w-2 h-2 rounded-full bg-green-500"></p>{" "}

            {/* Online status dot */}
            {selectedUser.fullName}
          </h1>

          {/* User Bio */}
          <p className="px-10 max-auto">{selectedUser.bio}</p>

          {/* Horizontal separator */}
          <hr className="border-[#ffffff50] my-4" />

          {/* Media Section */}
          <div className="px-5 text-xs">
            <p>Media</p>

            {/* Display media thumbnails */}
            <div className="mt-2 mx-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
              {imagesDummyData.map((url, index) => (
                <div
                  key={index}
                  onClick={() => window.open(url)} // Open full image in new tab on click
                  className="cursor-pointer rounded"
                >
                  <img src={url} alt="" className="h-full rounded-md" />
                </div>
              ))}
            </div>
          </div>

          {/* Logout Button - Positioned absolutely near the bottom */}
          <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer mb-2">
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default RightSidebar;
