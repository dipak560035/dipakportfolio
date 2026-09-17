import { supabase, isSupabaseConfigured } from '../lib/supabase';

const ADMIN_SESSION_KEY = 'dipak_admin_session_auth';

// Default local fallback admin credentials (read dynamically from .env or default)
const LOCAL_ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL
const LOCAL_ADMIN_PASS = import.meta.env.VITE_ADMIN_PASSWORD

export interface AdminUser {
  email: string;
  isLoggedIn: boolean;
}

export const checkAdminAuth = async (): Promise<AdminUser | null> => {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data } = await supabase.auth.getSession();
      if (data.session && data.session.user) {
        return {
          email: data.session.user.email || LOCAL_ADMIN_EMAIL,
          isLoggedIn: true,
        };
      }
    } catch (err) {
      console.error('Error checking Supabase auth session:', err);
    }
  }

  // Fallback local session check
  const localSession = localStorage.getItem(ADMIN_SESSION_KEY);
  if (localSession) {
    try {
      const parsed = JSON.parse(localSession);
      if (parsed.email && parsed.expiry > Date.now()) {
        return { email: parsed.email, isLoggedIn: true };
      }
    } catch {
      localStorage.removeItem(ADMIN_SESSION_KEY);
    }
  }

  return null;
};

export const adminLogin = async (
  email: string,
  pass: string
): Promise<{ success: boolean; error?: string }> => {
  const cleanEmail = email.trim();
  const cleanPass = pass.trim();

  if (!cleanEmail || !cleanPass) {
    return { success: false, error: 'Email and password are required.' };
  }

  // 1. Supabase Cloud Auth Login
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: cleanPass,
      });

      if (error) {
        return { success: false, error: error.message };
      }

      if (data.session) {
        return { success: true };
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Authentication service error.';
      return { success: false, error: msg };
    }
  }

  // 2. Strict Local Admin Login Verification
  const isAllowedUser =
    cleanEmail.toLowerCase() === 'dipak' ||
    cleanEmail.toLowerCase() === LOCAL_ADMIN_EMAIL.toLowerCase() ||
    cleanEmail.toLowerCase() === 'admin';

  if (isAllowedUser) {
    // STRICT CHECK: ONLY accept the exact configured password (Dipak@2026!)
    if (cleanPass === LOCAL_ADMIN_PASS) {
      const sessionData = {
        email: cleanEmail.includes('@') ? cleanEmail : LOCAL_ADMIN_EMAIL,
        expiry: Date.now() + 86400000 * 7, // 7 days session
      };
      localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(sessionData));
      return { success: true };
    } else {
      return { success: false, error: 'Incorrect admin password.' };
    }
  }

  return { success: false, error: 'Invalid admin email or username.' };
};

export const adminLogout = async (): Promise<void> => {
  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.auth.signOut();
    } catch (e) {
      console.error('Sign out error:', e);
    }
  }
  localStorage.removeItem(ADMIN_SESSION_KEY);
};
