/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  extend: {
    colors: {
      green: {
        20: "#1CC3D9",
        50: "#30AF5B",
        90: "#292C27",
      },
      gray: {
        10: "#EEEEEE",
        20: "#A2A2A2",
        30: "#7B7B7B",
        50: "#585858",
        90: "#141414",
      },
      orange: {
        50: "#FF814C",
      },
      blue: {
        50: "#67BFF7",
        60: "#0295F2",
        70: "#021639",
      },
      yellow: {
        50: "#FEC601",
      },
    },
    backgroundImage: {
      "bg-about": "url('/images/title_about.svg')",
      "bg-feat": "url('/images/title_feat.svg')",
      "bg-achieve": "url('/images/title_achieve.svg')",
      "bg-review": "url('/images/title_reviews.svg')",
      "bg-faqs": "url('/images/title_faqs.svg')",
      "bg-paris": "url('/images/paris.webp')",
    },
    screens: {
      xs: "400px",
      md: "768px",
      "3xl": "1680px",
      "4xl": "2200px",
    },
    maxWidth: {
      "10xl": "1512px",
    },
    borderRadius: {
      "5xl": "40px",
    },
  },
};
export const plugins = [];
