import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: '#036aa1',
          'primary-light': '#35bdfa',
          accent: '#036aa1',
          neutral: '#595959',
          'base-100': '#ffffff',
          'base-content': '#000000',
          'neutral-100': '#1F1F1F',
        },
        dark: {
          primary: '#35bdfa',
          accent: '#036aa1',
          neutral: '#c4c4c4',
          'base-100': '#121212',
          'base-200': '#1f1f1f',
          'base-content': '#ffffff',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
export default config;
