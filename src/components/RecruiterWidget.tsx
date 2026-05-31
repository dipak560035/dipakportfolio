import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  sender: 'recruiter' | 'user';
  text: string;
  timestamp: Date;
}

export const RecruiterWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // Synthesize a clean modern "notification chime" using Web Audio API (no external file dependency)
  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      
      // Tone 1
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      gain1.gain.setValueAtTime(0.08, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.start();
      osc1.stop(ctx.currentTime + 0.4);

      // Tone 2 (offset)
      setTimeout(() => {
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(880, ctx.currentTime); // A5
        gain2.gain.setValueAtTime(0.08, ctx.currentTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.45);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start();
        osc2.stop(ctx.currentTime + 0.5);
      }, 100);

    } catch (e) {
      console.warn('Audio play blocked or unsupported:', e);
    }
  };

  useEffect(() => {
    // Initial recruiter trigger after 4 seconds
    const timer = setTimeout(() => {
      const initialMsg: Message = {
        id: '1',
        sender: 'recruiter',
        text: "Hi Dipak! Sarah here from VeloTech. 🚀 I ran across your Gantabya Mobility EV platform and was really impressed by the Next.js/MERN stack architecture. Are you currently open to full-stack engineering contracts or remote job opportunities?",
        timestamp: new Date()
      };
      setMessages([initialMsg]);
      setHasNewMessage(true);
      playChime();
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to bottom on new messages
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleOpenWidget = () => {
    setIsOpen(true);
    setHasNewMessage(false);
  };

  const simulateRecruiterResponse = (userText: string) => {
    setIsTyping(true);

    // Context-aware typing lag
    setTimeout(() => {
      let reply = "";
      const query = userText.toLowerCase();

      if (query.includes('schedule') || query.includes('chat') || query.includes('call') || query.includes('interview')) {
        reply = "I'd love that! 📅 Let's definitely align schedules. You can write your contact info (email/phone) in the Contact Form right behind this chat, or shoot me a direct ping at recruiter@velotech.co. Does this week work for a 15-minute video sync?";
      } else if (query.includes('gantabya') || query.includes('project') || query.includes('mobility')) {
        reply = "Yes, Gantabya Mobility! The database indexing and stateful routes look very optimized. Did you build the real-time scheduling backend using Socket.io or REST endpoints? Let's discuss it further in a call!";
      } else if (query.includes('salary') || query.includes('rate') || query.includes('money')) {
        reply = "We offer competitive Silicon Valley-grade packages for intermediate/senior roles, typically ranging from $45k–$80k yearly depending on structure, or high contract rates. I'd love to review your full resume first!";
      } else if (query.includes('resume') || query.includes('cv')) {
        reply = "Perfect! Please download the resume from the Hero section, or submit a file request via the contact form. I will make sure our technical managers review it immediately!";
      } else {
        reply = "That sounds fantastic, Dipak! I can see you have solid foundations in clean architectures, Nest/Next.js, and Nepal Engineering Council standards. Fill out the Contact form below, and let's hop on a call to finalize details!";
      }

      const newMsg: Message = {
        id: Math.random().toString(),
        sender: 'recruiter',
        text: reply,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newMsg]);
      setIsTyping(false);
      playChime();
    }, 2000);
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    simulateRecruiterResponse(textToSend);
  };

  const selectQuickReply = (text: string) => {
    handleSendMessage(text);
  };

  return (
    <>
      {/* Floating Recruiter Button */}
      <div style={{ position: 'fixed', bottom: '95px', right: '30px', zIndex: 999 }}>
        <motion.button
          onClick={isOpen ? () => setIsOpen(false) : handleOpenWidget}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', delay: 2, stiffness: 200 }}
          style={{
            position: 'relative',
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(139, 92, 246, 0.4)',
          }}
          aria-label="Recruiter Message Sync Channel"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}

          {/* New message notification badge */}
          {hasNewMessage && !isOpen && (
            <span
              style={{
                position: 'absolute',
                top: '-2px',
                right: '-2px',
                width: '16px',
                height: '16px',
                backgroundColor: '#EF4444',
                border: '3px solid var(--bg-primary)',
                borderRadius: '50%',
                display: 'block',
                animation: 'pulse-glow 1.5s infinite',
              }}
            />
          )}
        </motion.button>
      </div>

      {/* Recruiter Chat Console Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 150 }}
            className="glass-panel"
            style={{
              position: 'fixed',
              bottom: '165px',
              right: '30px',
              width: 'min(380px, 90vw)',
              height: '480px',
              borderRadius: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-lg)',
              zIndex: 998,
              overflow: 'hidden',
              border: '1px solid rgba(139, 92, 246, 0.2)',
            }}
          >
            {/* Chat Header */}
            <div
              style={{
                padding: '1rem 1.25rem',
                borderBottom: '1px solid var(--card-border)',
                background: 'rgba(13, 13, 27, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {/* Recruiter Avatar */}
                <div style={{ position: 'relative' }}>
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      background: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.85rem',
                      fontWeight: 'bold',
                      color: 'white',
                    }}
                  >
                    S
                  </div>
                  {/* Status Indicator */}
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '0',
                      right: '0',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#10B981',
                      border: '2px solid #0d0d1b',
                      borderRadius: '50%',
                    }}
                  />
                </div>

                <div>
                  <h4 style={{ fontSize: '0.92rem', fontWeight: 700, margin: 0 }}>
                    Sarah Jenkins <Sparkles size={12} style={{ color: 'var(--accent)', display: 'inline' }} />
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: '#10B981', margin: 0, fontWeight: 600 }}>
                    Tech Recruiter • Active Now
                  </p>
                </div>
              </div>

              {/* Sound & Controls */}
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    padding: '0.2rem',
                  }}
                  title={soundEnabled ? 'Disable Sounds' : 'Enable Sounds'}
                >
                  {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    display: 'flex',
                    padding: '0.2rem',
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Chat Messages Log */}
            <div
              style={{
                flexGrow: 1,
                padding: '1.25rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: 'rgba(5, 5, 10, 0.3)',
              }}
            >
              {messages.length === 0 && (
                <div style={{ margin: 'auto', textAlign: 'center', color: 'var(--text-muted)' }}>
                  <p style={{ fontSize: '0.85rem' }}>Synchronizing chat stream...</p>
                </div>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  style={{
                    alignSelf: msg.sender === 'recruiter' ? 'flex-start' : 'flex-end',
                    maxWidth: '85%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: msg.sender === 'recruiter' ? 'flex-start' : 'flex-end',
                  }}
                >
                  {/* Bubble */}
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: msg.sender === 'recruiter' ? '2px 14px 14px 14px' : '14px 14px 2px 14px',
                      backgroundColor:
                        msg.sender === 'recruiter'
                          ? 'rgba(255, 255, 255, 0.05)'
                          : 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                      background: msg.sender === 'user' ? 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)' : undefined,
                      border: msg.sender === 'recruiter' ? '1px solid var(--card-border)' : 'none',
                      color: 'white',
                      fontSize: '0.88rem',
                      lineHeight: '1.4',
                      boxShadow: msg.sender === 'user' ? '0 4px 10px rgba(59,130,246,0.25)' : undefined,
                    }}
                  >
                    {msg.text}
                  </div>
                  {/* Meta */}
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.25rem', padding: '0 4px' }}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div style={{ alignSelf: 'flex-start', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <div
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '2px 12px 12px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--card-border)',
                      display: 'flex',
                      gap: '0.25rem',
                      alignItems: 'center',
                    }}
                  >
                    <span className="dot-typing" style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-muted)', borderRadius: '50%', display: 'inline-block', animation: 'bounce-dot 1.2s infinite' }} />
                    <span className="dot-typing" style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-muted)', borderRadius: '50%', display: 'inline-block', animation: 'bounce-dot 1.2s infinite 0.2s' }} />
                    <span className="dot-typing" style={{ width: '6px', height: '6px', backgroundColor: 'var(--text-muted)', borderRadius: '50%', display: 'inline-block', animation: 'bounce-dot 1.2s infinite 0.4s' }} />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies Panel */}
            {messages.length > 0 && messages[messages.length - 1].sender === 'recruiter' && !isTyping && (
              <div
                style={{
                  padding: '0.5rem 1rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  borderTop: '1px solid var(--card-border)',
                  background: 'rgba(10, 10, 20, 0.4)',
                }}
              >
                <button
                  onClick={() => selectQuickReply("Let's schedule a call! 📅")}
                  className="quick-reply-btn"
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(59, 130, 246, 0.08)',
                    color: 'var(--primary)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.6rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  Schedule call
                </button>
                <button
                  onClick={() => selectQuickReply('Tell me more about the role.')}
                  className="quick-reply-btn"
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(139, 92, 246, 0.08)',
                    color: 'var(--secondary)',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.6rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  Ask about role
                </button>
                <button
                  onClick={() => selectQuickReply('Can you review my Gantabya Mobility project?')}
                  className="quick-reply-btn"
                  style={{
                    fontSize: '0.75rem',
                    backgroundColor: 'rgba(6, 182, 212, 0.08)',
                    color: 'var(--accent)',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.6rem',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                >
                  Review project
                </button>
              </div>
            )}

            {/* Input Bar Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
              }}
              style={{
                display: 'flex',
                padding: '0.75rem 1rem',
                borderTop: '1px solid var(--card-border)',
                background: 'rgba(13, 13, 27, 0.95)',
                gap: '0.5rem',
              }}
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a message to Sarah..."
                style={{
                  flexGrow: 1,
                  border: '1px solid var(--card-border)',
                  backgroundColor: 'rgba(0,0,0,0.2)',
                  borderRadius: '10px',
                  padding: '0.5rem 0.8rem',
                  fontSize: '0.85rem',
                  color: 'white',
                }}
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || isTyping}
                style={{
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: inputVal.trim() ? 'pointer' : 'not-allowed',
                  opacity: inputVal.trim() ? 1 : 0.5,
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Embedded Animations Styling */}
      <style>{`
        @keyframes bounce-dot {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        
        .quick-reply-btn:hover {
          background-color: var(--primary) !important;
          color: white !important;
          transform: translateY(-1px);
        }
      `}</style>
    </>
  );
};
