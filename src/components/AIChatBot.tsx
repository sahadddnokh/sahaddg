import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Send, X, MessageSquare, CornerDownLeft, Sparkles, CheckCircle, Smartphone } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am Saadul Islam's elite AI Creative Representative. Ask me anything about his world-class branding, premium web design, SEO strategies, video editing packages, custom pricing, or book a design consultation immediately!"
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickReplies = [
    { label: "Hire Saadul via WhatsApp", action: "whatsapp" },
    { label: "View Saadul's Services", query: "What services does Saadul Islam offer?" },
    { label: "Pricing & Inquiries", query: "What are his project rates and customized pricing model?" },
    { label: "How to book an appointment?", query: "How can I book a design or marketing consultation?" },
    { label: "Location & Delivery", query: "Where is Saadul Islam based and how does he handle remote work?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const updatedMessages = [...messages, { role: "user" as const, content: textToSend }];
    setMessages(updatedMessages);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages })
      });

      if (!response.ok) {
        throw new Error("Failed to receive AI assistance.");
      }

      const data = await response.json();
      setMessages([...updatedMessages, { role: "assistant" as const, content: data.reply }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "I apologize, but my core neural bridge is busy. Please connect directly with Saadul on WhatsApp (01892661449) or try again in a moment!"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickReply = (reply: typeof quickReplies[0]) => {
    if (reply.action === "whatsapp") {
      window.open("https://wa.me/8801892661449?text=Hello%20Saadul,%20I%20am%20interested%20in%20your%20services!", "_blank");
      return;
    }
    if (reply.query) {
      handleSendMessage(reply.query);
    }
  };

  return (
    <div id="ai-chat-assistant" className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="chat-trigger"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex items-center justify-center w-16 h-16 rounded-none bg-amber-400 text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] cursor-pointer focus:outline-none border-2 border-black relative group"
          >
            <Bot size={28} className="transition-transform group-hover:rotate-12 duration-300" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-none h-4 w-4 bg-white border-2 border-black"></span>
            </span>
          </motion.button>
        )}

        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="w-[380px] sm:w-[420px] max-w-[calc(100vw-32px)] h-[580px] rounded-none bg-neutral-950 border-2 border-white shadow-[8px_8px_0px_0px_#D4AF37] flex flex-col overflow-hidden relative"
          >
            {/* Chat Header */}
            <div className="p-4 border-b-2 border-white/15 flex items-center justify-between bg-neutral-950">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-none bg-neutral-950 border-2 border-amber-400 flex items-center justify-center">
                  <Bot size={22} className="text-amber-400 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-display font-black text-white flex items-center gap-1.5 text-sm uppercase tracking-tight">
                    Saadul Islam AI <Sparkles size={14} className="text-amber-400" />
                  </h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] text-neutral-400 font-mono font-bold tracking-wider uppercase">ONLINE BRAND AGENT</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-none bg-neutral-950 border-2 border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-3.5 rounded-none text-xs leading-relaxed border-2 ${
                      msg.role === "user"
                        ? "bg-neutral-950 border-amber-400 text-neutral-100 shadow-[2px_2px_0px_0px_#D4AF37]"
                        : "bg-neutral-950 border-white/10 text-neutral-300 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.02)]"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                    <span className="block text-[8px] text-neutral-500 mt-2 font-mono text-right font-bold uppercase tracking-wider">
                      {msg.role === "user" ? "CLIENT" : "SAADUL AI"}
                    </span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-950 border-2 border-white/10 p-3 rounded-none max-w-[85%] flex items-center gap-1.5 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.01)]">
                    <span className="w-2 h-2 rounded-none bg-amber-400/80 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-none bg-amber-400/80 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-none bg-amber-400/80 animate-bounce" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies Tray */}
            <div className="px-4 py-2 border-t-2 border-white/10 bg-neutral-950">
              <div className="flex gap-2 overflow-x-auto pb-1.5 scrollbar-none mask-gradient no-scrollbar">
                {quickReplies.map((reply, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickReply(reply)}
                    className="flex-shrink-0 px-3 py-1.5 text-[10px] font-mono font-bold uppercase rounded-none bg-neutral-950 border-2 border-white/10 hover:border-amber-400 hover:bg-amber-400/5 text-neutral-300 hover:text-amber-400 transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap"
                  >
                    {reply.action === "whatsapp" && <Smartphone size={12} className="text-emerald-400" />}
                    {reply.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputMessage);
              }}
              className="p-4 border-t-2 border-white/15 bg-neutral-950 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about pricing, video formats, SEO..."
                className="flex-1 bg-neutral-950 border-2 border-white/10 rounded-none px-4 py-3 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors font-sans font-semibold"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="w-11 h-11 rounded-none bg-amber-400 text-black border-2 border-black flex items-center justify-center hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] disabled:opacity-50 cursor-pointer transition-all"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
