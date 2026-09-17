import { supabase, isSupabaseConfigured } from '../lib/supabase';

export interface ContactMessageInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactMessage extends ContactMessageInput {
  id: string;
  created_at: string;
  status: 'unread' | 'read';
}

const LOCAL_STORAGE_KEY = 'dipak_portfolio_contact_messages';

// Seed initial default messages for local testing if local storage is empty
const getInitialLocalMessages = (): ContactMessage[] => [
  {
    id: 'msg-demo-1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@techfounders.io',
    subject: 'MERN & Next.js Senior Engineering Role',
    message: 'Hi Dipak, saw your Gantabya Mobility project and impressive tech stack. We are building an enterprise SaaS platform and would love to connect for a senior full-stack opportunity!',
    status: 'unread',
    created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: 'msg-demo-2',
    name: 'Alex Rivera',
    email: 'alex@digitalventures.np',
    subject: 'Web Application Consulting Inquiry',
    message: 'Hello Dipak, we need a high-performance React/Node.js web application built with clean architecture and real-time backend updates. Are you open for freelance projects this quarter?',
    status: 'read',
    created_at: new Date(Date.now() - 3600000 * 28).toISOString(),
  },
];

const getLocalMessages = (): ContactMessage[] => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      const initial = getInitialLocalMessages();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse local contact messages:', err);
    return [];
  }
};

const saveLocalMessages = (messages: ContactMessage[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(messages));
  } catch (err) {
    console.error('Failed to save local contact messages:', err);
  }
};

export const submitContactMessage = async (
  input: ContactMessageInput
): Promise<{ success: boolean; error?: string; isLocalFallback?: boolean }> => {
  const name = input.name.trim();
  const email = input.email.trim();
  const subject = input.subject.trim();
  const message = input.message.trim();

  if (!name || !email || !subject || !message) {
    return { success: false, error: 'All form fields are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name,
          email,
          subject,
          message,
          status: 'unread',
        },
      ]);

      if (error) {
        console.error('Supabase error submitting contact message:', error);
        return { success: false, error: error.message || 'Failed to record message in database.' };
      }

      return { success: true };
    } catch (err) {
      console.error('Database connection error:', err);
      return { success: false, error: 'Network error. Please try again.' };
    }
  }

  // Fallback mode if Supabase is not configured yet
  const newMessage: ContactMessage = {
    id: 'local-' + Date.now() + '-' + Math.random().toString(36).substring(2, 7),
    name,
    email,
    subject,
    message,
    status: 'unread',
    created_at: new Date().toISOString(),
  };

  const list = getLocalMessages();
  saveLocalMessages([newMessage, ...list]);
  return { success: true, isLocalFallback: true };
};

export const fetchContactMessages = async (): Promise<{
  messages: ContactMessage[];
  error?: string;
  isLocalFallback?: boolean;
}> => {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching messages from Supabase:', error);
        return { messages: getLocalMessages(), error: error.message, isLocalFallback: true };
      }

      return { messages: data as ContactMessage[] };
    } catch (err) {
      console.error('Fetch error:', err);
      return { messages: getLocalMessages(), isLocalFallback: true };
    }
  }

  return { messages: getLocalMessages(), isLocalFallback: true };
};

export const updateMessageStatus = async (
  id: string,
  newStatus: 'unread' | 'read'
): Promise<{ success: boolean; error?: string }> => {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        return { success: false, error: error.message };
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Update failed';
      return { success: false, error: msg };
    }
  }

  // Local storage update
  const list = getLocalMessages();
  const updated = list.map((m) => (m.id === id ? { ...m, status: newStatus } : m));
  saveLocalMessages(updated);
  return { success: true };
};

export const deleteMessage = async (
  id: string
): Promise<{ success: boolean; error?: string }> => {
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) {
        return { success: false, error: error.message };
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Delete failed';
      return { success: false, error: msg };
    }
  }

  // Local storage update
  const list = getLocalMessages();
  const updated = list.filter((m) => m.id !== id);
  saveLocalMessages(updated);
  return { success: true };
};
