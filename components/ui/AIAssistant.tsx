"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Send } from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "👋 Hi! I'm Shashika's AI assistant. How can I help you learn more about his work?",
    },
  ]);

  const quickResponses = [
    { label: "Skills", response: "Shashika specializes in Full Stack Development with React, Spring Boot, and Node.js. He's also proficient in DevOps tools like Docker, GitHub Actions, and cloud platforms like AWS and Azure." },
    { label: "Experience", response: "Shashika has interned at Aahaas Pvt Ltd as a Full Stack Developer and volunteered at Intendable. He's worked on enterprise applications, mobile apps, and microservices architectures." },
    { label: "Contact", response: "You can reach Shashika at ekanayakespm@gmail.com or call +94 717395361. Feel free to connect on LinkedIn or check out his GitHub for more projects!" },
  ];

  const handleQuickResponse = (response: string) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: response.split(":")[0] },
      { type: "bot", text: quickResponses.find((r) => r.label === response)?.response || "I'm here to help!" },
    ]);
  };

  const handleSend = () => {
    if (!message.trim()) return;
    
    setMessages((prev) => [
      ...prev,
      { type: "user", text: message },
      { type: "bot", text: "Thanks for your interest! Please scroll down to the contact section to get in touch with Shashika directly. 🚀" },
    ]);
    setMessage("");
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30 z-50 hover:shadow-xl hover:shadow-primary/40 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: isOpen ? 0 : 1, y: isOpen ? 100 : 0 }}
        aria-label="Open AI Assistant"
      >
        <Bot className="w-6 h-6" />
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.button>

      {/* Chat widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 w-[350px] max-w-[calc(100vw-48px)] z-50"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 border border-primary/20">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">AI Assistant</h4>
                    <p className="text-xs text-white/70">Always here to help</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label="Close assistant"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Messages */}
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                        msg.type === "user"
                          ? "bg-primary text-white rounded-tr-sm"
                          : "bg-white/10 text-foreground rounded-tl-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick responses */}
              <div className="px-4 pb-3 flex flex-wrap gap-2">
                {quickResponses.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleQuickResponse(item.label)}
                    className="px-3 py-1.5 text-xs rounded-full bg-primary/20 text-primary-light hover:bg-primary/30 transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  <button
                    onClick={handleSend}
                    className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center hover:bg-primary-light transition-colors"
                    aria-label="Send message"
                  >
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
