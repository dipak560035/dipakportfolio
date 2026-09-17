import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ShieldCheck,
  LogOut,
  Mail,
  Search,
  CheckCircle,
  Clock,
  Trash2,
  Eye,
  RefreshCw,
  X,
  Database,
} from 'lucide-react';
import {
  fetchContactMessages,
  updateMessageStatus,
  deleteMessage,
} from '../../services/contactService';
import type { ContactMessage } from '../../services/contactService';
import { checkAdminAuth, adminLogout } from '../../services/authService';
import type { AdminUser } from '../../services/authService';
import { isSupabaseConfigured } from '../../lib/supabase';

export const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'read'>('all');
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const navigate = useNavigate();

  const loadAuthAndData = async () => {
    setLoading(true);
    const session = await checkAdminAuth();
    if (!session || !session.isLoggedIn) {
      navigate('/admin/login');
      return;
    }
    setUser(session);

    const data = await fetchContactMessages();
    setMessages(data.messages);
    setLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    const init = async () => {
      const session = await checkAdminAuth();
      if (!session || !session.isLoggedIn) {
        navigate('/admin/login');
        return;
      }
      if (isMounted) {
        setUser(session);
        const data = await fetchContactMessages();
        setMessages(data.messages);
        setLoading(false);
      }
    };
    void init();
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const handleLogout = async () => {
    await adminLogout();
    navigate('/admin/login');
  };

  const handleToggleStatus = async (msg: ContactMessage) => {
    const nextStatus = msg.status === 'unread' ? 'read' : 'unread';
    const res = await updateMessageStatus(msg.id, nextStatus);

    if (res.success) {
      setMessages((prev) =>
        prev.map((m) => (m.id === msg.id ? { ...m, status: nextStatus } : m))
      );
      if (selectedMessage && selectedMessage.id === msg.id) {
        setSelectedMessage({ ...selectedMessage, status: nextStatus });
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this contact message?')) {
      return;
    }

    const res = await deleteMessage(id);
    if (res.success) {
      setMessages((prev) => prev.filter((m) => m.id !== id));
      if (selectedMessage && selectedMessage.id === id) {
        setSelectedMessage(null);
      }
    }
  };

  const handleOpenMessage = (msg: ContactMessage) => {
    setSelectedMessage(msg);
    if (msg.status === 'unread') {
      handleToggleStatus(msg);
    }
  };

  const filteredMessages = messages.filter((msg) => {
    const matchesSearch =
      msg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      msg.message.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      filterStatus === 'all' || msg.status === filterStatus;

    return matchesSearch && matchesFilter;
  });

  const unreadCount = messages.filter((m) => m.status === 'unread').length;

  if (loading) {
    return (
      <div
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          color: 'var(--text-secondary)',
        }}
      >
        <RefreshCw size={28} className="spin-animation" style={{ color: 'var(--accent)' }} />
        <p className="font-mono" style={{ fontSize: '0.9rem' }}>Loading Admin Security Session & Database Messages...</p>
        <style>{`
          @keyframes spin { 100% { transform: rotate(360deg); } }
          .spin-animation { animation: spin 1s linear infinite; }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '90vh',
        padding: '120px 0 60px 0',
        backgroundColor: 'var(--bg-primary)',
      }}
    >
      <div className="container">
        {/* Dashboard Header Bar */}
        <div
          className="glass-card"
          style={{
            padding: '1.5rem 2rem',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            backgroundColor: 'rgba(15, 22, 35, 0.9)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <div
              style={{
                backgroundColor: 'rgba(6, 182, 212, 0.1)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: 'var(--accent)',
                padding: '0.6rem',
                borderRadius: '10px',
              }}
            >
              <ShieldCheck size={22} />
            </div>
            <div>
              <h1 style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
                Contact Messages Dashboard
              </h1>
              <p className="font-mono" style={{ fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                Authenticated Admin: {user?.email}
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
            <button
              type="button"
              onClick={loadAuthAndData}
              className="btn btn-secondary"
              style={{ fontSize: '0.82rem', padding: '0.5rem 0.85rem' }}
            >
              <RefreshCw size={14} /> Refresh
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="btn btn-accent"
              style={{ fontSize: '0.82rem', padding: '0.5rem 0.85rem' }}
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        </div>

        {/* Database Status Alert */}
        {!isSupabaseConfigured && (
          <div
            style={{
              padding: '0.85rem 1.25rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              color: '#F59E0B',
              fontSize: '0.84rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Database size={16} />
              <span>
                <strong>System Local Buffer Mode Active:</strong> Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to sync submissions directly to your Supabase cloud database.
              </span>
            </div>
          </div>
        )}

        {/* Summary Metrics Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div
            className="glass-card"
            style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div
              style={{
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                padding: '0.75rem',
                borderRadius: '10px',
                color: 'var(--primary)',
              }}
            >
              <Mail size={22} />
            </div>
            <div>
              <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>TOTAL MESSAGES</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800 }}>{messages.length}</p>
            </div>
          </div>

          <div
            className="glass-card"
            style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            <div
              style={{
                backgroundColor: unreadCount > 0 ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                padding: '0.75rem',
                borderRadius: '10px',
                color: unreadCount > 0 ? '#EF4444' : '#10B981',
              }}
            >
              <Clock size={22} />
            </div>
            <div>
              <p className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>UNREAD MESSAGES</p>
              <p style={{ fontSize: '1.5rem', fontWeight: 800, color: unreadCount > 0 ? '#EF4444' : '#10B981' }}>
                {unreadCount}
              </p>
            </div>
          </div>
        </div>

        {/* Controls Bar: Search & Filter */}
        <div
          className="glass-card"
          style={{
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          {/* Search Box */}
          <div style={{ position: 'relative', flex: 1, minWidth: '240px' }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search messages by name, email, subject..."
              style={{
                width: '100%',
                padding: '0.6rem 0.85rem 0.6rem 2.4rem',
                borderRadius: '8px',
                border: '1px solid var(--card-border)',
                backgroundColor: '#07090E',
                color: 'var(--text-primary)',
                fontSize: '0.88rem',
              }}
              className="input-focus-tech"
            />
            <Search
              size={15}
              style={{
                position: 'absolute',
                left: '0.85rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
            />
          </div>

          {/* Filter Status Tabs */}
          <div
            style={{
              display: 'flex',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              padding: '0.2rem',
              borderRadius: '8px',
              border: '1px solid var(--card-border)',
            }}
          >
            <button
              type="button"
              onClick={() => setFilterStatus('all')}
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                background: filterStatus === 'all' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                color: filterStatus === 'all' ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              All ({messages.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('unread')}
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                background: filterStatus === 'unread' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                color: filterStatus === 'unread' ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              Unread ({unreadCount})
            </button>
            <button
              type="button"
              onClick={() => setFilterStatus('read')}
              className="font-mono"
              style={{
                fontSize: '0.75rem',
                padding: '0.35rem 0.75rem',
                borderRadius: '6px',
                border: 'none',
                background: filterStatus === 'read' ? 'rgba(6, 182, 212, 0.15)' : 'transparent',
                color: filterStatus === 'read' ? 'var(--accent)' : 'var(--text-muted)',
                cursor: 'pointer',
              }}
            >
              Read ({messages.length - unreadCount})
            </button>
          </div>
        </div>

        {/* Message Table / Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {filteredMessages.length === 0 ? (
            <div
              className="glass-card font-mono"
              style={{
                padding: '3rem 1.5rem',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
              }}
            >
              <Mail size={32} opacity={0.3} style={{ marginBottom: '0.5rem' }} />
              <p>No messages match your current filter criteria.</p>
            </div>
          ) : (
            filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className="glass-card"
                style={{
                  padding: '1.25rem 1.5rem',
                  backgroundColor: msg.status === 'unread' ? 'rgba(15, 22, 35, 0.95)' : 'rgba(11, 15, 23, 0.7)',
                  borderLeft: `4px solid ${msg.status === 'unread' ? 'var(--accent)' : 'var(--card-border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ flex: 1, minWidth: '260px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      {msg.name}
                    </span>
                    <a
                      href={`mailto:${msg.email}`}
                      className="font-mono"
                      style={{ fontSize: '0.8rem', color: 'var(--accent)' }}
                    >
                      &lt;{msg.email}&gt;
                    </a>
                    {msg.status === 'unread' && (
                      <span
                        className="font-mono"
                        style={{
                          fontSize: '0.68rem',
                          backgroundColor: 'rgba(6, 182, 212, 0.15)',
                          color: 'var(--accent)',
                          padding: '0.15rem 0.45rem',
                          borderRadius: '4px',
                          fontWeight: 700,
                        }}
                      >
                        UNREAD
                      </span>
                    )}
                  </div>

                  <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                    Subject: {msg.subject}
                  </p>

                  <p
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-muted)',
                      marginTop: '0.35rem',
                      lineHeight: '1.5',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {msg.message}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span
                    className="font-mono"
                    style={{ fontSize: '0.72rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}
                  >
                    {new Date(msg.created_at).toLocaleString()}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleOpenMessage(msg)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem' }}
                  >
                    <Eye size={14} /> View
                  </button>

                  <button
                    type="button"
                    onClick={() => handleToggleStatus(msg)}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.78rem', padding: '0.4rem 0.75rem' }}
                    title={msg.status === 'unread' ? 'Mark as Read' : 'Mark as Unread'}
                  >
                    <CheckCircle size={14} color={msg.status === 'read' ? '#10B981' : 'var(--text-muted)'} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(msg.id)}
                    style={{
                      padding: '0.45rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(239, 68, 68, 0.25)',
                      backgroundColor: 'rgba(239, 68, 68, 0.08)',
                      color: '#EF4444',
                      cursor: 'pointer',
                    }}
                    title="Delete Message"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message View Modal */}
      {selectedMessage && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="glass-card"
            style={{
              width: '100%',
              maxWidth: '620px',
              padding: '2rem',
              backgroundColor: 'var(--bg-primary)',
              border: '1px solid var(--card-border)',
              borderRadius: '16px',
              boxShadow: 'var(--shadow-lg)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
              <div>
                <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--accent)', textTransform: 'uppercase' }}>
                  // Contact Message Record
                </span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-display)', marginTop: '0.2rem' }}>
                  {selectedMessage.subject}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedMessage(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  padding: '0.3rem',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div
              className="font-mono"
              style={{
                backgroundColor: '#07090E',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid var(--card-border)',
                marginBottom: '1.25rem',
                fontSize: '0.84rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.4rem',
              }}
            >
              <div><span style={{ color: 'var(--text-muted)' }}>FROM: </span>{selectedMessage.name}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>EMAIL: </span><a href={`mailto:${selectedMessage.email}`} style={{ color: 'var(--accent)' }}>{selectedMessage.email}</a></div>
              <div><span style={{ color: 'var(--text-muted)' }}>SENT: </span>{new Date(selectedMessage.created_at).toLocaleString()}</div>
              <div><span style={{ color: 'var(--text-muted)' }}>STATUS: </span><span style={{ color: selectedMessage.status === 'unread' ? '#EF4444' : '#10B981' }}>{selectedMessage.status.toUpperCase()}</span></div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <p className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>// Message Body:</p>
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--card-border)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  lineHeight: '1.7',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {selectedMessage.message}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button
                type="button"
                onClick={() => handleToggleStatus(selectedMessage)}
                className="btn btn-secondary"
                style={{ fontSize: '0.82rem' }}
              >
                Mark as {selectedMessage.status === 'unread' ? 'Read' : 'Unread'}
              </button>
              <button
                type="button"
                onClick={() => handleDelete(selectedMessage.id)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  color: '#EF4444',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                }}
              >
                Delete Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
