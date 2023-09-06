/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#caf0f8",
                secondary: "#023e8a",
                tertiary: "#03045e",
                "black-100": "#100c2c",
                "black-200": "#090134",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 24px 122px -14px #000000",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "landing-page": "url('/public/landing-page.webp')",
            },
        },
    },
    plugins: [],
};
