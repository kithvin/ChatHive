import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";

const HomePage = () => {
  // State to track if a user is selected for dynamic layout rendering
  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className="border w-full h-screen sm:px-[15%] sm:py-[5%]">
      {/* Main layout container with responsive padding and full screen height */}
      <div
        className={`backgrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative ${
          selectedUser
            ? "md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]"
            : "md:grid-cols-2"
        }`}
      >
        {/* Sidebar component : Handles user selection, navigation, or contact list*/}
        <Sidebar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        {/* ChatContainer component (center) */}
        <ChatContainer />
        {/* RightSidebar component (right) */}
        <RightSidebar />
      </div>
    </div>
  );
};

export default HomePage;
