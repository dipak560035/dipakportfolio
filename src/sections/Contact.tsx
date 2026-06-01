import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'console'>('form');
  const [consoleMessages, setConsoleMessages] = useState<any[]>([]);

  const quickTemplates = [
    { label: 'Hire for Project', text: 'Hi Dipak, I would love to discuss a potential full-stack project collaboration with you!' },
    { label: 'Job Opportunity', text: 'Hi Dipak, we are looking for a Full Stack Developer and would love to review your application.' },
    { label: 'General Query', text: 'Hi Dipak, I checked your portfolio and wanted to ask about...' },
  ];

  useEffect(() => {
    // Initial pre-loaded employer messages to simulate dynamic platform inquiries
    const defaultMessages = [
      {
        id: 'mock-1',
        sender: 'Emma Thompson',
        company: 'Google LLC (Mountain View)',
        subject: 'MERN & NextJS Technical Inquiry',
        body: 'Hello Dipak, we are looking for a Registered Computer Engineer with deep MERN stacks for a high-performance cloud portal project. Gantabya Mobility looks very impressive! Can we sync next week?',
        date: 'May 31, 2026',
        status: 'Unread'
      },
      {
        id: 'mock-2',
        sender: 'Marcus Chen',
        company: 'Meta Platform (APAC Partner)',
        subject: 'Registered Engineering Opportunity',
        body: 'Hi Dipak, I reviewed your board license status (#15998 Comp) and Bangalore CSE background. Your React performance numbers are exceptional. Let\'s schedule a talk!',
        date: 'May 30, 2026',
        status: 'Read'
      }
    ];

    const stored = localStorage.getItem('employer_messages');
    if (!stored) {
      localStorage.setItem('employer_messages', JSON.stringify(defaultMessages));
      setConsoleMessages(defaultMessages);
    } else {
      setConsoleMessages(JSON.parse(stored));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const selectTemplate = (text: string) => {
    setForm((prev) => ({ ...prev, message: text, subject: 'Collaboration / Opportunity' }));
  };

  const validate = (): boolean => {
    const tempErrors: Partial<FormState> = {};
    if (!form.name.trim()) tempErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = 'Email is invalid.';
    }
    if (!form.subject.trim()) tempErrors.subject = 'Subject is required.';
    if (!form.message.trim()) tempErrors.message = 'Message is required.';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Mock API submission lag
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Fire confetti celebration!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'],
      });

      // Save sent message to localStorage for Console Inbox syncing
      const newMessage = {
        id: Math.random().toString(),
        sender: form.name,
        company: 'External Recruiter / Employer',
        subject: form.subject,
        body: form.message,
        date: new Date().toLocaleDateString(),
        status: 'Sent Successfully'
      };

      const stored = localStorage.getItem('employer_messages');
      const currentList = stored ? JSON.parse(stored) : [];
      const updatedList = [newMessage, ...currentList];
      localStorage.setItem('employer_messages', JSON.stringify(updatedList));
      setConsoleMessages(updatedList);

      // Reset form
      setForm({ name: '', email: '', subject: '', message: '' });
      
      // Fade success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: '100px 0',
        zIndex: 1,
        backgroundColor: 'var(--bg-secondary)',
        transition: 'background-color var(--transition-normal)',
      }}
    >
      <div className="blur-blob blob-2" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">
            Let's Start a <span>Project</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to build a platform, hire an engineer, or ask a technical question, reach out.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          className="contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Info & Map */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
              Contact Details
            </h3>

            {/* Direct Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div style={{ color: 'var(--primary)', backgroundColor: 'rgba(59, 130, 246, 0.08)', padding: '0.6rem', borderRadius: '10px', display: 'flex' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Phone</p>
                  <a href="tel:+9779805104098" style={{ fontSize: '1rem', fontWeight: 600 }}>+977-9805104098</a>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div style={{ color: 'var(--secondary)', backgroundColor: 'rgba(139, 92, 246, 0.08)', padding: '0.6rem', borderRadius: '10px', display: 'flex' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:dipaksah2070@gmail.com" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--primary)' }}>
                    dipaksah2070@gmail.com
                  </a>
                </div>
              </div>

              <div
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div style={{ color: 'var(--accent)', backgroundColor: 'rgba(6, 182, 212, 0.08)', padding: '0.6rem', borderRadius: '10px', display: 'flex' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontSize: '1rem', fontWeight: 600 }}>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* Mock Vector Map Graphic */}
            <div
              className="glass-card"
              style={{
                height: '220px',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'var(--bg-tertiary)',
                border: '1px solid var(--card-border)',
              }}
            >
              {/* Simplistic stylized map canvas placeholder */}
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  opacity: 0.15,
                  backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 0)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--primary)',
                    boxShadow: '0 0 15px var(--primary)',
                    animation: 'pulse-glow 2s infinite',
                  }}
                />
                <p style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.5px' }}>
                  KATHMANDU, NEPAL
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                  Working remotely & worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form & Recruiter Dashboard console */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem' }}>
              
              {/* Tab Navigation */}
              <div style={{ display: 'flex', borderBottom: '1px solid var(--card-border)', marginBottom: '1.5rem', gap: '1rem' }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('form')}
                  style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    background: 'transparent',
                    color: activeTab === 'form' ? 'var(--primary)' : 'var(--text-secondary)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    position: 'relative'
                  }}
                >
                  Compose Message
                  {activeTab === 'form' && (
                    <span style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '2px', backgroundColor: 'var(--primary)' }} />
                  )}
                </button>
                {/* <button
                  type="button"
                  onClick={() => setActiveTab('console')}
                  style={{
                    padding: '0.5rem 1rem',
                    border: 'none',
                    background: 'transparent',
                    color: activeTab === 'console' ? 'var(--accent)' : 'var(--text-secondary)',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    position: 'relative'
                  }}
                >
                  Recruiter Console
                  {activeTab === 'console' && (
                    <span style={{ position: 'absolute', bottom: '-1px', left: 0, right: 0, height: '2px', backgroundColor: 'var(--accent)' }} />
                  )}
                </button> */}
              </div>

              {activeTab === 'form' ? (
                <>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '1.25rem' }}>
                    Send Message
                  </h3>

                  {/* Form Input fields */}
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-row">
                      {/* Name */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handleInputChange}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--card-border)',
                            backgroundColor: 'rgba(0,0,0,0.15)',
                            color: 'var(--text-primary)',
                            transition: 'border-color var(--transition-fast)',
                          }}
                          placeholder="Your name"
                          className="input-focus-style"
                        />
                        {errors.name && <span style={{ fontSize: '0.75rem', color: '#EF4444' }}>{errors.name}</span>}
                      </div>

                      {/* Email */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleInputChange}
                          style={{
                            padding: '0.75rem 1rem',
                            borderRadius: '8px',
                            border: '1px solid var(--card-border)',
                            backgroundColor: 'rgba(0,0,0,0.15)',
                            color: 'var(--text-primary)',
                            transition: 'border-color var(--transition-fast)',
                          }}
                          placeholder="your.email@example.com"
                          className="input-focus-style"
                        />
                        {errors.email && <span style={{ fontSize: '0.75rem', color: '#EF4444' }}>{errors.email}</span>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="subject" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleInputChange}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--card-border)',
                          backgroundColor: 'rgba(0,0,0,0.15)',
                          color: 'var(--text-primary)',
                          transition: 'border-color var(--transition-fast)',
                        }}
                        placeholder="Project Inquiry, Job Proposal..."
                        className="input-focus-style"
                      />
                      {errors.subject && <span style={{ fontSize: '0.75rem', color: '#EF4444' }}>{errors.subject}</span>}
                    </div>

                    {/* Message */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={form.message}
                        onChange={handleInputChange}
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          border: '1px solid var(--card-border)',
                          backgroundColor: 'rgba(0,0,0,0.15)',
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-primary)',
                          resize: 'vertical',
                          transition: 'border-color var(--transition-fast)',
                        }}
                        placeholder="Tell me about your project details..."
                        className="input-focus-style"
                      />
                      {errors.message && <span style={{ fontSize: '0.75rem', color: '#EF4444' }}>{errors.message}</span>}
                    </div>

                    {/* Quick Suggestion Templates */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>OR SELECT A PRESET:</span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {quickTemplates.map((tpl, tIdx) => (
                          <button
                            key={tIdx}
                            type="button"
                            onClick={() => selectTemplate(tpl.text)}
                            style={{
                              fontSize: '0.75rem',
                              backgroundColor: 'rgba(255,255,255,0.03)',
                              border: '1px solid var(--card-border)',
                              borderRadius: '6px',
                              padding: '0.35rem 0.6rem',
                              cursor: 'pointer',
                              color: 'var(--text-secondary)',
                              transition: 'var(--transition-fast)',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.borderColor = 'var(--primary)';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.borderColor = 'var(--card-border)';
                              e.currentTarget.style.color = 'var(--text-secondary)';
                            }}
                          >
                            {tpl.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        marginTop: '0.5rem',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        opacity: isSubmitting ? 0.8 : 1,
                      }}
                    >
                      {isSubmitting ? (
                        'Transmitting Message...'
                      ) : (
                        <>
                          Send Message <Send size={18} />
                        </>
                      )}
                    </button>

                    {/* Success feedback */}
                    {isSuccess && (
                      <div
                        style={{
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          backgroundColor: 'rgba(16, 185, 129, 0.1)',
                          border: '1px solid rgba(16, 185, 129, 0.3)',
                          color: '#10B981',
                          fontSize: '0.88rem',
                          fontWeight: 600,
                          textAlign: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.5rem',
                        }}
                      >
                        <Sparkles size={16} /> Message sent successfully! Let's connect soon.
                      </div>
                    )}
                  </form>
                </>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)', marginBottom: '0.25rem' }}>
                    Recruiter Console
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Terminal monitor displaying all received recruiter communications, licensing alerts, and active job requests in local buffer.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '350px', overflowY: 'auto', paddingRight: '0.5rem' }}>
                    {consoleMessages.length === 0 ? (
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', padding: '2rem' }}>No messages logged in current buffer.</p>
                    ) : (
                      consoleMessages.map((msg) => (
                        <div
                          key={msg.id}
                          style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(255,255,255,0.02)',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.5rem'
                          }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <div>
                              <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)' }}>{msg.sender}</span>
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>({msg.company})</span>
                            </div>
                            <span
                              style={{
                                fontSize: '0.7rem',
                                padding: '0.15rem 0.4rem',
                                borderRadius: '4px',
                                backgroundColor: msg.status === 'Sent Successfully' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                color: msg.status === 'Sent Successfully' ? '#10B981' : '#3B82F6',
                                border: `1px solid ${msg.status === 'Sent Successfully' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
                                fontWeight: 600
                              }}
                            >
                              {msg.status}
                            </span>
                          </div>

                          <div style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600 }}>
                            Subject: {msg.subject}
                          </div>

                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                            {msg.body}
                          </p>

                          <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', alignSelf: 'flex-end' }}>
                            Received: {msg.date}
                          </span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input-focus-style:focus {
          border-color: var(--primary) !important;
          box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.15);
        }

        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
