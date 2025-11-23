import { create } from 'zustand';

interface ThemeStore {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
    setTheme: (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        set({ theme });
    },
}));
