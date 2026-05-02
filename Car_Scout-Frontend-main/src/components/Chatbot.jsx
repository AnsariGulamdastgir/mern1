import React, { useEffect, useRef, useState } from "react";
import API from "../api/Api";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  }, [isOpen]);

  // Open with greeting
  const handleOpen = () => {
    setIsOpen(true);
    if (!hasGreeted) {
      setMessages([
        {
          role: "bot",
          text: "Hi! 👋 I'm your **Car Assistant** powered by CarScout AI!\n\nI know everything about **60+ car models** across **10 major brands**. Ask me:\n\n🚗 About any car model\n⚡ Compare any two cars\n⛽ Fuel type guidance\n🛒 Buying & Selling tips\n💵 Budget recommendations\n\nWhat would you like to know? 🤔",
          time: new Date(),
        },
      ]);
      setHasGreeted(true);
    }
  };

  // Send message
  const sendMessage = async (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg = { role: "user", text: trimmed, time: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await API.post("/chat", { message: trimmed });
      const botReply = res.data.reply || "Sorry, I couldn't understand that.";
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: botReply, time: new Date() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Oops! I'm having trouble connecting. Please try again. 🔧",
          time: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => sendMessage(input);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Quick action handler
  const handleQuickAction = (text) => {
    sendMessage(text);
  };

  // Format **bold** markdown
  const formatText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="font-bold text-white">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const quickActions = [
    { label: "🚗 All Car Models", text: "Show all cars" },
    { label: "⚡ Compare Cars", text: "Compare cars" },
    { label: "🛒 Buying Tips", text: "Buying tips for used car" },
    { label: "💰 Selling Tips", text: "How to sell my car" },
    { label: "💵 Budget Cars", text: "Best car under 10 lakhs" },
    { label: "🛡️ Safest Cars", text: "Safest cars in India" },
    { label: "⛽ Fuel Guide", text: "Petrol or diesel which is better" },
    { label: "🏆 Best SUVs", text: "Best suv in India" },
  ];

  return (
    <>
      {/* ═══ FLOATING CHAT BUTTON ═══ */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #06b6d4, #10b981)",
            boxShadow: "0 8px 32px rgba(6, 182, 212, 0.45), 0 0 0 4px rgba(6,182,212,0.1)",
            transition: "all 0.3s ease",
            animation: "chatBtnPulse 2s infinite",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.12)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(6, 182, 212, 0.6), 0 0 0 6px rgba(6,182,212,0.15)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(6, 182, 212, 0.45), 0 0 0 4px rgba(6,182,212,0.1)";
          }}
          title="Chat with Car Assistant 🚗"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="30" height="30">
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
          </svg>

          {/* Animated ring */}
          <span
            style={{
              position: "absolute",
              inset: "-4px",
              borderRadius: "50%",
              border: "2px solid rgba(6, 182, 212, 0.4)",
              animation: "chatRingPulse 2s infinite",
            }}
          />
        </button>
      )}

      {/* ═══ CHAT WINDOW ═══ */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "#0b1120",
            boxShadow: "0 25px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(6,182,212,0.08)",
            width: "min(420px, calc(100vw - 32px))",
            height: "min(640px, calc(100vh - 100px))",
            animation: "chatWindowOpen 0.35s ease",
          }}
        >
          {/* ─── Header ─── */}
          <div
            style={{
              background: "linear-gradient(135deg, #0e7490, #059669)",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.15)",
                  backdropFilter: "blur(10px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ fontSize: "22px" }}>🚗</span>
              </div>
              <div>
                <h3
                  style={{
                    margin: 0,
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Car Assistant
                </h3>
                <p
                  style={{
                    margin: 0,
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "11px",
                    marginTop: "2px",
                  }}
                >
                  {isTyping ? (
                    <span style={{ color: "#a7f3d0" }}>● Typing...</span>
                  ) : (
                    "● Online — 60+ car models"
                  )}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                border: "none",
                background: "rgba(255,255,255,0.12)",
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              title="Minimize"
            >
              ✕
            </button>
          </div>

          {/* ─── Messages ─── */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.1) transparent",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                  animation: "chatMsgFade 0.3s ease",
                }}
              >
                {msg.role === "bot" && (
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "8px",
                      background: "linear-gradient(135deg, #0e7490, #059669)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginRight: "8px",
                      marginTop: "2px",
                      fontSize: "14px",
                    }}
                  >
                    🤖
                  </div>
                )}
                <div
                  style={{
                    maxWidth: "80%",
                    borderRadius: msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    padding: "12px 16px",
                    fontSize: "13px",
                    lineHeight: "1.7",
                    ...(msg.role === "user"
                      ? {
                          background: "linear-gradient(135deg, #0891b2, #0e7490)",
                          color: "white",
                        }
                      : {
                          background: "#111827",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#cbd5e1",
                        }),
                  }}
                >
                  <div style={{ whiteSpace: "pre-line" }}>{formatText(msg.text)}</div>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "10px",
                      textAlign: msg.role === "user" ? "right" : "left",
                      color: msg.role === "user" ? "rgba(255,255,255,0.5)" : "rgba(148,163,184,0.6)",
                    }}
                  >
                    {formatTime(msg.time)}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", animation: "chatMsgFade 0.3s ease" }}>
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: "linear-gradient(135deg, #0e7490, #059669)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "14px",
                    flexShrink: 0,
                  }}
                >
                  🤖
                </div>
                <div
                  style={{
                    borderRadius: "18px 18px 18px 4px",
                    padding: "14px 20px",
                    background: "#111827",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #06b6d4, #10b981)",
                        display: "inline-block",
                        animation: "chatDotBounce 1.2s infinite",
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* ─── Quick Actions ─── */}
          {messages.length <= 1 && (
            <div
              style={{
                padding: "10px 16px 6px",
                borderTop: "1px solid rgba(255,255,255,0.05)",
                background: "rgba(13,21,38,0.8)",
              }}
            >
              <p style={{ color: "#64748b", fontSize: "10px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Quick Actions
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {quickActions.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => handleQuickAction(q.text)}
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      border: "1px solid rgba(6,182,212,0.2)",
                      background: "rgba(6,182,212,0.08)",
                      color: "#67e8f9",
                      fontSize: "11px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(6,182,212,0.18)";
                      e.currentTarget.style.borderColor = "rgba(6,182,212,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(6,182,212,0.08)";
                      e.currentTarget.style.borderColor = "rgba(6,182,212,0.2)";
                    }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ─── Input Area ─── */}
          <div
            style={{
              padding: "12px 16px 14px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              background: "#0d1526",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about any car model..."
                disabled={isTyping}
                style={{
                  flex: 1,
                  padding: "12px 16px",
                  borderRadius: "14px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#111827",
                  color: "white",
                  fontSize: "13px",
                  outline: "none",
                  transition: "border 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(6,182,212,0.4)";
                  e.target.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.1)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.1)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                onClick={handleSend}
                disabled={isTyping || !input.trim()}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "14px",
                  border: "none",
                  background:
                    isTyping || !input.trim()
                      ? "rgba(255,255,255,0.05)"
                      : "linear-gradient(135deg, #06b6d4, #10b981)",
                  color: isTyping || !input.trim() ? "rgba(255,255,255,0.2)" : "white",
                  cursor: isTyping || !input.trim() ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  transition: "all 0.2s",
                  boxShadow:
                    isTyping || !input.trim()
                      ? "none"
                      : "0 4px 15px rgba(6,182,212,0.3)",
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>

            <p style={{ color: "#334155", fontSize: "10px", textAlign: "center", marginTop: "8px" }}>
              Powered by CarScout AI • 60+ Car Models
            </p>
          </div>
        </div>
      )}

      {/* ═══ ANIMATIONS ═══ */}
      <style>{`
        @keyframes chatBtnPulse {
          0%, 100% { box-shadow: 0 8px 32px rgba(6, 182, 212, 0.45), 0 0 0 4px rgba(6,182,212,0.1); }
          50% { box-shadow: 0 8px 32px rgba(6, 182, 212, 0.55), 0 0 0 8px rgba(6,182,212,0.08); }
        }
        @keyframes chatRingPulse {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }
        @keyframes chatWindowOpen {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes chatMsgFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes chatDotBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-6px); }
        }
      `}</style>
    </>
  );
};

export default Chatbot;
