const signature = "#2c6aef";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "#00072d",
                secondary: "#001c55",
                tertiary: "#ffffff",
                signature: signature,
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
                "signal-gradient": `-webkit-linear-gradient(90deg,${signature+"00"} 0%,${signature} 100%);`,
            },
        },
    },
    plugins: [],
};
