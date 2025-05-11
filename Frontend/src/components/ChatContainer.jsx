import React, { useEffect, useRef } from "react";
import assets, { messagesDummyData } from "../assets/assets";
import { formatMessageTime } from "../library/utils";

// ChatContainer component receives selectedUser and setSelectedUser as props
const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  // useRef hook to reference the end of the message list for auto-scrolling
  const scrollEnd = useRef();

  // useEffect hook to scroll to the bottom of chat when component mounts
  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // If a user is selected, display the chat UI
  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* -------------------------- Chat Header --------------------------------- */}

      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={assets.profile_martin} alt="" className="w-8 rounded-full" />
        <p className="flex-1 text-lg text-white flex items-center gap-2">
          Martin Jonson
          {/* Online status indicator */}
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </p>

        {/* Close icon for mobile view */}
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt=""
          className="md:hidden max-w-7"
        />

        {/* Help icon for desktop view */}
        <img src={assets.help_icon} alt="" className="max-md:hidden max-w-5" />
      </div>

      {/* ------------------------ Message List --------------------------------- */}

      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesDummyData.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 justify-end ${
              msg.senderId !== "680f50e4f10f3cd28382ecf9" && "flex-row-reverse"
            }`}
          >
            {/* Render image if present in message */}

            {msg.image ? (
              <img
                src={msg.image}
                alt=""
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              // Render text message with conditional bubble styling

              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                  msg.senderId === "680f50e4f10f3cd28382ecf9"
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            )}

            {/* Avatar and timestamp */}

            <div className="text-center text-xs">
              <img
                src={
                  msg.senderId === "680f50e4f10f3cd28382ecf9"
                    ? assets.avatar_icon
                    : assets.profile_martin
                }
                alt=""
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">
                {formatMessageTime(msg.createdAt)}
              </p>{" "}
              {/* Format the message timestamp */}
            </div>
          </div>
        ))}

        {/* Dummy div to scroll into view at bottom of messages */}

        <div ref={scrollEnd}></div>
      </div>
    </div>
  ) : (
    // Show default UI if no user is selected
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} alt="" className="max-w-16" />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatContainer;
