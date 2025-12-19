/**
 * Theme Manager for Quiz Quest
 * Handles changing primary colors via CSS variables.
 */

export const Theme = {
    presets: {
        blue: {
            primary: '#1313ec',
            primaryDark: '#0b0b8a',
            secondary: '#0bda68'
        },
        red: {
            primary: '#ef4444',
            primaryDark: '#b91c1c',
            secondary: '#22c55e'
        },
        green: {
            primary: '#10b981',
            primaryDark: '#047857',
            secondary: '#3b82f6'
        },
        purple: {
            primary: '#8b5cf6',
            primaryDark: '#6d28d9',
            secondary: '#10b981'
        },
        orange: {
            primary: '#f97316',
            primaryDark: '#c2410c',
            secondary: '#3b82f6'
        },
        pink: {
            primary: '#ec4899',
            primaryDark: '#be185d',
            secondary: '#10b981'
        }
    },

    init() {
        const savedTheme = localStorage.getItem('quizTheme') || 'blue';
        this.setTheme(savedTheme, false); // false = don't save again on init
    },

    setTheme(themeName, save = true) {
        const theme = this.presets[themeName];
        if (!theme) return;

        const root = document.documentElement;

        // Set CSS Variables
        root.style.setProperty('--primary-color', theme.primary);
        root.style.setProperty('--primary-dark', theme.primaryDark);
        root.style.setProperty('--secondary-color', theme.secondary); // Update secondary accent if needed

        // Calculate RGB for transparency support if needed later
        // const r = parseInt(theme.primary.slice(1, 3), 16);
        // const g = parseInt(theme.primary.slice(3, 5), 16);
        // const b = parseInt(theme.primary.slice(5, 7), 16);
        // root.style.setProperty('--primary-rgb', `${r}, ${g}, ${b}`);

        if (save) {
            localStorage.setItem('quizTheme', themeName);
        }
    }
};

// Auto-init on load
// We use a small inline script in HTML head for instant loading to prevent FOUC, 
// but this module allows runtime switching.
document.addEventListener('DOMContentLoaded', () => {
    Theme.init();
});
