"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const ChatBox = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    const botResponse = await getBotResponse(input);
    setIsTyping(false);
    setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
  };

  const getBotResponse = async (message: string) => {
    // Replace this with an actual API call to your chatbot backend
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve("This is a sample response, the AI did not generate this text.");
      }, 1000);
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 border border-gray-300 shadow-2xl">
      <div className="py-4 px-6">
        <h2 className="text-xl font-semibold">Chat with SaskAI</h2>
      </div>
      <div className="space-y-4 h-96 overflow-y-auto p-6 border-b border-gray-300">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`px-4 py-2 border-2 ${
              message.sender === "bot" ? "border-gray-300" : "border-green-600"
            } max-w-fit`}
          >
            {message.sender === "bot" ? (
              <TypeAnimation
                splitter={(str) => str.split(/(?= )/)}
                sequence={[message.text, 10000000000000, ""]}
                speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                omitDeletionAnimation={true}
                style={{ fontSize: "1em", display: "block" }}
                repeat={0}
              />
            ) : (
              message.text
            )}
          </div>
        ))}
        {isTyping && (
          <div className="p-2 border border-gray-300 max-w-fit">
            <TypingIndicator />
          </div>
        )}
      </div>
      <div className="flex gap-2 p-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-grow border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="border border-primary bg-green-600 text-primary-foreground px-4 py-2 font-bold"
        >
          Ask
        </button>
      </div>
    </div>
  );
};

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="typing-dot bg-primary w-2 h-2 animate-bounce"></div>
      <div className="typing-dot bg-primary w-2 h-2 animate-bounce delay-100"></div>
      <div className="typing-dot bg-primary w-2 h-2 animate-bounce delay-200"></div>
    </div>
  );
};

export default ChatBox;
