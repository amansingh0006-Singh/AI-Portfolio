import { FaRobot, FaTimes } from "react-icons/fa";
import Draggable from "react-draggable";
import React, { useState, useRef, useEffect } from "react";



function ChatBot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      text: "Hi 👋 I'm Aman Singh AI Bot. How can I help you?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);


  useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages]);


  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      sender: "user",
    };

    let botReply = "I am still learning 🤖";

   const msg = input.toLowerCase().trim();

if (msg === "hi") {
   botReply = "Hello 👋 Welcome to Aman Portfolio";
}
else if (msg === "hire") {
   botReply = "You can hire Aman through the contact section 📩";
}

else if (msg === "skill") {
   botReply = "skill   You can hire Aman through the contact section 📩";
}
else if (msg === "skills") {
   botReply = "skill   You can hire Aman through the contact section 📩";
}
// else if (input.toLowerCase().includes("skills")) {
//   botReply = "Aman knows React, Python, FastAPI and SQL 🚀";
// }
else if (input.toLowerCase().includes("contact")) {
  botReply = "You can contact Aman using the contact form 📩";
}
else if (input.toLowerCase().includes("projects")) {
  botReply = "Check my Projects section 🚀";
}
else if (input.toLowerCase().includes("github")) {
  botReply = "My GitHub profile is available in portfolio links 🔥";
}

    const botMessage = {
      text: botReply,
      sender: "bot",
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);

    setInput("");
  };

  return (
    <>
      {/* CHAT ICON */}
    
        <div
          onClick={() => setOpen(!open)}
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            background: "#00d8ff",
            color: "#000",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            zIndex: "9999",
            fontSize: "25px",
            boxShadow: "0 0 15px #00d8ff",
          }}
        >
          {open ? <FaTimes /> : <FaRobot />}
        </div>
      

      {/* CHAT WINDOW */}
      {open && (
        
          <div
            style={{
              position: "fixed",
              bottom: "120px",
              right: "40px",
              width: "320px",
              height: "420px",
              background: "#111",
              border: "1px solid #00d8ff",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: "9999",
              boxShadow: "0 0 20px #00d8ff",
            }}
          >
            {/* HEADER */}
            <div
              style={{
                background: "#00d8ff",
                color: "#000",
                padding: "15px",
                fontWeight: "bold",
                textAlign: "center",
                cursor: "move",
              }}
            >
              Aman AI ChatBot 🤖
            </div>

            {/* MESSAGES */}
            <div
              style={{
                flex: 1,
                padding: "10px",
                overflowY: "auto",
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    textAlign:
                      msg.sender === "user" ? "right" : "left",
                    marginBottom: "10px",
                  }}
                  
                >
                  <span
                    style={{
                      background:
                        msg.sender === "user"
                          ? "#00d8ff"
                          : "#333",
                      color:
                        msg.sender === "user"
                          ? "#000"
                          : "#fff",
                      padding: "10px",
                      borderRadius: "10px",
                      display: "inline-block",
                      maxWidth: "80%",
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              

              <div ref={messagesEndRef}></div>

            </div>

            {/* INPUT */}
            <div
              style={{
                display: "flex",
                padding: "10px",
                borderTop: "1px solid #333",
              }}
            >
              <input
                type="text"
                placeholder="Type message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  border: "none",
                  outline: "none",
                  borderRadius: "5px",
                }}
              />

              <button
                onClick={sendMessage}
                style={{
                  marginLeft: "10px",
                  padding: "10px 15px",
                  background: "#00d8ff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Send
              </button>
            </div>
          </div>
        
      )}
    </>
  );
}

export default ChatBot;