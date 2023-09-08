const signature = "#7A28CB";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            colors: {
                primary: "rgba(1,4,6,0.94)",
                secondary: "#292838",
                tertiary: "#ffffff",
                signature: signature,
                "black-100": "#100c2c",
                "black-200": "#090134",
                "white-100": "#f3f3f3",
            },
            boxShadow: {
                card: "0px 14px 122px -14px #00000033",
            },
            screens: {
                xs: "450px",
            },
            backgroundImage: {
                "landing-page": "url('/public/landing-page.webp')",
                "signal-gradient": `-webkit-linear-gradient(90deg,${signature+"00"} 0%,${signature} 100%);`,
            },
            animation: {
                "ping-slow": "ping 2.5s ease-out infinite"
            }
        },
    },
    plugins: [],
};
