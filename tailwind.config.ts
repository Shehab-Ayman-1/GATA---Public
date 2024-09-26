import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: ["./app/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./layout/**/*.{ts,tsx}"],
    theme: {
        container: {
            center: true,
            screens: {
                "2xl": "1400px",
            },
        },
        fontFamily: {
            sans: ["Poppins", "sans-serif"],
        },
        extend: {
            boxShadow: {
                around: "0 0 20px rgba(0, 0, 0, 0.2)",
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    "50": "var(--primary-50)",
                    "100": "var(--primary-100)",
                    "200": "var(--primary-200)",
                    "300": "var(--primary-300)",
                    "400": "var(--primary-400)",
                    "500": "var(--primary-500)",
                    "600": "var(--primary-600)",
                    "700": "var(--primary-700)",
                    "800": "var(--primary-800)",
                    "900": "var(--primary-900)",
                    DEFAULT: "var(--primary-500)",
                    foreground: "var(--primary-200)",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "translate-x": "translate-x 30s ease-in-out infinite alternate",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
                preloader: "preloader 3s infinite",
            },
            transitionDuration: {
                "2000": "2000ms",
                "3000": "3000ms",
                "4000": "4000ms",
                "5000": "5000ms",
            },
            keyframes: {
                "accordion-down": {
                    from: {
                        height: "0",
                    },
                    to: {
                        height: "var(--radix-accordion-content-height)",
                    },
                },
                "accordion-up": {
                    from: {
                        height: "var(--radix-accordion-content-height)",
                    },
                    to: {
                        height: "0",
                    },
                },
                "caret-blink": {
                    "0%,70%,100%": {
                        opacity: "1",
                    },
                    "20%,50%": {
                        opacity: "0",
                    },
                },
                "translate-x": {
                    from: {
                        transform: "translateX(-100%)",
                    },
                    to: {
                        transform: "translateX(100%)",
                    },
                },
                ping: {
                    "75%, 100%": {
                        transform: "scale(1.15)",
                        opacity: "0",
                    },
                },
                preloader: {
                    "0%, 75%, 100%": {
                        opacity: "0",
                        transform: "rotateY(-90deg)",
                    },
                    "25%, 50%": {
                        opacity: "1",
                        transform: "rotateY(0)",
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
