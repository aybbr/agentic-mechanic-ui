import { create } from 'zustand';

// Define types for the UI state
interface UIState {
  // Modal states
  isMenuOpen: boolean;
  isWaitlistOpen: boolean;

  // Theme (for future implementation)
  theme: 'light' | 'dark';

  // Actions
  toggleMenu: () => void;
  closeMenu: () => void;
  openWaitlist: () => void;
  closeWaitlist: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

// Create the store
export const useUIStore = create<UIState>((set) => ({
  // Initial state
  isMenuOpen: false,
  isWaitlistOpen: false,
  theme: 'light',

  // Actions
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeMenu: () => set({ isMenuOpen: false }),
  openWaitlist: () => set({ isWaitlistOpen: true }),
  closeWaitlist: () => set({ isWaitlistOpen: false }),
  setTheme: (theme) => set({ theme }),
}));
