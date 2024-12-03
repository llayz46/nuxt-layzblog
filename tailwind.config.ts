import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import { setupInspiraUI } from "@inspira-ui/plugins";

export default {
    darkMode: "selector",
    safelist: ["dark"],
    prefix: "",
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'my-background': '#0F1113FF',
                'my-primary': {
                    '50': '#eef8ff',
                    '100': '#d9efff',
                    '200': '#bce3ff',
                    '300': '#8ed3ff',
                    '400': '#59b9ff',
                    '500': '#3b9eff',
                    '600': '#1b7af5',
                    '700': '#1464e1',
                    '800': '#1750b6',
                    '900': '#19468f',
                    '950': '#142b57',
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
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
            fontFamily: {
                'sg': ['Space Grotesk', 'sans-serif'],
                'sans': ['DM Sans', 'sans-serif'],
            },
            keyframes: {
                'collapsible-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-collapsible-content-height)' },
                },
                'collapsible-up': {
                    from: { height: 'var(--radix-collapsible-content-height)' },
                    to: { height: 0 },
                },
                'shiny-badge-slide': {
                    "0%": { transform: "translateX(-110%) skew(-16deg)" },
                    "15%, 100%": { transform: "translateX(110%) skew(-16deg)" },
                }
            },
            animation: {
                'collapsible-down': 'collapsible-down 0.2s ease-in-out',
                'collapsible-up': 'collapsible-up 0.2s ease-in-out',
                'shiny-badge-slide': 'shiny-badge-slide 7s infinite',
            },
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        animate,
        setupInspiraUI
    ],
} satisfies Config;