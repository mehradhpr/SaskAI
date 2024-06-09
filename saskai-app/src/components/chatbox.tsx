"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="w-full max-w-2xl mx-auto mt-10">
      <CardHeader className="py-4 px-6 rounded-t-lg">
        <CardTitle className="text-xl font-semibold">Chat with SaskAI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 h-96 overflow-y-auto p-6">
        {messages.map((message, index) => (
          <Card
            key={index}
            className={`p-3 rounded-md ${
              message.sender === "bot" ? "" : "bg-primary text-primary-foreground"
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
          </Card>
        ))}
        {isTyping && (
          <Card className="p-3 rounded-md max-w-fit">
            <TypingIndicator />
          </Card>
        )}
      </CardContent>
      <CardFooter className="flex gap-2 p-6 rounded-b-lg">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-grow rounded-md px-4 py-2"
        />
        <Button onClick={handleSendMessage} className="">
          Ask
        </Button>
      </CardFooter>
    </Card>
  );
};

const TypingIndicator = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="typing-dot bg-primary rounded-full w-2 h-2 animate-bounce"></div>
      <div className="typing-dot bg-primary rounded-full w-2 h-2 animate-bounce delay-100"></div>
      <div className="typing-dot bg-primary rounded-full w-2 h-2 animate-bounce delay-200"></div>
    </div>
  );
};

export default ChatBox;
