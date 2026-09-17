import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Mail, ArrowRight, AlertCircle } from 'lucide-react';
import { adminLogin } from '../../services/authService';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      const res = await adminLogin(email, password);
      if (res.success) {
        setIsSubmitting(false);
        navigate('/admin/messages');
      } else {
        setIsSubmitting(false);
        setError(res.error || 'Authentication failed.');
      }
    } catch {
      setIsSubmitting(false);
      setError('An authentication error occurred.');
    }
  };

  return (
    <div
      style={{
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 1.5rem 60px',
      }}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '440px',
          padding: '2.5rem',
          backgroundColor: 'rgba(15, 22, 35, 0.9)',
          border: '1px solid var(--card-border)',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(6, 182, 212, 0.1)',
              border: '1px solid rgba(6, 182, 212, 0.25)',
              color: 'var(--accent)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
            }}
          >
            <ShieldCheck size={26} />
          </div>

          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
            Admin Portal Access
          </h2>
          <p
            className="font-mono"
            style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}
          >
            // Protected Contact Message Dashboard
          </p>
        </div>

        {error && (
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
              marginBottom: '1.25rem',
            }}
          >
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <label
              htmlFor="admin-email"
              className="font-mono"
              style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}
            >
              Admin Email / Username
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                id="admin-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="dipaksah2070@gmail.com"
                style={{
                  width: '100%',
                  padding: '0.7rem 0.9rem 0.7rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--card-border)',
                  backgroundColor: '#07090E',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                }}
                className="input-focus-tech"
              />
              <Mail
                size={16}
                style={{
                  position: 'absolute',
                  left: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            <label
              htmlFor="admin-password"
              className="font-mono"
              style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-secondary)' }}
            >
              Password
            </label>
            <div style={{ position: 'relative' }}>
              <input
                type="password"
                id="admin-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                style={{
                  width: '100%',
                  padding: '0.7rem 0.9rem 0.7rem 2.5rem',
                  borderRadius: '8px',
                  border: '1px solid var(--card-border)',
                  backgroundColor: '#07090E',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                }}
                className="input-focus-tech"
              />
              <Lock
                size={16}
                style={{
                  position: 'absolute',
                  left: '0.85rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--text-muted)',
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              width: '100%',
              marginTop: '0.5rem',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
            }}
          >
            {isSubmitting ? (
              'Authenticating...'
            ) : (
              <>
                Log In to Dashboard <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <div
          className="font-mono"
          style={{
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--card-border)',
            textAlign: 'center',
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
          }}
        >
          <p>// Secured via Supabase Auth & RLS Security</p>
        </div>
      </div>
    </div>
  );
};
