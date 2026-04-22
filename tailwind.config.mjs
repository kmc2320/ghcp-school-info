/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        nebula: {
          deep: '#0b0524',
          violet: '#3b1e8a',
          pink: '#ff5fa2',
          cyan: '#5be3ff',
        },
        star: {
          warm: '#fff7c2',
        },
      },
      fontFamily: {
        sans: ['"Zen Kaku Gothic New"', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.85' },
          '50%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(91, 227, 255, 0)' },
          '50%': { boxShadow: '0 0 24px rgba(91, 227, 255, 0.45)' },
        },
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        twinkle: 'twinkle 2.8s ease-in-out infinite',
        glow: 'glow 2.6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
