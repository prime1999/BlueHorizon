/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            fontFamily: {
                nova: ["Nova Square", "sans-serif"],
                kanit: ["Kanit", "sans-serif"],
                inter: ["Inter", "sans-serif"],
            },
            colors: {
                darkBlue: "#244D61",
                blue: "#5689C0",
                lightBlue: "#75E2FF",
                light: "#EAEBED",
                dark: "#41436A",
                crimson: "#974063",
                red: "#F54768",
                orange: "#FF9677",
            },
            borderColor: {
                default: "#27272A",
                primary: "#3498db",
                secondary: "#2ecc71",
            },
            borderRadius: {
                default: "0.25rem",
                md: "0.5rem",
                lg: "1rem",
                xl: "1.5rem",
            },
            fontSize: {
                sm: "0.875rem",
                md: "1rem",
                lg: "1.125rem",
            },
            spacing: {
                xs: "0.25rem",
                sm: "0.5rem",
                md: "1rem",
                lg: "1.5rem",
            },
        },
    },
    plugins: [],
};
