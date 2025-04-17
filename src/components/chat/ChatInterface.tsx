"use client";

import { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  isStreaming?: boolean;
}

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm your AI assistant. I can help you analyze car listings and service history. What would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Format timestamp consistently
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  };

  // Update a specific message in the messages array
  const updateMessage = (id: string, updates: Partial<Message>) => {
    setMessages(prev =>
      prev.map(msg => msg.id === id ? { ...msg, ...updates } : msg)
    );
  };

  // Process a chunk of data from the stream
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const processChunk = (chunk: string, accumulatedResponse: string): string => {
    try {
      // Try parsing as JSON
      const jsonChunk = JSON.parse(chunk);
      if (jsonChunk.response) {
        return accumulatedResponse + jsonChunk.response;
      } else if (typeof jsonChunk === 'string') {
        return accumulatedResponse + jsonChunk;
      } else {
        return accumulatedResponse + JSON.stringify(jsonChunk);
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // Try parsing as server-sent event
      if (chunk.startsWith('data:')) {
        try {
          const jsonData = JSON.parse(chunk.substring(5).trim());
          if (jsonData.response) {
            return accumulatedResponse + jsonData.response;
          } else {
            return accumulatedResponse + JSON.stringify(jsonData);
          }
        } catch {
          return accumulatedResponse + chunk.substring(5).trim();
        }
      } else {
        // Use raw chunk as fallback
        return accumulatedResponse + chunk;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Create an AI response message with streaming indicator
      const aiMessageId = (Date.now() + 1).toString();
      setMessages(prev => [
        ...prev,
        {
          id: aiMessageId,
          content: "",
          role: "assistant",
          timestamp: new Date(),
          isStreaming: true
        }
      ]);

      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Update with a response
      updateMessage(aiMessageId, {
        content: "I'm happy to help with your car-related questions. Could you provide more details about what you're looking for?",
        isStreaming: false
      });
    } catch (error) {
      console.error("Error processing message:", error);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          content: "Sorry, there was an error processing your request. Please try again.",
          role: "assistant",
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="p-4 border-b border-gray-200 bg-white/50">
        <h3 className="text-lg font-semibold text-gray-900">Chat with AI Assistant</h3>
        <p className="text-sm text-gray-500">Ask questions about the car or service history</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs mt-1 opacity-70 flex items-center">
                {formatTime(message.timestamp)}
                {message.isStreaming && (
                  <span className="ml-2 flex space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse delay-150"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-pulse delay-300"></span>
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 bg-white/50">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500 px-4 py-2 text-sm"
            disabled={isLoading}
          />
          <button
            type="submit"
            className={`${
              isLoading ? "bg-purple-400" : "bg-purple-600 hover:bg-purple-700"
            } text-white rounded-lg px-4 py-2 transition-colors`}
            disabled={isLoading}
          >
            <Send size={16} />
          </button>
        </div>
      </form>
    </div>
  );
}
