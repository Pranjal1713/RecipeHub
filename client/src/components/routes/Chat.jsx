import React from "react";
// import Nav from "../Nav";
import { useState } from "react";
import Nav from "../Nav"; // Assuming Nav is in the same folder

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "Bot", text: "Hi there! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  // Function to handle sending messages
  const handleSendMessage = () => {
    if (input.trim()) {
      // Add user message
      setMessages((prev) => [
        ...prev,
        { id: prev.length + 1, sender: "User", text: input.trim() },
      ]);

      // Clear input field
      setInput("");

      // Simulate bot response (optional)
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            sender: "Bot",
            text: "Thanks for your message! 😊",
          },
        ]);
      }, 1000);
    }
  };

  // Function to handle keydown events
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Navigation */}
      <Nav />

      {/* Chat Container */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-[60%] mx-auto mt-10">
        {/* Chat Header */}
        <div className="text-center font-bold text-3xl text-gray-800">
          Chat with Us
        </div>

        {/* Chat Messages */}
        <div className="mt-4 h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "User" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`px-4 py-2 rounded-lg text-white ${
                  msg.sender === "User"
                    ? "bg-orange-500"
                    : "bg-blue-500 text-left"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown} // Trigger on Enter key press
            placeholder="Type your message..."
            className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Chat;



// import { useState } from "react";

// const Chat = () => {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "Bot", text: "Hi there! How can I assist you today?" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleSendMessage = () => {
//     if (input.trim()) {
//       setMessages((prev) => [
//         ...prev,
//         { id: prev.length + 1, sender: "User", text: input.trim() },
//       ]);
//       setInput("");
//     }
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Enter") {
//       if (input.trim()) {
//         setMessages((prev) => [
//           ...prev,
//           { id: prev.length + 1, sender: "User", text: input.trim() },
//         ]);
//         setInput("");
//       }
//     }
//   };

//   return (
//     <>
//       <Nav />

//       <div className="bg-white shadow-lg rounded-lg p-6 w-[60%] mx-auto mt-10">
//         {/* Chat Header */}
//         <div className="text-center font-bold text-3xl text-gray-800">
//           Chat with Us
//         </div>
//         <div className="mt-4 h-80 overflow-y-auto border border-gray-300 rounded-lg p-4 bg-gray-50">
//           {/* Chat Messages */}
//           {messages.map((msg) => (
//             <div
//               key={msg.id}
//               className={`flex ${
//                 msg.sender === "User" ? "justify-end" : "justify-start"
//               } mb-4`}
//             >
//               <div
//                 className={`px-4 py-2 rounded-lg text-white ${
//                   msg.sender === "User"
//                     ? "bg-orange-500"
//                     : "bg-blue-500 text-left"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Input Box */}
//         <div className="mt-4 flex items-center gap-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your message..."
//             className="flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />
//           <button
//             onClick={handleSendMessage}
//             onKeyDown={handleKeyDown}
//             className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Chat;
