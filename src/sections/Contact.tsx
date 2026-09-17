import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Terminal, CheckCircle2, AlertCircle, Database } from 'lucide-react';
import confetti from 'canvas-confetti';
import { submitContactMessage } from '../services/contactService';
import { isSupabaseConfigured } from '../lib/supabase';

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
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
    isLocalFallback?: boolean;
  }>({ type: null, message: '' });

  const quickPresets = [
    { label: 'Full-Stack Project', subject: 'Project Collaboration', text: 'Hi Dipak, I would love to discuss an upcoming full-stack web application project with you!' },
    { label: 'Engineering Role', subject: 'Engineering Opportunity', text: 'Hi Dipak, we are reviewing candidates for a Full Stack Developer position and would love to review your application.' },
    { label: 'General Inquiry', subject: 'Technical Query', text: 'Hi Dipak, I reviewed your developer portfolio and wanted to ask about...' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const selectPreset = (preset: { subject: string; text: string }) => {
    setForm((prev) => ({ ...prev, subject: preset.subject, message: preset.text }));
    setErrors({});
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitContactMessage({
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });

      if (result.success) {
        setIsSubmitting(false);
        setSubmitStatus({
          type: 'success',
          message: 'Message transmitted successfully! I will review your message and reply soon.',
          isLocalFallback: result.isLocalFallback,
        });

        // Fire celebration confetti
        try {
          confetti({
            particleCount: 120,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3B82F6', '#06B6D4', '#10B981', '#8B5CF6'],
          });
        } catch {
          // ignore confetti if blocked
        }

        // Reset form ONLY on success
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setIsSubmitting(false);
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to transmit message. Please try again.',
        });
      }
    } catch {
      setIsSubmitting(false);
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected connection error occurred.',
      });
    }
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
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal">
          <span className="section-tag">
            <Terminal size={14} /> // 05. Direct Connection
          </span>
          <h2 className="section-title">
            Let's Build <span>Something Useful</span>
          </h2>
          <p className="section-subtitle">
            Whether you want to build a platform, discuss engineering roles, or send a technical inquiry, leave a message.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div
          className="contact-grid-layout"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Direct Contact Info */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
              Direct Info & Location
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  backgroundColor: 'rgba(15, 22, 35, 0.85)',
                }}
              >
                <div
                  style={{
                    color: 'var(--primary)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    display: 'flex',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone</p>
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
                  backgroundColor: 'rgba(15, 22, 35, 0.85)',
                }}
              >
                <div
                  style={{
                    color: 'var(--accent)',
                    backgroundColor: 'rgba(6, 182, 212, 0.1)',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    display: 'flex',
                    border: '1px solid rgba(6, 182, 212, 0.2)',
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</p>
                  <a href="mailto:dipaksah2070@gmail.com" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent)' }}>
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
                  backgroundColor: 'rgba(15, 22, 35, 0.85)',
                }}
              >
                <div
                  style={{
                    color: 'var(--secondary)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                    padding: '0.65rem',
                    borderRadius: '8px',
                    display: 'flex',
                    border: '1px solid rgba(139, 92, 246, 0.2)',
                  }}
                >
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Location</p>
                  <p style={{ fontSize: '1rem', fontWeight: 600 }}>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            {/* Stylized Location Panel */}
            <div
              className="glass-card"
              style={{
                height: '200px',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#07090E',
                border: '1px solid var(--card-border)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.25,
                  backgroundImage: 'radial-gradient(rgba(6, 182, 212, 0.4) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
              />
              <div
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.4rem',
                  zIndex: 2,
                  textAlign: 'center',
                }}
              >
                <div className="status-dot-animated" />
                <p className="font-mono" style={{ fontSize: '0.9rem', fontWeight: 700, letterSpacing: '1px', color: 'var(--text-primary)' }}>
                  KATHMANDU, NEPAL
                </p>
                <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  // GMT+5:45 | Available Remote & Worldwide
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Production Contact Form */}
          <div className="reveal">
            <div
              className="glass-card"
              style={{
                padding: '2.25rem',
                backgroundColor: 'rgba(15, 22, 35, 0.9)',
                border: '1px solid var(--card-border)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1.25rem',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
                  Send Message
                </h3>

                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    color: isSupabaseConfigured ? '#10B981' : '#F59E0B',
                    backgroundColor: isSupabaseConfigured ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    border: `1px solid ${isSupabaseConfigured ? 'rgba(16, 185, 129, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Database size={12} />
                  {isSupabaseConfigured ? 'Supabase DB Connected' : 'Buffer Mode Active'}
                </span>
              </div>

              {/* Form Element */}
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem' }}
                  className="contact-form-row"
                >
                  {/* Name */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label
                      htmlFor="name"
                      className="font-mono"
                      style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name"
                      style={{
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        border: errors.name ? '1px solid #EF4444' : '1px solid var(--card-border)',
                        backgroundColor: '#07090E',
                        color: 'var(--text-primary)',
                        fontSize: '0.92rem',
                      }}
                      className="input-focus-tech"
                    />
                    {errors.name && (
                      <span style={{ fontSize: '0.74rem', color: '#EF4444' }}>{errors.name}</span>
                    )}
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label
                      htmlFor="email"
                      className="font-mono"
                      style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="name@company.com"
                      style={{
                        padding: '0.7rem 0.9rem',
                        borderRadius: '8px',
                        border: errors.email ? '1px solid #EF4444' : '1px solid var(--card-border)',
                        backgroundColor: '#07090E',
                        color: 'var(--text-primary)',
                        fontSize: '0.92rem',
                      }}
                      className="input-focus-tech"
                    />
                    {errors.email && (
                      <span style={{ fontSize: '0.74rem', color: '#EF4444' }}>{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label
                    htmlFor="subject"
                    className="font-mono"
                    style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Hiring Opportunity"
                    style={{
                      padding: '0.7rem 0.9rem',
                      borderRadius: '8px',
                      border: errors.subject ? '1px solid #EF4444' : '1px solid var(--card-border)',
                      backgroundColor: '#07090E',
                      color: 'var(--text-primary)',
                      fontSize: '0.92rem',
                    }}
                    className="input-focus-tech"
                  />
                  {errors.subject && (
                    <span style={{ fontSize: '0.74rem', color: '#EF4444' }}>{errors.subject}</span>
                  )}
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label
                    htmlFor="message"
                    className="font-mono"
                    style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project, timeline, or position details..."
                    style={{
                      padding: '0.75rem 0.9rem',
                      borderRadius: '8px',
                      border: errors.message ? '1px solid #EF4444' : '1px solid var(--card-border)',
                      backgroundColor: '#07090E',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-primary)',
                      fontSize: '0.92rem',
                      resize: 'vertical',
                    }}
                    className="input-focus-tech"
                  />
                  {errors.message && (
                    <span style={{ fontSize: '0.74rem', color: '#EF4444' }}>{errors.message}</span>
                  )}
                </div>

                {/* Quick Presets */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}
                  >
                    // Quick Presets:
                  </span>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {quickPresets.map((preset, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => selectPreset(preset)}
                        className="font-mono"
                        style={{
                          fontSize: '0.73rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid var(--card-border)',
                          borderRadius: '6px',
                          padding: '0.3rem 0.55rem',
                          cursor: 'pointer',
                          color: 'var(--text-secondary)',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        + {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    marginTop: '0.35rem',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.75 : 1,
                  }}
                >
                  {isSubmitting ? (
                    'Transmitting Message...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

                {/* Feedback Toast */}
                {submitStatus.type === 'success' && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#10B981',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      lineHeight: '1.5',
                    }}
                  >
                    <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                    <div>
                      <p>{submitStatus.message}</p>
                      {submitStatus.isLocalFallback && (
                        <span
                          className="font-mono"
                          style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.15rem' }}
                        >
                          (Stored in system local message buffer. Add Supabase env keys to sync to cloud database.)
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {submitStatus.type === 'error' && (
                  <div
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#EF4444',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <AlertCircle size={18} style={{ flexShrink: 0 }} />
                    <span>{submitStatus.message}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .input-focus-tech:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2) !important;
        }

        @media (min-width: 992px) {
          .contact-grid-layout {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
