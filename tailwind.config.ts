import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        main:{
          hover:'#7B61FF',
          active:'#6667AB',
          disabled: '#6F70AE'
        },
        error : '#BB2649',
        gray:{ //TODO
          300: '#E5E7EB',
          500: '#6B7280'
        }
      },
    },
  },
  plugins: [],
};
export default config;

